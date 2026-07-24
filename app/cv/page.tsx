import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PageIntro } from "@/components/PageIntro";
import { PrintButton } from "@/components/PrintButton";
import { awards, education, leadership, presentations, publications, researchExperiences, skills, teachingExperiences } from "@/data/content";

export const metadata: Metadata = { title: "CV" };

export default function CVPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <div className="no-print">
        <PageIntro eyebrow="Curriculum vitae" title="Experience, education, and selected work.">
          <p>An accessible HTML summary is provided below. A final PDF can replace the current print-ready placeholder.</p>
        </PageIntro>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PrintButton />
          <p className="text-sm text-muted">PDF file placeholder — add <code className="rounded bg-white px-1.5 py-1">public/sophia-phelps-cv.pdf</code> when ready.</p>
        </div>
      </div>

      <article className="mt-16 rounded-lg border border-line bg-white p-7 shadow-quiet sm:p-12 print:mt-0 print:border-0 print:p-0 print:shadow-none">
        <header className="border-b border-line pb-8">
          <h1 className="font-serif text-4xl font-semibold">Sophia Phelps</h1>
          <p className="mt-2 text-accent">NSF Graduate Research Fellow · Physics Researcher & Educator</p>
          <p className="mt-3 text-sm text-muted">Contact information placeholder · Irvine, California</p>
        </header>

        <CVSection title="Education">
          <div className="space-y-5">
            {education.map((item) => (
              <div key={item.school} className="grid gap-1 sm:grid-cols-[1fr_auto]">
                <div><h3 className="font-semibold">{item.school}</h3><p className="text-sm text-muted">{item.degree}</p></div>
                <p className="text-sm text-muted">{item.dates}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            UCLA involvement: Upsilon Lab; Marginalized Identities in Physics and Astronomy; Undergraduate Learning Assistant Program; Regan Research Group; Elegant Mind Club.
          </p>
        </CVSection>

        <CVSection title="Research experience">
          {researchExperiences.map((experience) => <ExperienceCard key={`${experience.organization}-${experience.title}`} experience={experience} />)}
        </CVSection>

        <CVSection title="Teaching experience">
          {teachingExperiences.map((experience) => <ExperienceCard key={`${experience.organization}-${experience.title}`} experience={experience} />)}
        </CVSection>

        <CVSection title="Leadership">
          {leadership.map((experience) => <ExperienceCard key={experience.title} experience={experience} />)}
        </CVSection>

        <CVSection title="Awards and fellowships"><SimpleList items={awards} /></CVSection>
        <CVSection title="Publications and presentations"><SimpleList items={[...publications, ...presentations]} /></CVSection>
        <CVSection title="Technical skills">
          <ul className="flex flex-wrap gap-2">{skills.map((skill) => <li key={skill} className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink">{skill}</li>)}</ul>
        </CVSection>
      </article>
    </div>
  );
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-b border-line py-9 last:border-0"><h2 className="mb-6 font-serif text-2xl font-semibold text-ink">{title}</h2>{children}</section>;
}

function SimpleList({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-2 pl-5 text-sm text-muted marker:text-accent">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
