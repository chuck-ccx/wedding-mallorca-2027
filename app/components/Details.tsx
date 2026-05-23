const items = [
  { label: "Date", value: "June 5, 2027" },
  { label: "Place", value: "Binissalem, Mallorca" },
  { label: "Venue", value: "Private finca · ceremony + reception" },
];

const ADDRESS_LINES = [
  "Camí de Pedaç, Polígono 9 Parcela 147",
  "Binissalem, Balearic Islands 07350",
  "Spain",
];

const DIRECTIONS_URL =
  "https://maps.google.com/?q=Cami+de+Pedac+Poligono+9+Parcela+147+Binissalem+07350";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Binissalem%2C%20Balearic%20Islands%2C%20Spain&output=embed";

export default function Details() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink text-center">
          The Details
        </h2>
        <p className="mt-6 text-base sm:text-lg text-ink-soft text-center max-w-2xl mx-auto leading-relaxed">
          We&rsquo;re bringing the people we love to an island we love. Three days in
          Mallorca — warm sea, long dinners, slow mornings.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="border border-terracotta/20 bg-cream/60 p-6 text-center"
            >
              <div className="text-xs tracking-[0.25em] text-terracotta uppercase font-sans">
                {item.label}
              </div>
              <div className="mt-3 font-serif text-2xl text-ink leading-snug">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center">
            <div className="text-xs tracking-[0.25em] text-terracotta uppercase font-sans">
              The Venue
            </div>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-ink leading-tight">
              A private finca in Binissalem
            </h3>
            <address className="mt-5 not-italic font-sans text-base text-ink-soft leading-relaxed">
              {ADDRESS_LINES.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start mt-6 bg-terracotta text-cream font-sans text-sm tracking-[0.2em] px-6 py-3 rounded-md hover:bg-[#b15c3e] transition-colors"
            >
              GET DIRECTIONS
            </a>
          </div>
          <div className="aspect-[4/3] md:aspect-auto md:min-h-[280px] border border-terracotta/20 overflow-hidden">
            <iframe
              title="Map of Binissalem, Mallorca"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
