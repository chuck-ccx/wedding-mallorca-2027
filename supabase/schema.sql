create extension if not exists "pgcrypto";

create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  attending boolean not null,
  plus_one boolean default false,
  plus_one_name text,
  dietary text,
  song_request text,
  track_flights boolean default false,
  notes text,
  created_at timestamptz default now()
);
