-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Table: Profiles (Extends Supabase Auth users)
create table profiles (
  id uuid references auth.users not null primary key,
  phone text unique,
  role text check (role in ('farmer', 'buyer', 'logistics', 'admin')),
  full_name text,
  farm_name text,
  location_lat float,
  location_lng float,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS: Profiles are viewable by everyone (for discovery), editable only by self
alter table profiles enable row level security;
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update their own profile." on profiles for update using (auth.uid() = id);

-- Table: Listings (Farmers' Supply)
create table listings (
  id uuid default uuid_generate_v4() primary key,
  farmer_id uuid references profiles(id) not null,
  crop_type text not null,
  variety text,
  quantity_kg float not null,
  price_per_kg float not null,
  harvest_date date,
  grade text check (grade in ('A', 'B', 'C', 'Premium')),
  status text default 'active' check (status in ('active', 'sold', 'cancelled')),
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS: Listings viewable by all, editable by owner
alter table listings enable row level security;
create policy "Listings are viewable by everyone." on listings for select using (true);
create policy "Farmers can insert their own listings." on listings for insert with check (auth.uid() = farmer_id);
create policy "Farmers can update their own listings." on listings for update using (auth.uid() = farmer_id);

-- Table: Orders (Buyer Transactions)
create table orders (
  id uuid default uuid_generate_v4() primary key,
  buyer_id uuid references profiles(id) not null,
  listing_id uuid references listings(id) not null,
  quantity_kg float not null,
  total_price float not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS: Orders viewable by buyer and seller (via listing)
alter table orders enable row level security;
create policy "Buyers can view their own orders." on orders for select using (auth.uid() = buyer_id);
create policy "Buyers can insert orders." on orders for insert with check (auth.uid() = buyer_id);

-- Table: Logistics Jobs (Fleet Tracking)
create table logistics_jobs (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references orders(id) not null,
  driver_id uuid references profiles(id),
  pickup_lat float,
  pickup_lng float,
  drop_lat float,
  drop_lng float,
  status text default 'open' check (status in ('open', 'assigned', 'in_transit', 'completed')),
  vehicle_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS: Logistics jobs
alter table logistics_jobs enable row level security;
create policy "Logistics jobs viewable by authenticated users." on logistics_jobs for select using (auth.role() = 'authenticated');
create policy "Drivers can update assigned jobs." on logistics_jobs for update using (auth.uid() = driver_id);

-- Function to handle new user signup
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, phone, role)
  values (new.id, new.phone, 'farmer'); -- Default to farmer, can be changed
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
