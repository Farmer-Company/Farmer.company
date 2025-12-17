-- Run this in your Supabase SQL Editor

create table public.beta_users (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  phone text not null,
  role text not null,
  latitude float,
  longitude float,
  status text default 'waitlist' -- waitlist, approved, rejected
);

-- Enable RLS (Row Level Security) if you want to restrict public access
alter table public.beta_users enable row level security;

-- Policy to allow ANYONE to insert (since it's a public sign up form)
create policy "Allow public inserts"
on public.beta_users
for insert
to anon
with check (true);

-- Policy to allow anon to read nothing (users shouldn't see others' data)
create policy "Allow admins to read"
on public.beta_users
for select
to service_role
using (true);
