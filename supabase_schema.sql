-- ============================================================
-- Globe Trotter — Supabase schema
-- Run this once in your Supabase project: Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- ---------- profiles (one row per signed-up user) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text,
  phone text,
  home_city text,
  bio text,
  role text not null default 'user',   -- 'user' or 'admin'
  created_at timestamptz not null default now()
);

-- ---------- trips ----------
create table if not exists public.trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  start_date date,
  end_date date,
  target_budget numeric not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------- stops (cities within a trip) ----------
create table if not exists public.stops (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips(id) on delete cascade,
  city_name text not null
);

-- ---------- items (expenses within a stop) ----------
create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),
  stop_id uuid not null references public.stops(id) on delete cascade,
  title text not null,
  category text not null,
  cost numeric not null default 0
);

-- ---------- activity_log (the "terminal" feed) ----------
create table if not exists public.activity_log (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete set null,
  user_email text,
  action text not null,
  details text,
  created_at timestamptz not null default now()
);

-- ============================================================
-- Auto-create a profile row whenever someone signs up
-- ============================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)), new.email);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- Row Level Security — every user only sees their own data,
-- admins (profiles.role = 'admin') can see everything.
-- ============================================================
alter table public.profiles enable row level security;
alter table public.trips enable row level security;
alter table public.stops enable row level security;
alter table public.items enable row level security;
alter table public.activity_log enable row level security;

create or replace function public.is_admin()
returns boolean as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$ language sql security definer stable;

-- profiles
drop policy if exists "profiles_select" on public.profiles;
create policy "profiles_select" on public.profiles for select
  using (auth.uid() = id or public.is_admin());

drop policy if exists "profiles_update" on public.profiles;
create policy "profiles_update" on public.profiles for update
  using (auth.uid() = id or public.is_admin());

-- trips
drop policy if exists "trips_select" on public.trips;
create policy "trips_select" on public.trips for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "trips_insert" on public.trips;
create policy "trips_insert" on public.trips for insert
  with check (auth.uid() = user_id);

drop policy if exists "trips_update" on public.trips;
create policy "trips_update" on public.trips for update
  using (auth.uid() = user_id);

drop policy if exists "trips_delete" on public.trips;
create policy "trips_delete" on public.trips for delete
  using (auth.uid() = user_id);

-- stops (ownership via parent trip)
drop policy if exists "stops_select" on public.stops;
create policy "stops_select" on public.stops for select
  using (exists (select 1 from public.trips t where t.id = stops.trip_id and (t.user_id = auth.uid() or public.is_admin())));

drop policy if exists "stops_write" on public.stops;
create policy "stops_write" on public.stops for all
  using (exists (select 1 from public.trips t where t.id = stops.trip_id and t.user_id = auth.uid()))
  with check (exists (select 1 from public.trips t where t.id = stops.trip_id and t.user_id = auth.uid()));

-- items (ownership via stop -> trip)
drop policy if exists "items_select" on public.items;
create policy "items_select" on public.items for select
  using (exists (select 1 from public.stops s join public.trips t on t.id = s.trip_id
                 where s.id = items.stop_id and (t.user_id = auth.uid() or public.is_admin())));

drop policy if exists "items_write" on public.items;
create policy "items_write" on public.items for all
  using (exists (select 1 from public.stops s join public.trips t on t.id = s.trip_id
                 where s.id = items.stop_id and t.user_id = auth.uid()))
  with check (exists (select 1 from public.stops s join public.trips t on t.id = s.trip_id
                       where s.id = items.stop_id and t.user_id = auth.uid()));

-- activity_log — anyone can log their own actions, only admins can read the feed
drop policy if exists "activity_insert" on public.activity_log;
create policy "activity_insert" on public.activity_log for insert
  with check (auth.uid() = user_id);

drop policy if exists "activity_select" on public.activity_log;
create policy "activity_select" on public.activity_log for select
  using (public.is_admin());

-- ============================================================
-- To make yourself an admin, after you've signed up once in the app, run:
--   update public.profiles set role = 'admin' where email = 'you@example.com';
-- ============================================================
