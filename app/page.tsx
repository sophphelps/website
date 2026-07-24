export default function Home() {
  return (
    <main className="mx-auto grid min-h-[80vh] max-w-5xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_0.75fr] lg:px-8">
      <div>
        <p className="eyebrow">Physics · Exoplanets · Education</p>

        <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
          Sophia Phelps
        </h1>

        <p className="mt-7 max-w-2xl text-xl leading-8 text-ink">
          NSF Graduate Research Fellow and incoming Physics Ph.D. student at
          UC Irvine.
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-muted">
          I recently graduated from UCLA with a B.S. in Physics. My research
          focuses on stellar magnetic activity and its impact on exoplanet
          detection. At NASA’s Jet Propulsion Laboratory, I study the
          equivalent-width variability of Zeeman-sensitive near-infrared solar
          absorption lines.
        </p>

        <p className="mt-5 max-w-2xl leading-7 text-muted">
          I am also passionate about collaborative and inclusive teaching. I
          aim to create learning environments where students feel comfortable
          asking questions, exploring ideas, and building confidence.
        </p>
      </div>

      <div
        className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-[#dbe4e7]"
        aria-label="Professional headshot placeholder"
      >
        <div className="absolute inset-6 flex items-center justify-center border border-accent/20">
          <div className="text-center">
            <svg
              className="mx-auto h-14 w-14 text-accent/50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeWidth="1.2"
                d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              />
            </svg>

            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent/70">
              Headshot placeholder
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
