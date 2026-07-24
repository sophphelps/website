import Link from "next/link";
import { FeaturedResearch } from "@/components/FeaturedResearch";

const focusAreas = [
  { number: "01", title: "Exoplanet detection", text: "Finding smaller worlds through precise measurements of their host stars." },
  { number: "02", title: "Stellar activity", text: "Separating magnetic variability from the subtle Doppler signals of planets." },
  { number: "03", title: "Inclusive teaching", text: "Building collaborative spaces where students can question, explore, and grow." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.25fr_.75fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">Physics · Exoplanets · Education</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl">
            Sophia Phelps
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ink sm:text-2xl">
            NSF Graduate Research Fellow and incoming Physics Ph.D. student studying exoplanet detection and stellar variability.
          </p>
          <p className="mt-6 max-w-2xl leading-7 text-muted">
            I am a recent UCLA physics graduate joining UC Irvine in Fall 2026. I use precision spectroscopy and data analysis to understand stellar noise—and make Earth-like planets easier to find.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/research" className="button-primary">Explore my research</Link>
            <Link href="/cv" className="button-secondary">View CV</Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-[#dbe4e7]" aria-label="Professional headshot placeholder">
          <div className="absolute inset-6 flex items-center justify-center border border-accent/20">
            <div className="text-center">
              <svg className="mx-auto h-14 w-14 text-accent/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="1.2" d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
              </svg>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent/70">Headshot placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="eyebrow">Areas of focus</p>
          <div className="mt-9 grid gap-10 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.number}>
                <p className="font-mono text-xs text-accent">{area.number}</p>
                <h2 className="mt-5 font-serif text-2xl font-semibold">{area.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-24 px-6 py-24 lg:px-8">
        <FeaturedResearch />
        <section className="grid gap-10 border-t border-line pt-16 lg:grid-cols-[.55fr_1fr]">
          <div>
            <p className="eyebrow">Current focus</p>
            <h2 className="section-title">What comes next</h2>
          </div>
          <div>
            <p className="font-serif text-2xl leading-9 text-ink">
              At UC Irvine, I will work with Professor Paul Robertson on stellar noise mitigation for exoplanet detection.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-muted">
              My doctoral work will examine how stellar magnetic activity shapes precision radial velocity measurements, with the goal of improving our sensitivity to small, potentially Earth-like planets.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
