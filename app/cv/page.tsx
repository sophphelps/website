import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ExperienceCard } from "@/components/ExperienceCard";
import { PageIntro } from "@/components/PageIntro";
import {
  awards,
  education,
  leadership,
  presentations,
  publications,
  researchExperiences,
  skills,
  teachingExperiences,
} from "@/data/content";

export const metadata: Metadata = {
  title: "CV",
};

export default function CVPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
      <PageIntro
        eyebrow="Curriculum vitae"
        title="Experience, education, and selected work."
      >
        <p>
          A summary of my research, teaching, education, and academic
          experience.
        </p>
      </PageIntro>

      <div className="mt-8">
        <a
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sophia-phelps-cv.pdf`}
          download="Sophia-Phelps-CV.pdf"
          className="button-primary inline-block"
        >
          Download CV
        </a>
      </div>

      <article className="mt-14 rounded-lg border border-line bg-white p-7 shadow-quiet sm:p-12">
        <header className="border-b border-line pb-8">
          <h1 className="font-serif text-4xl font-semibold text-ink">
            Sophia Phelps
          </h1>

          <p className="mt-3 text-accent">
            NSF Graduate Research Fellow · Physics Researcher and Educator
          </p>

          <p className="mt-3 text-sm text-muted">
            Incoming Physics Ph.D. student at the University of California,
            Irvine
          </p>
        </header>

        <CVSection title="Education">
          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.school}
                className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-8"
              >
                <div>
                  <h3 className="font-semibold text-ink">{item.school}</h3>
                  <p className="mt-1 text-sm text-muted">{item.degree}</p>
                </div>

                <p className="text-sm text-muted">{item.dates}</p>
              </div>
            ))}
          </div>
        </CVSection>

        <CVSection title="Research experience">
          <div className="space-y-10">
            {researchExperiences.map((experience) => (
              <ExperienceCard
                key={`${experience.organization}-${experience.title}`}
                experience={experience}
              />
            ))}
          </div>
        </CVSection>

        <CVSection title="Teaching experience">
          <div className="space-y-10">
            {teachingExperiences.map((experience) => (
              <ExperienceCard
                key={`${experience.organization}-${experience.title}`}
                experience={experience}
              />
            ))}
          </div>
        </CVSection>

        {leadership.length > 0 && (
          <CVSection title="Leadership">
            <div className="space-y-10">
              {leadership.map((experience) => (
                <ExperienceCard
                  key={`${experience.organization}-${experience.title}`}
                  experience={experience}
                />
              ))}
            </div>
          </CVSection>
        )}

        <CVSection title="Awards and fellowships">
          <SimpleList items={awards} />
        </CVSection>

        <CVSection title="Publications and presentations">
          <SimpleList items={[...publications, ...presentations]} />
        </CVSection>

        <CVSection title="Technical skills">
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-ink"
              >
                {skill}
              </li>
            ))}
          </ul>
        </CVSection>
      </article>
    </main>
  );
}

function CVSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-line py-9 last:border-b-0">
      <h2 className="mb-7 font-serif text-2xl font-semibold text-ink">
        {title}
      </h2>

      {children}
    </section>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 text-sm leading-6 text-muted marker:text-accent">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
