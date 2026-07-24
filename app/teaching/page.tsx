import { ExperienceCard } from "@/components/ExperienceCard";
import { PageIntro } from "@/components/PageIntro";
import { leadership, teachingExperiences } from "@/data/content";

const values = [
  ["Active learning", "Students learn physics by doing physics: discussing, testing, revising, and explaining."],
  ["Productive struggle", "Challenge can build independence when paired with structure, clarity, and encouragement."],
  ["Accessible design", "Thoughtful course design should invite participation and make expectations visible."],
];

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <PageIntro eyebrow="Teaching" title="Learning works best when curiosity feels safe.">
        <p>
          I am passionate about collaborative and inclusive teaching. I create learning environments where students feel comfortable asking questions, exploring ideas, and building confidence.
        </p>
      </PageIntro>

      <section className="grid gap-10 border-b border-line py-16 lg:grid-cols-[.55fr_1fr]" aria-labelledby="philosophy-heading">
        <div>
          <p className="eyebrow">Philosophy</p>
          <h2 id="philosophy-heading" className="section-title">Teach for agency</h2>
        </div>
        <div>
          <p className="font-serif text-2xl leading-9 text-ink">
            Clear explanations matter, but so do the moments when students make meaning together.
          </p>
          <p className="mt-5 leading-7 text-muted">
            I value active learning, productive struggle, mentorship, and accessible course design. My goal is to pair high expectations with genuine belonging—so students can take intellectual risks and see themselves as capable scientists.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-16" aria-labelledby="values-heading">
        <h2 id="values-heading" className="sr-only">Teaching values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map(([title, text], index) => (
            <article key={title}>
              <p className="font-mono text-xs text-accent">0{index + 1}</p>
              <h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16" aria-labelledby="teaching-experience">
        <p className="eyebrow">Experience</p>
        <h2 id="teaching-experience" className="section-title">Teaching and mentorship</h2>
        <div className="mt-12">
          {teachingExperiences.map((experience) => <ExperienceCard key={`${experience.organization}-${experience.title}`} experience={experience} />)}
        </div>
      </section>

      <section className="border-t border-line py-16" aria-labelledby="leadership-heading">
        <p className="eyebrow">Leadership</p>
        <h2 id="leadership-heading" className="section-title">Building learning communities</h2>
        <div className="mt-10">{leadership.map((experience) => <ExperienceCard key={experience.title} experience={experience} />)}</div>
      </section>
    </div>
  );
}
