export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cream via-cream to-[#F3E4D7] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-terracotta" />
        <p className="text-xs sm:text-sm tracking-[0.3em] text-ink-soft font-sans">
          JUNE 5, 2027 · MALLORCA
        </p>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-ink mt-8 leading-[0.95] tracking-tight">
          You&rsquo;re invited
        </h1>
        <p className="font-sans text-lg sm:text-xl text-ink-soft mt-8">
          to the wedding of Dylan &amp; Jenna
        </p>
        <a
          href="#rsvp"
          className="inline-block mt-12 bg-terracotta text-cream font-sans text-sm tracking-[0.2em] px-8 py-4 rounded-md hover:bg-[#b15c3e] transition-colors"
        >
          RSVP
        </a>
      </div>
    </section>
  );
}
