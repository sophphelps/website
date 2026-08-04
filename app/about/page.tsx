import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sophia Phelps’s path into physics and how her experiences as a low-income, first-generation student shape her commitment to teaching and mentorship.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">About</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Physics, teaching, and educational access
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          My experiences as a low-income, first-generation student have shaped
          both my path into physics and my commitment to teaching, mentorship,
          and educational access.
        </p>
      </header>

      <section
        className="mt-16 border-t border-line py-16"
        aria-labelledby="path-heading"
      >
        <h2
          id="path-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          My path into physics
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            I recently graduated from UCLA with a B.S. in Physics. I will
            continue at UC Irvine as an NSF Graduate Research Fellow and
            Physics Ph.D. student.
          </p>

          <p>
            As a low-income, first-generation student, I care deeply about
            educational access and about learning environments where students
            feel comfortable asking questions, exploring ideas, and building
            confidence.
          </p>
        </div>
      </section>

      <section
        className="border-t border-line py-16"
        aria-labelledby="teaching-heading"
      >
        <h2
          id="teaching-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Why teaching and mentorship matter to me
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            Teaching and mentorship allow me to help create the collaborative,
            inclusive learning environments that matter to me. My approach
            emphasizes conceptual understanding, individualized support, and
            helping students become more confident and independent problem
            solvers.
          </p>

          <p>
            At UCLA, I served as a Learning Assistant across physics and
            mathematics courses and as Pedagogy Head for Physics 5A. Through
            StudySTEM, I have also tutored more than 100 students in mathematics
            and physics, from middle school through college.
          </p>
        </div>
      </section>

      <section
        className="border-t border-line py-16"
        aria-labelledby="research-direction-heading"
      >
        <h2
          id="research-direction-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Finding my research direction
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            My research now focuses on stellar magnetic activity and its
            impact on exoplanet detection. At NASA&apos;s Jet Propulsion
            Laboratory, I study the equivalent-width variability of
            Zeeman-sensitive near-infrared solar absorption lines.
          </p>

          <p>
            I am interested in how these magnetically sensitive lines can help
            distinguish stellar variability from the signals of small
            exoplanets. I am continuing this work by extending the observational
            time baseline and analyzing additional Zeeman-sensitive lines.
          </p>
        </div>
      </section>
    </main>
  );
}
