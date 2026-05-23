"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  full_name: string;
  email: string;
  attending: "" | "yes" | "no";
  plus_one: "" | "yes" | "no";
  plus_one_name: string;
  dietary: string;
  song_request: string;
  track_flights: boolean;
  notes: string;
};

const initialState: FormState = {
  full_name: "",
  email: "",
  attending: "",
  plus_one: "",
  plus_one_name: "",
  dietary: "",
  song_request: "",
  track_flights: false,
  notes: "",
};

const labelClass =
  "block text-xs tracking-[0.25em] uppercase text-ink-soft font-sans mb-2";
const inputClass =
  "w-full bg-cream border border-ink/15 px-4 py-3 text-base text-ink font-sans focus:outline-none focus:border-terracotta rounded-md";
const radioRowClass = "flex items-center gap-6 mt-1";

export default function Rsvp() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedName, setConfirmedName] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.full_name.trim() || !form.email.trim() || !form.attending) {
      setError("Please fill in your name, email, and whether you can attend.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        attending: form.attending === "yes",
        plus_one: form.attending === "yes" && form.plus_one === "yes",
        plus_one_name:
          form.attending === "yes" && form.plus_one === "yes"
            ? form.plus_one_name.trim() || null
            : null,
        dietary: form.dietary.trim() || null,
        song_request: form.song_request.trim() || null,
        track_flights: form.track_flights,
        notes: form.notes.trim() || null,
      };

      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: { ok?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok || !data.ok) {
        setError(
          data.message ||
            "Something went wrong submitting your RSVP. Please try again.",
        );
        setSubmitting(false);
        return;
      }

      const firstName = form.full_name.trim().split(/\s+/)[0] || "friend";
      setConfirmedName(firstName);
    } catch {
      setError("Network error — please try again in a moment.");
      setSubmitting(false);
    }
  }

  const showPlusOne = form.attending === "yes";
  const showPlusOneName = showPlusOne && form.plus_one === "yes";

  return (
    <section id="rsvp" className="py-16 md:py-24 px-6 bg-cream">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink text-center">
          RSVP
        </h2>
        <p className="mt-6 text-base sm:text-lg text-ink-soft text-center leading-relaxed">
          Let us know by January 2027 so we can plan accordingly.
        </p>

        {confirmedName ? (
          <div className="mt-12 border border-terracotta/30 bg-cream p-8 text-center">
            <div className="text-xs tracking-[0.25em] uppercase text-terracotta font-sans">
              RSVP received
            </div>
            <p className="mt-4 font-serif text-2xl sm:text-3xl text-ink leading-snug">
              Thanks, {confirmedName} — see you in Mallorca.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label className={labelClass} htmlFor="full_name">
                Full name
              </label>
              <input
                id="full_name"
                type="text"
                required
                value={form.full_name}
                onChange={(e) => update("full_name", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>Will you be there?</legend>
              <div className={radioRowClass}>
                <label className="flex items-center gap-2 font-sans text-ink">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={form.attending === "yes"}
                    onChange={() => update("attending", "yes")}
                    required
                    className="accent-terracotta"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 font-sans text-ink">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={form.attending === "no"}
                    onChange={() => {
                      update("attending", "no");
                      update("plus_one", "");
                      update("plus_one_name", "");
                    }}
                    className="accent-terracotta"
                  />
                  No
                </label>
              </div>
            </fieldset>

            {showPlusOne && (
              <fieldset>
                <legend className={labelClass}>Bringing a plus-one?</legend>
                <div className={radioRowClass}>
                  <label className="flex items-center gap-2 font-sans text-ink">
                    <input
                      type="radio"
                      name="plus_one"
                      value="yes"
                      checked={form.plus_one === "yes"}
                      onChange={() => update("plus_one", "yes")}
                      className="accent-terracotta"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 font-sans text-ink">
                    <input
                      type="radio"
                      name="plus_one"
                      value="no"
                      checked={form.plus_one === "no"}
                      onChange={() => {
                        update("plus_one", "no");
                        update("plus_one_name", "");
                      }}
                      className="accent-terracotta"
                    />
                    No
                  </label>
                </div>
              </fieldset>
            )}

            {showPlusOneName && (
              <div>
                <label className={labelClass} htmlFor="plus_one_name">
                  Plus-one name
                </label>
                <input
                  id="plus_one_name"
                  type="text"
                  value={form.plus_one_name}
                  onChange={(e) => update("plus_one_name", e.target.value)}
                  className={inputClass}
                />
              </div>
            )}

            <div>
              <label className={labelClass} htmlFor="dietary">
                Dietary restrictions
              </label>
              <textarea
                id="dietary"
                rows={3}
                value={form.dietary}
                onChange={(e) => update("dietary", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="song_request">
                Song request
              </label>
              <input
                id="song_request"
                type="text"
                value={form.song_request}
                onChange={(e) => update("song_request", e.target.value)}
                className={inputClass}
              />
            </div>

            <label className="flex items-start gap-3 font-sans text-ink">
              <input
                type="checkbox"
                checked={form.track_flights}
                onChange={(e) => update("track_flights", e.target.checked)}
                className="mt-1 accent-terracotta"
              />
              <span className="text-sm leading-relaxed">
                Track flights for me from Edmonton — we&rsquo;ll email you when fares
                drop.
              </span>
            </label>

            <div>
              <label className={labelClass} htmlFor="notes">
                Notes for Dylan &amp; Meagan
              </label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className={inputClass}
              />
            </div>

            {error && (
              <div
                role="alert"
                className="border border-terracotta/40 bg-terracotta/10 text-ink px-4 py-3 text-sm font-sans rounded-md"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-block bg-terracotta text-cream font-sans text-sm tracking-[0.2em] px-8 py-4 rounded-md hover:bg-[#b15c3e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "SENDING…" : "SEND RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
