import Link from "next/link";
import { externalLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Sophia Phelps</p>
        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {Object.entries(externalLinks).map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="capitalize text-muted transition-colors hover:text-accent">
                  {label === "scholar" ? "Google Scholar" : label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
