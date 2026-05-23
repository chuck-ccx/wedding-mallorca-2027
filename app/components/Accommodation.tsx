import { accommodation } from "../../data/accommodation";

export default function Accommodation() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink text-center">
          Where to Stay
        </h2>
        <p className="mt-6 text-base sm:text-lg text-ink-soft text-center max-w-2xl mx-auto leading-relaxed">
          Family and the wedding party have spots reserved. More options for everyone
          else coming soon — we&rsquo;ll point you to nearby hotels and Airbnbs once the
          guest list firms up.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {accommodation.map((stay) => (
            <div
              key={stay.name}
              className="border border-terracotta/20 bg-cream/60 p-6 flex flex-col"
            >
              <div className="text-xs tracking-[0.25em] text-terracotta uppercase font-sans">
                {stay.note}
              </div>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl text-ink leading-snug">
                {stay.name}
              </h3>
              <p className="mt-3 text-base text-ink-soft font-sans leading-relaxed">
                {stay.detail}
              </p>
              {stay.url && (
                <a
                  href={stay.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block self-start text-sm tracking-[0.2em] uppercase text-terracotta hover:text-[#b15c3e] font-sans border-b border-terracotta/40 hover:border-terracotta pb-1 transition-colors"
                >
                  View on Airbnb
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
