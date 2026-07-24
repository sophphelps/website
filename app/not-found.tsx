import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-start justify-center px-6 py-20">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight">This page is outside the observable universe.</h1>
      <p className="mt-5 max-w-xl leading-7 text-muted">The link may be outdated, or the page may have moved. The homepage is a good place to restart your search.</p>
      <Link href="/" className="button-primary mt-8">Return home</Link>
    </div>
  );
}
