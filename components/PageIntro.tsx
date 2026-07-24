export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <header className="border-b border-line pb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
      <div className="mt-6 max-w-3xl text-lg leading-8 text-muted">{children}</div>
    </header>
  );
}
