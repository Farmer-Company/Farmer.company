-- USERS: Profiles for Farmers, Buyers, Logistics, etc.
-- Note: In a production Supabase app, this would be linked to auth.users
create table public.users (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  phone text unique not null,
  name text not null,
  role text not null check (role in ('farmer', 'customer', 'logistics', 'vendor', 'admin')),
  latitude float,
  longitude float,
  address text,
  avatar_url text
);

-- PRODUCTS: Catalog of available produce types
create table public.products (
  id uuid default gen_random_uuid() primary key,
  name text not null unique, -- e.g. "Tomato", "Potato"
  category text not null, -- e.g. "Vegetable", "Fruit"
  image_url text,
  base_price_min float, -- Guidance price
  base_price_max float
);

-- LISTINGS: Supply posted by Farmers
create table public.listings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  farmer_id uuid references public.users(id) not null,
  product_id uuid references public.products(id) not null,
  quantity_kg float not null,
  price_per_kg float not null,
  grade text not null, -- 'A', 'B', 'C'
  harvest_date date,
  description text,
  status text default 'active' check (status in ('active', 'sold', 'cancelled')),
  image_url text
);

-- ORDERS: Transactions
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  buyer_id uuid references public.users(id) not null,
  listing_id uuid references public.listings(id) not null,
  quantity_kg float not null,
  total_price float not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled'))
);

-- RLS Policies (Simplified for MVP - assuming public access or service role for now)
alter table public.users enable row level security;
alter table public.products enable row level security;
alter table public.listings enable row level security;
alter table public.orders enable row level security;

-- Allow public read/write for demo purposes (BE CAREFUL IN PRODUCTION)
create policy "Public Access Users" on public.users for all using (true) with check (true);
create policy "Public Access Products" on public.products for all using (true) with check (true);
create policy "Public Access Listings" on public.listings for all using (true) with check (true);
create policy "Public Access Orders" on public.orders for all using (true) with check (true);

-- SEED DATA
insert into public.products (name, category, base_price_min, base_price_max) values
('Tomato', 'Vegetable', 20, 40),
('Potato', 'Vegetable', 15, 30),
('Onion', 'Vegetable', 25, 50),
('Apple', 'Fruit', 100, 180),
('Pomegranate', 'Fruit', 80, 150);
