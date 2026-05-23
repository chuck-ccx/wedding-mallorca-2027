"use client";

import { useSyncExternalStore } from "react";

const TARGET = new Date("2027-06-05T16:00:00+02:00").getTime();

function getDiff() {
  const now = Date.now();
  const ms = Math.max(0, TARGET - now);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function getSnapshot() {
  return Date.now();
}

function subscribe(callback: () => void) {
  const id = setInterval(callback, 1000);
  return () => clearInterval(id);
}

export default function Countdown() {
  const clientNow = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const mounted = clientNow !== null;
  const diff = mounted ? getDiff() : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const cells: { value: number; label: string }[] = [
    { value: diff.days, label: "Days" },
    { value: diff.hours, label: "Hours" },
    { value: diff.minutes, label: "Minutes" },
    { value: diff.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {cells.map((c) => (
            <div key={c.label} className="text-center">
              <div
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-none tabular-nums"
                aria-live="polite"
              >
                {mounted ? String(c.value).padStart(2, "0") : "--"}
              </div>
              <div className="mt-3 text-[10px] sm:text-xs tracking-[0.25em] text-ink-soft uppercase font-sans">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
