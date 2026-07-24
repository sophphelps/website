import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PageIntro } from "@/components/PageIntro";
import { interests, publications, presentations, researchExperiences } from "@/data/content";

const placeholders = [
  { label: "Journal paper", detail: publications[0] },
  { label: "Research poster", detail: presentations[0] },
  { label: "Presentation slides", detail: presentations[1] },
  { label: "Project media", detail: "Images from PARVI and SoCalSoCal — placeholder" },
  { label: "Code & data", detail: "GitHub repository — URL placeholder" },
  { label: "Publication record", detail: "DOI or publication link — placeholder" },
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
      <PageIntro eyebrow="Research" title="Making quiet planets visible around active stars.">
        <p>
          I study how stellar magnetic activity affects precision radial velocity measurements—and how those signals can be mitigated to improve the detection of small, Earth-like exoplanets.
        </p>
      </PageIntro>

      <section className="py-16" aria-labelledby="experience-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-heading" className="section-title">Research appointments</h2>
        <div className="mt-12">
          {researchExperiences.map((experience) => <ExperienceCard key={`${experience.organization}-${experience.title}`} experience={experience} />)}
        </div>
      </section>

      <section className="border-t border-line py-16" aria-labelledby="outputs-heading">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1fr]">
          <div>
            <p className="eyebrow">Selected outputs</p>
            <h2 id="outputs-heading" className="section-title">Work in progress</h2>
            <p className="mt-4 text-sm leading-6 text-muted">Links and materials will be added as they become publicly available.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {placeholders.map((item) => (
              <Link key={item.label} href="#placeholder-output" className="group rounded-md border border-line bg-white p-5 transition hover:border-accent hover:shadow-quiet">
                <h3 className="font-semibold text-ink group-hover:text-accent">{item.label} <span aria-hidden="true">↗</span></h3>
                <p className="mt-2 text-xs leading-5 text-muted">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16" aria-labelledby="interests-heading">
        <p className="eyebrow">Research interests</p>
        <h2 id="interests-heading" className="section-title">Questions and methods</h2>
        <ul className="mt-9 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest) => <li key={interest} className="bg-white p-5 text-sm font-medium text-ink">{interest}</li>)}
        </ul>
      </section>
    </div>
  );
}
