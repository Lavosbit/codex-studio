"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#how-it-works", label: "How it works", type: "anchor" as const },
  { href: "/#modes", label: "Modes", type: "anchor" as const },
  {
    href: "/idea-factory",
    label: "Idea Factory case study",
    type: "route" as const,
  },
  {
    href: "/white-paper",
    label: "White paper (draft)",
    type: "route" as const,
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-900 bg-neutral-950/90 backdrop-blur">
      {/* Desktop row */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300" />
          <span className="text-sm font-semibold tracking-tight md:text-base">
            Codex<span className="text-sky-300"> Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs text-neutral-300 md:flex">
          {navLinks.map((link) => {
            const isRoute = link.type === "route";
            const isActive = isRoute && pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-neutral-50 ${
                  isActive ? "text-neutral-50" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Button
            asChild
            size="sm"
            className="rounded-full border border-neutral-300 bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
          >
            <Link href="/upload">Start a conversion</Link>
          </Button>
        </nav>

        {/* Mobile CTA + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          {/* (Leaving CTA commented if you don’t want it yet) */}
          {/* <Button
            asChild
            size="sm"
            className="rounded-full bg-neutral-200 text-neutral-900 text-[11px] px-3 py-1.5 hover:bg-neutral-300"
          >
            <Link href="/upload" onClick={() => setMobileOpen(false)}>
              Start
            </Link>
          </Button> */}

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-200"
          >
            <div className="space-y-[3px]">
              <span className="block h-[2px] w-4 rounded bg-current" />
              <span className="block h-[2px] w-4 rounded bg-current" />
              <span className="block h-[2px] w-4 rounded bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`border-t border-neutral-800 bg-neutral-950 md:hidden transition-all duration-150 ${
          mobileOpen
            ? "max-h-64 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4">
          <nav className="flex flex-col gap-1 py-3 text-sm text-neutral-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1.5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/upload"
              className="py-1.5 text-sky-400"
              onClick={() => setMobileOpen(false)}
            >
              Start a conversion →
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
