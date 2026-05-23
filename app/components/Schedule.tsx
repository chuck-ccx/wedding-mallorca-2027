import { schedule } from "../../data/schedule";

export default function Schedule() {
  return (
    <section className="py-16 md:py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink text-center">
          The Weekend
        </h2>
        <p className="mt-6 text-base sm:text-lg text-ink-soft text-center max-w-2xl mx-auto leading-relaxed">
          Come for the wedding, stay for the island. Here&rsquo;s the shape of the days.
        </p>
        <ol className="mt-12 border-l-2 border-terracotta/60 pl-6 md:pl-10 space-y-10">
          {schedule.map((item) => (
            <li key={item.day} className="relative">
              <span
                aria-hidden
                className="absolute -left-[34px] md:-left-[46px] top-2 h-3 w-3 rounded-full bg-terracotta"
              />
              <div className="text-xs tracking-[0.25em] text-terracotta uppercase font-sans">
                {item.day}
              </div>
              <div className="mt-2 font-serif text-2xl sm:text-3xl text-ink leading-snug">
                {item.title}
              </div>
              <div className="mt-2 text-base text-ink-soft font-sans">
                {item.detail}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
