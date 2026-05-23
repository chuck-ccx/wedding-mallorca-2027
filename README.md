# Dylan & Meagan — Mallorca, June 5 2027

A single-page wedding site. Hero, countdown, schedule, accommodation, dress code,
FAQ, and an RSVP form that writes into Supabase.

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Supabase (RSVP storage)

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys when you have them
npm run dev
```

Without Supabase env vars, the RSVP endpoint returns a friendly 503 and the form
shows a "not yet configured" message — everything else works.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Copy the project URL and the **service role** key into `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

The service role key bypasses RLS and is used server-side only from the
`/api/rsvp` route. Never expose it to the client.

## Deploy

1. Push to GitHub.
2. Import the repo in Vercel.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as project env vars.
4. Deploy.

## Where to plug things in

- **Venue map / address** — `app/components/Details.tsx` (Google Maps iframe + `DIRECTIONS_URL`).
- **Schedule rows** — `data/schedule.ts`.
- **Accommodation cards** — `data/accommodation.ts` (Airbnb links + future hotel picks).
- **Dress code photos** — drop real images into `public/dress-code/` and update `data/dressCode.ts`.
- **FAQ entries** — `data/faq.ts`.
- **RSVP fields / copy** — `app/components/Rsvp.tsx`; server validation in `app/api/rsvp/route.ts`.
- **Countdown target** — `app/components/Countdown.tsx` (`TARGET` constant).
