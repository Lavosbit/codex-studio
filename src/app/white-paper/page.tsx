"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WhitePaperDraftPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Demo banner */}
      <div className="w-full border-b border-neutral-800 bg-neutral-900/90 px-4 py-2 text-center text-[11px] text-neutral-300 md:px-6">
        Draft in progress: This white paper is a working version for
        ResearchGate.
      </div>

      {/* Header */}
      <header className="border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300" />
            <span className="text-sm font-semibold tracking-tight text-neutral-100 md:text-base">
              Codex<span className="text-sky-300">3D</span>
            </span>
          </Link>

          <nav className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-neutral-700 bg-neutral-950/60 text-xs"
            >
              <Link href="/">Back to overview</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full">
              <Link href="/upload">Start a conversion</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10 md:px-6 md:py-14">
        {/* Title + meta */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-3"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-sky-300">
            White Paper · Draft for ResearchGate
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            From Photos to Presence: Exploring Accessible 3D Capture,
            Photogrammetry, and Web-Based AR for Cultural Heritage, Education,
            and Training
          </h1>
          <p className="text-xs text-neutral-400">
            Author: Jacob Galito · Status: Work in progress / pre-publication
            draft
          </p>
        </motion.section>

        {/* Abstract */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Abstract (Draft)
          </h2>
          <p className="text-sm text-neutral-300">
            This draft white paper explores how accessible 3D capture workflows—
            including photogrammetry, LiDAR, Gaussian splats, and AI-assisted
            reconstruction—can bridge the gap between highly technical 3D
            pipelines and real-world needs in{" "}
            <span className="text-neutral-100">
              cultural heritage, education, training, and e-commerce
            </span>
            . Drawing from prior AR SaaS work, museum collaborations, and
            qualitative research conducted during Startup Virginia’s Idea
            Factory, the paper examines why many organizations remain stalled at
            the &quot;pilot&quot; stage and proposes an object-first approach
            that emphasizes{" "}
            <span className="text-neutral-100">
              standardized workflows, interpretable outputs, and narrative-rich
              experiences
            </span>{" "}
            rather than raw 3D files alone.
          </p>
          <p className="text-sm text-neutral-300">
            The goal of this document is not to present a finished empirical
            study, but to share a working synthesis of practice-based insights
            and a concrete direction for future research, tooling, and open
            collaboration.
          </p>
        </section>

        {/* Introduction */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Introduction
          </h2>
          <p className="text-sm text-neutral-300">
            Over the last decade, 3D capture and immersive media have become
            dramatically more accessible. Commodity cameras, depth sensors,
            LiDAR-equipped mobile devices, and AI-driven reconstruction now make
            it possible for non-specialists to digitize objects, spaces, and
            scenes that would once have required dedicated scanning hardware.
          </p>
          <p className="text-sm text-neutral-300">
            Yet many of the organizations that would benefit most—museums,
            archives, educators, training commands, and even product teams—still
            struggle to move from experimentation to sustainable practice.
            Common blockers include:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>Lack of in-house 3D specialists or pipeline ownership.</li>
            <li>
              Fragmented tooling across capture, processing, optimization, and
              publishing.
            </li>
            <li>
              Difficulty connecting 3D assets to{" "}
              <span className="text-neutral-100">
                narrative, instructional, or commercial outcomes
              </span>
              .
            </li>
          </ul>
          <p className="text-sm text-neutral-300">
            This paper frames these challenges through the lens of an
            &quot;object-first&quot; approach: starting with the real-world
            artifacts, devices, or products that matter to people, and designing
            workflows that make it easy to capture, preserve, and present them
            over time.
          </p>
        </section>

        {/* Background & practice context */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Background & practice-based context
          </h2>
          <p className="text-sm text-neutral-300">
            The perspective of this draft is practice-based. It synthesizes work
            across:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>
              Co-founding and co-inventing a patented AR SaaS platform used in
              defense and enterprise training.
            </li>
            <li>
              Photogrammetry-driven AR experiences for museums and cultural
              organizations.
            </li>
            <li>
              Experiments with Gaussian splats and web-based viewers for
              immersive storytelling.
            </li>
            <li>
              Ongoing qualitative research with museum professionals, educators,
              developers, and 3D creators as part of Startup Virginia’s Idea
              Factory.
            </li>
          </ul>
          <p className="text-sm text-neutral-300">
            Rather than treating photogrammetry or AI reconstruction as isolated
            technologies, the paper treats them as components inside a broader
            lifecycle:{" "}
            <span className="text-neutral-100">
              capture → process → optimize → publish → interpret → revisit over
              time
            </span>
            .
          </p>
        </section>

        {/* Problem space */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Problem space
          </h2>
          <p className="text-sm text-neutral-300">
            Interviews and prior work suggest that the barrier is not simply
            access to tools, but{" "}
            <span className="text-neutral-100">
              the lack of a unified, opinionated workflow
            </span>{" "}
            that connects tools to outcomes. Common patterns include:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>
              3D initiatives framed as one-off &quot;projects&quot; instead of
              ongoing, maintainable practices.
            </li>
            <li>
              Confusion over which capture method (photogrammetry, LiDAR,
              splats, AI) is appropriate for which object, space, or use case.
            </li>
            <li>
              Limited guidance on how to translate raw scans into{" "}
              <span className="text-neutral-100">
                accessible, performant web experiences
              </span>{" "}
              that can be embedded in existing platforms.
            </li>
          </ul>
          <p className="text-sm text-neutral-300">
            These gaps mirror what emerged in the Idea Factory research: the
            need for standardized workflows, lightweight tools, and storytelling
            layers that make 3D assets more than just technical artifacts.
          </p>
        </section>

        {/* Approach & early direction */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Approach & early direction
          </h2>
          <p className="text-sm text-neutral-300">
            The pilot implementation of these ideas is Codex3D—the minimum
            viable experiment you see on this site. It focuses on a
            service-oriented and later platform-oriented workflow:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>
              Accept simple photo uploads from non-specialists (educators,
              curators, product owners).
            </li>
            <li>
              Route objects through appropriate 3D pipelines: AI,
              photogrammetry, Gaussian splats, or hybrid workflows.
            </li>
            <li>
              Return ready-to-use outputs (GLB, USDZ, web viewers) and
              eventually embeddable experiences with narrative layers.
            </li>
          </ul>
          <p className="text-sm text-neutral-300">
            In the current phase this is deliberately manual behind the scenes:
            a way to test demand and refine workflows before codifying them into
            software. Insights from this experiment will shape the more formal
            research questions and structure of the full paper.
          </p>
        </section>

        {/* Planned sections / TODOs */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Planned additions & open questions
          </h2>
          <p className="text-sm text-neutral-300">
            As a work in progress, this draft intentionally leaves space for:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>
              A more formal literature review on photogrammetry in museums,
              education, and training.
            </li>
            <li>
              Clearer taxonomy of when to use meshes, splats, or volumetric
              approaches.
            </li>
            <li>
              Deeper analysis of qualitative interview data from Idea Factory
              and beyond.
            </li>
            <li>
              Design patterns for narrative-first 3D experiences on the web.
            </li>
          </ul>
          <p className="text-sm text-neutral-400">
            Feedback, critique, and collaboration are welcome—this page is meant
            to be a transparent snapshot of the thinking before it becomes a
            polished, citable paper.
          </p>
        </section>

        {/* Call to action */}
        <section className="space-y-3 border-t border-neutral-900 pt-8 pb-10">
          <h2 className="text-lg font-semibold text-neutral-50">
            How this will map to ResearchGate
          </h2>
          <p className="text-sm text-neutral-300">
            The intention is to evolve this draft into a structured white paper
            with:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>Formal abstract, keywords, and introduction.</li>
            <li>Background / related work section.</li>
            <li>Methods & practice description (case-based).</li>
            <li>Findings, implications, and future work.</li>
          </ul>
          <p className="text-sm text-neutral-300">
            For now, this page serves as a live working draft—something I can
            point peers, mentors, and reviewers to while the ResearchGate
            version takes shape.
          </p>
        </section>
      </main>

      <footer className="border-t border-neutral-900 py-4 text-center text-[11px] text-neutral-500">
        White paper draft · Not yet peer reviewed · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
