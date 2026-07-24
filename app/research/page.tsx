import {
  publications,
  presentations,
} from "@/data/content";

const outputs = [
  {
    type: "Publication",
    title: publications[0],
    description:
      "Equivalent-width variability of a Zeeman-sensitive near-infrared Fe I line as a potential indicator of solar magnetic activity.",
    href: "/sophia-phelps-journal-article.pdf",
    linkText: "Read paper (PDF)",
  },
  {
    type: "Poster",
    title: presentations[0],
    description:
      "Poster presenting results from the near-infrared solar activity analysis.",
    href: null,
    linkText: "View poster (PDF)",
  },
];

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">Research</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Stellar activity and exoplanet detection
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          I study how stellar magnetic activity affects precision radial
          velocity measurements and limits our ability to detect small
          exoplanets. My work focuses on whether Zeeman-sensitive
          near-infrared absorption lines can serve as reliable indicators of
          stellar activity.
        </p>
      </header>

      <section
        className="mt-16 border-t border-line py-16"
        aria-labelledby="jpl-project-heading"
      >
        <h2
          id="jpl-project-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Near-infrared indicators of solar activity
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            At NASA&apos;s Jet Propulsion Laboratory, I analyze
            high-resolution Sun-as-a-star spectra collected with the PARVI
            spectrograph and the SoCalSoCal solar feed.
          </p>

          <p>
            My initial study focused on a strongly Zeeman-sensitive Fe I
            absorption line near 1565 nm. I measured changes in the
            line&apos;s equivalent width to investigate whether its
            variability traces magnetic activity in the solar photosphere.
          </p>

          <p>
            To distinguish solar variability from residual absorption caused
            by Earth&apos;s atmosphere, I analyzed a nearby telluric H₂O
            feature as a control. I then applied periodogram analysis to the
            equivalent-width time series and found evidence for variability
            near the solar rotation period.
          </p>

          <p>
            These results support the use of magnetically sensitive
            near-infrared lines as potential stellar-activity indicators for
            precision radial velocity studies. I am now extending the
            observational time baseline and analyzing additional
            Zeeman-sensitive lines in the J band.
          </p>
        </div>
      </section>
    </main>
  );
}
