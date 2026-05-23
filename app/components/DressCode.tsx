import Image from "next/image";
import { dressCode } from "../../data/dressCode";

export default function DressCode() {
  return (
    <section className="py-16 md:py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink text-center">
          What to Wear
        </h2>
        <p className="mt-6 text-base sm:text-lg text-ink-soft text-center max-w-2xl mx-auto leading-relaxed">
          Linen, earth tones, comfortable shoes. The ceremony is outdoors and the dinner
          runs late — bring a layer for the evening.
        </p>
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {dressCode.map((look) => (
            <figure key={look.src} className="mb-4 break-inside-avoid">
              <Image
                src={look.src}
                alt={look.caption}
                width={600}
                height={800}
                unoptimized
                className="w-full h-auto block"
              />
              <figcaption className="mt-2 text-xs tracking-[0.15em] uppercase text-ink-soft font-sans">
                {look.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
