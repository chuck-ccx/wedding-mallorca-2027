import { faq } from "../../data/faq";

export default function Faq() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink text-center">
          Questions
        </h2>
        <p className="mt-6 text-base sm:text-lg text-ink-soft text-center max-w-2xl mx-auto leading-relaxed">
          The ones we&rsquo;ve already been asked. Email us anything we&rsquo;ve missed.
        </p>
        <div className="mt-12 divide-y divide-terracotta/20 border-t border-b border-terracotta/20">
          {faq.map((item) => (
            <details key={item.q} className="faq-item group py-5">
              <summary className="flex items-start justify-between gap-6">
                <span className="font-serif text-xl sm:text-2xl text-ink leading-snug">
                  {item.q}
                </span>
              </summary>
              <div className="mt-3 text-base text-ink-soft font-sans leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
