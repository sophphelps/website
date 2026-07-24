export default function TeachingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">Teaching</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Teaching and mentorship
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          I care deeply about creating collaborative and inclusive learning
          environments where students feel comfortable asking questions,
          exploring ideas, and building confidence.
        </p>
      </header>

      <section
        className="mt-16 border-t border-line py-16"
        aria-labelledby="experience-heading"
      >
        <h2
          id="experience-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Experience
        </h2>

        <div className="mt-8 max-w-3xl space-y-8">
          <article>
            <h3 className="font-serif text-2xl font-semibold text-ink">
              UCLA Learning Assistant Program
            </h3>

            <p className="mt-3 leading-7 text-muted">
              I served as a Learning Assistant for four academic quarters
              across Physics 1C, Physics 5A, and Math 31A. In these roles, I
              supported collaborative problem solving, helped lead discussion
              sections, and encouraged students to explain their reasoning and
              learn from one another.
            </p>

            <p className="mt-3 leading-7 text-muted">
              I also served as Pedagogy Head for Physics 5A, where I led the
              Learning Assistant team and facilitated conversations about
              inclusive and evidence-based teaching.
            </p>
          </article>

          <article className="border-t border-line pt-8">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              Tutoring
            </h3>

            <p className="mt-3 leading-7 text-muted">
              Through StudySTEM, I have tutored more than 100 students in
              mathematics and physics, from middle school through college. My
              approach emphasizes individualized support, conceptual
              understanding, and helping students become more confident and
              independent problem solvers.
            </p>
          </article>

          <article className="border-t border-line pt-8">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              UC Irvine
            </h3>

            <p className="mt-3 leading-7 text-muted">
              As a Physics Ph.D. student at UC Irvine, I will continue my
              teaching as a graduate teaching assistant.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
