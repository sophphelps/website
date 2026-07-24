import Link from "next/link";

const projects = [
  { number: "01", title: "Solar magnetic activity", text: "Tracing activity-driven signals that can imitate or obscure planetary signatures." },
  { number: "02", title: "Near-infrared spectroscopy", text: "Using precision spectra to characterize the Sun as a benchmark star." },
  { number: "03", title: "Radial velocity precision", text: "Developing analysis approaches that help reveal smaller, Earth-like exoplanets." },
];

export function FeaturedResearch() {
  return (
    <section aria-labelledby="featured-research">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Featured research</p>
          <h2 id="featured-research" className="section-title">Reading planets through noisy stars</h2>
        </div>
        <Link href="/research" className="hidden text-sm font-semibold text-accent hover:underline sm:block">View all research →</Link>
      </div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.number} className="bg-white p-7 transition-colors hover:bg-paper">
            <p className="font-mono text-xs text-accent">{project.number}</p>
            <h3 className="mt-8 font-serif text-xl font-semibold text-ink">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{project.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
