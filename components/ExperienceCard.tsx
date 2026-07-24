import type { Experience } from "@/data/content";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-ink">{experience.title}</h3>
          <p className="mt-1 font-medium text-accent">{experience.organization}</p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <p>{experience.dates}</p>
          {experience.location && <p>{experience.location}</p>}
        </div>
      </div>
      <p className="mt-5 max-w-3xl leading-7 text-muted">{experience.summary}</p>
      {experience.highlights && (
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-muted marker:text-accent">
          {experience.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      {experience.tags && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills and topics">
          {experience.tags.map((tag) => <li key={tag} className="rounded-full bg-accent/8 px-3 py-1 text-xs font-medium text-accent">{tag}</li>)}
        </ul>
      )}
    </article>
  );
}
