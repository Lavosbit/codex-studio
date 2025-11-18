"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
        <div className="w-full bg-neutral-900 text-center py-2 text-[11px] text-neutral-400 border-b border-neutral-800">
          Demo Mode: This version simulates job submissions for Idea Factory.
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300" />
            <span className="text-sm font-semibold tracking-tight text-neutral-100 md:text-base">
              Codex<span className="text-sky-300">3D</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/idea-factory"
              className="hidden text-xs text-neutral-300 hover:text-neutral-50 md:inline"
            >
              Case study
            </Link>
            <Link
              href="/white-paper"
              className="hidden text-xs text-neutral-300 hover:text-neutral-50 md:inline"
            >
              White paper (draft)
            </Link>
            <Link
              href="#how-it-works"
              className="hidden text-xs text-neutral-300 hover:text-neutral-50 md:inline"
            >
              How it works
            </Link>
            <Link
              href="#modes"
              className="hidden text-xs text-neutral-300 hover:text-neutral-50 md:inline"
            >
              Modes
            </Link>
            <Button asChild size="sm" className="rounded-full">
              <Link href="/upload">Start a conversion</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:px-6 md:py-16">
        <section className="flex flex-col items-start gap-8 pt-6 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl space-y-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              Minimum Viable Experiment · Idea Factory
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Turn product photos into ready-to-use 3D models.
            </h1>
            <p className="max-w-lg text-sm text-neutral-300 md:text-base">
              Upload your images and pick AI, photogrammetry, or Gaussian
              splats. We&apos;ll return a clean 3D asset ready for web, AR, or
              immersive experiences—no pipeline headaches.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/upload">Start a conversion</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-neutral-700 bg-neutral-950/40 px-6 text-neutral-100 hover:bg-neutral-900"
              >
                <Link href="#how-it-works">See how it works</Link>
              </Button>
            </div>

            <p className="text-xs text-neutral-500">
              Early access · Ideal for Shopify merchants, educators, and
              creators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 text-xs text-neutral-200 shadow-lg shadow-black/40"
          >
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Example flow
            </p>
            <div className="space-y-3">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-3">
                <p className="text-[11px] font-medium text-neutral-200">
                  1. Upload photos
                </p>
                <p className="mt-1 text-[11px] text-neutral-400">
                  Drag in 1–10 shots of your object or product.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-3">
                <p className="text-[11px] font-medium text-neutral-200">
                  2. Choose a mode
                </p>
                <p className="mt-1 text-[11px] text-neutral-400">
                  AI Fast, Photogrammetry, Gaussian Splats, or Pro.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-3">
                <p className="text-[11px] font-medium text-neutral-200">
                  3. Get a 3D model
                </p>
                <p className="mt-1 text-[11px] text-neutral-400">
                  Receive GLB / USDZ plus an embed snippet for your site.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Placeholder sections for later */}
        <section
          id="how-it-works"
          className="border-t border-neutral-900 pt-12"
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr,2fr]">
            {/* Left: heading + description */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-50">
                How it works
              </h2>
              <p className="mt-3 max-w-xl text-sm text-neutral-300">
                For this early experiment, you upload images, pick a mode, and
                we manually run your object through our 3D pipeline. That lets
                us measure real demand and refine the workflow before fully
                automating it.
              </p>
            </div>

            {/* Right: steps */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-100">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs">
                    1
                  </span>
                  Upload photos
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-neutral-400">
                  Drag in 3–10 images of your object or product with clean
                  lighting and coverage.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-100">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs">
                    2
                  </span>
                  Choose a mode
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-neutral-400">
                  Select AI Fast, Photogrammetry, Gaussian Splats, or Pro
                  Processing based on fidelity and use case.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-100">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs">
                    3
                  </span>
                  Receive your 3D
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-neutral-400">
                  We process the asset and return a 3D file and, in later
                  versions, an embed-ready viewer for your site or LMS.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="modes" className="border-t border-neutral-900 pt-14 pb-20">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-50">Modes</h2>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300">
                Codex3D supports multiple reconstruction pipelines. Different
                modes are ideal for different use cases, fidelity requirements,
                and turnaround speeds.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* AI Fast */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 hover:bg-neutral-900/60 transition">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-2xl">
                    ⚡
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-neutral-50">
                      AI Fast Mode
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Quick conversions for clean, simple objects where speed
                      matters more than maximum detail. Ideal for product
                      visuals and previews.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photogrammetry */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 hover:bg-neutral-900/60 transition">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
                    📷
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-neutral-50">
                      Photogrammetry Mode
                    </h3>
                    <p className="text-xs text-neutral-400">
                      High-fidelity mesh reconstruction suitable for artifacts,
                      engineering parts, and accuracy-critical applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gaussian Splats */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 hover:bg-neutral-900/60 transition">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                    🌀
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-neutral-50">
                      Gaussian Splats Mode
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Immersive splat-based renderings best for environments,
                      rooms, installations, or artistic captures. Great
                      exploratory fidelity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pro Processing */}
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 hover:bg-neutral-900/60 transition">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
                    🧩
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-neutral-50">
                      Pro Processing (Human-in-the-loop)
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Hand-tuned cleanup, optimization, decimation, UV work, and
                      export for complex hero assets and high-stakes training
                      models.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <p className="text-[11px] text-neutral-500 max-w-xl">
              The full product will support batching, multi-mode jobs,
              automation, and direct integrations with Shopify, LMS platforms,
              DAMs, and the wider Codex Studio ecosystem.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-neutral-800 py-4 text-center text-[11px] text-neutral-500">
        Built as a Minimum Viable Experiment during Startup Virginia’s Idea
        Factory · 2025
      </footer>
    </div>
  );
}
