import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type RsvpPayload = {
  full_name?: unknown;
  email?: unknown;
  attending?: unknown;
  plus_one?: unknown;
  plus_one_name?: unknown;
  dietary?: unknown;
  song_request?: unknown;
  track_flights?: unknown;
  notes?: unknown;
};

function asString(v: unknown): string | null {
  return typeof v === "string" && v.trim().length > 0 ? v.trim() : null;
}

function asBool(v: unknown): boolean {
  return v === true;
}

export async function POST(request: Request) {
  let body: RsvpPayload;
  try {
    body = (await request.json()) as RsvpPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const full_name = asString(body.full_name);
  const email = asString(body.email);
  const attending =
    typeof body.attending === "boolean" ? body.attending : null;

  if (!full_name || !email || attending === null) {
    return NextResponse.json(
      {
        ok: false,
        message: "Full name, email, and attending status are required.",
      },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.warn(
      "[rsvp] Supabase env vars missing — skipping insert. Configure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel.",
    );
    return NextResponse.json(
      {
        ok: false,
        message: "RSVP not yet configured — Dylan will hook up Supabase soon.",
      },
      { status: 503 },
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const row = {
    full_name,
    email,
    attending,
    plus_one: asBool(body.plus_one),
    plus_one_name: asString(body.plus_one_name),
    dietary: asString(body.dietary),
    song_request: asString(body.song_request),
    track_flights: asBool(body.track_flights),
    notes: asString(body.notes),
  };

  const { error } = await supabase.from("rsvps").insert(row);

  if (error) {
    console.error("[rsvp] Supabase insert failed:", error);
    return NextResponse.json(
      { ok: false, message: "Could not save your RSVP. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
