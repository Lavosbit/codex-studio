import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8 text-[11px] text-neutral-400 md:flex-row md:items-start md:justify-between md:px-6">
        {/* Brand / blurb */}
        <div className="space-y-2 md:max-w-xs">
          <p className="text-xs font-semibold tracking-tight text-neutral-200">
            Codex Studio
          </p>
          <p className="text-[11px] leading-relaxed text-neutral-500">
            Object-first 3D capture &amp; WebAR experiments for museums,
            educators, and product teams. This MVE was built during Startup
            Virginia&apos;s Idea Factory.
          </p>
        </div>

        {/* Sitemap */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Sitemap
          </p>
          <nav className="flex flex-col gap-1 text-[11px]">
            <Link href="/" className="hover:text-neutral-200">
              Overview
            </Link>
            <Link href="/#how-it-works" className="hover:text-neutral-200">
              How it works
            </Link>
            <Link href="/#modes" className="hover:text-neutral-200">
              Modes
            </Link>
            <Link href="/idea-factory" className="hover:text-neutral-200">
              Idea Factory case study
            </Link>
            <Link href="/white-paper" className="hover:text-neutral-200">
              White paper (draft)
            </Link>
            <Link href="/upload" className="hover:text-neutral-200">
              Start a conversion
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Contact
          </p>
          <div className="space-y-1 text-[11px]">
            <a
              href="mailto:hello@codexstudio.app"
              className="hover:text-neutral-200"
            >
              hello@codexstudio.app
            </a>
            <a
              href="https://www.linkedin.com/in/jacobgalito"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-neutral-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900/70 bg-neutral-950/95">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 text-[10px] text-neutral-500 md:px-6">
          <span>© {year} Codex Studio. All rights reserved.</span>
          <span className="hidden md:inline">
            Built as a Minimum Viable Experiment during Startup Virginia&apos;s
            Idea Factory.
          </span>
        </div>
      </div>
    </footer>
  );
}
