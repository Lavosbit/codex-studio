"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BackToTop from "@/components/ui/back-to-top";

export default function IdeaFactoryCaseStudy() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Demo banner */}
      <div className="w-full border-b border-neutral-800 bg-neutral-900/90 px-4 py-2 text-center text-[11px] text-neutral-300 md:px-6">
        Demo Mode: This version simulates job submissions for Idea Factory.
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
            <Button
              asChild
              size="sm"
              className="rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300 ..."
            >
              <Link href="/upload">Start a conversion</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10 md:px-6 md:py-14">
        {/* Title + intro */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
            Case Study · Startup Virginia&apos;s Idea Factory
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Codex3D: Testing demand for a simple &quot;upload → 3D&quot;
            service.
          </h1>
          <p className="max-w-2xl text-sm text-neutral-300">
            During Startup Virginia&apos;s Idea Factory, I used Codex3D as a
            vehicle to explore a key question:{" "}
            <span className="text-neutral-100">
              Who actually cares enough about 3D and AR to pay for a simple
              service that turns photos into usable 3D assets?
            </span>
          </p>
          <p className="max-w-2xl text-sm text-neutral-300">
            The focus was on{" "}
            <span className="text-neutral-100">
              people and organizations who need to preserve, present, or share
              real-world knowledge and experiences digitally
            </span>{" "}
            — museums, educators, training teams, and product organizations.
          </p>
        </motion.section>

        {/* Top opportunities */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Top three opportunity areas
          </h2>
          <p className="text-sm text-neutral-300">
            Through interviews and survey work, three repeatable opportunity
            areas emerged:
          </p>
          <ol className="ml-5 list-decimal space-y-2 text-sm text-neutral-300">
            <li>
              <span className="font-semibold text-neutral-100">
                Unified, standardized 3D workflow
              </span>{" "}
              – simplify capture, production, and publishing so it&apos;s not
              &quot;too difficult,&quot; &quot;too slow,&quot; or &quot;too
              confusing.&quot;
            </li>
            <li>
              <span className="font-semibold text-neutral-100">
                Lightweight, accessible, and affordable tools & templates
              </span>{" "}
              – provide ways to experiment with 3D/AR that work across devices
              and skill levels, without feeling &quot;too expensive&quot; or
              &quot;too uncomfortable.&quot;
            </li>
            <li>
              <span className="font-semibold text-neutral-100">
                Storytelling & interactive media around 3D content
              </span>{" "}
              – use narrative layers, guided tours, and context to expand
              access, engagement, and educational impact so efforts don&apos;t
              feel &quot;too confusing&quot; or &quot;too wasteful.&quot;
            </li>
          </ol>
        </section>

        {/* Context */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Context & hypothesis
          </h2>
          <p className="text-sm text-neutral-300">
            I&apos;ve spent years building AR platforms, photogrammetry
            workflows, and immersive experiences for museums, defense, and
            enterprise teams. The technology is powerful—but most teams never
            make it past interest and experimentation because the{" "}
            <span className="text-neutral-100">
              tooling, workflows, and staffing requirements are too heavy.
            </span>
          </p>
          <p className="text-sm text-neutral-300">
            Going into Idea Factory, my hypothesis was that a lot of these pains
            are symptoms of the same core gaps:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>
              There is no{" "}
              <span className="text-neutral-100">
                unified, opinionated workflow
              </span>{" "}
              for moving from photos to a published 3D/AR experience.
            </li>
            <li>
              Existing tools aren&apos;t{" "}
              <span className="text-neutral-100">
                lightweight or accessible enough
              </span>{" "}
              for non-specialists to feel confident using them.
            </li>
            <li>
              Even when 3D exists,{" "}
              <span className="text-neutral-100">
                storytelling and instructional layers
              </span>{" "}
              are often missing, so impact is limited.
            </li>
          </ul>
        </section>

        {/* Research */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Customer discovery
          </h2>
          <p className="text-sm text-neutral-300">
            Over the course of the program, I spoke with and surveyed a mix of:
          </p>
          <ul className="ml-5 list-disc space-y-1 text-sm text-neutral-300">
            <li>
              Museum and GLAM professionals (curation, collections, digital)
            </li>
            <li>Educators and instructional designers</li>
            <li>
              Developers and 3D creators experimenting with photogrammetry
            </li>
            <li>
              E-commerce and product teams curious about 3D/AR product views
            </li>
            <li>Training and simulation stakeholders in defense/industry</li>
          </ul>
          <p className="text-sm text-neutral-300">
            I used a Jobs-to-be-Done framing—&quot;When you try to capture or
            publish 3D/AR content…&quot;—to surface real jobs, pains, and
            desired outcomes instead of just feature requests.
          </p>
        </section>

        {/* Key findings */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            Key findings aligned to the three opportunities
          </h2>
          <div className="space-y-4 text-sm text-neutral-300">
            <div>
              <h3 className="text-sm font-semibold text-neutral-100">
                1. Teams want a unified workflow, not more disconnected tools.
              </h3>
              <p>
                Most respondents described their current approach as a patchwork
                of capture apps, 3D tools, and file-sharing links. What they
                actually want is{" "}
                <span className="text-neutral-100">
                  a standardized &quot;photo → 3D → publish&quot; pipeline
                </span>{" "}
                that hides the complexity and reduces the feeling that 3D is
                &quot;too difficult&quot; or &quot;too confusing.&quot;
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-100">
                2. “We don&apos;t have a 3D person” is the most common blocker.
              </h3>
              <p>
                Many teams see 3D/AR as valuable, but{" "}
                <span className="text-neutral-100">
                  lack of in-house expertise
                </span>{" "}
                stops projects before they begin. Capture, cleanup, topology,
                and file prep are perceived as highly specialized skills. This
                validates the opportunity for{" "}
                <span className="text-neutral-100">
                  lightweight, accessible tools and templates
                </span>{" "}
                that non-specialists can use with confidence.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-100">
                3. People don&apos;t want files—they want ready-to-use outputs.
              </h3>
              <p>
                When asked what success looks like, respondents rarely said
                &quot;a mesh&quot; or &quot;a USDZ.&quot; They said things like
                <span className="text-neutral-100">
                  {" "}
                  &quot;something I can embed in my LMS,&quot; &quot;a 3D view
                  on a product page,&quot; or &quot;a link my students can spin
                  around.&quot;
                </span>{" "}
                That directly supports Opportunity #2: opinionated, reusable
                templates and outputs rather than raw assets.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-100">
                4. Use cases cluster into four storytelling-heavy buckets.
              </h3>
              <ul className="ml-5 mt-1 list-disc space-y-1">
                <li>Storytelling & interpretation (museums, GLAM)</li>
                <li>Teaching & training (education, defense, industry)</li>
                <li>Product visualization (e-commerce, marketing)</li>
                <li>Documentation & preservation (archives, collections)</li>
              </ul>
              <p className="mt-1">
                All four rely on{" "}
                <span className="text-neutral-100">
                  narrative context, not just an isolated 3D object
                </span>
                , which speaks directly to the third opportunity area.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-100">
                5. Static 3D isn&apos;t enough—people want interpretation and
                context.
              </h3>
              <p>
                Particularly in museums and education, stakeholders emphasized
                that a 3D model on its own felt underwhelming. They wanted{" "}
                <span className="text-neutral-100">
                  labels, guided tours, comparisons, narration, and multi-modal
                  storytelling
                </span>{" "}
                to make the effort worthwhile. This aligns squarely with the
                opportunity to use storytelling and interactive media to expand
                access and impact.
              </p>
            </div>
          </div>
        </section>

        {/* How it shaped Codex3D */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            How this shaped the Codex3D MVE
          </h2>
          <p className="text-sm text-neutral-300">
            These opportunities and findings directly informed the first version
            of Codex3D you see on this site:
          </p>
          <ul className="ml-5 list-disc space-y-2 text-sm text-neutral-300">
            <li>
              <span className="font-semibold text-neutral-100">
                Unified &quot;upload → 3D → publish&quot; flow (Opportunity #1)
              </span>{" "}
              – the MVE focuses on a single, simple path: upload images, choose
              a mode, receive a 3D output plus a future embed snippet.
            </li>
            <li>
              <span className="font-semibold text-neutral-100">
                Multiple modes mapped to skill level & fidelity (Opportunity #1
                & #2)
              </span>{" "}
              – AI Fast, Photogrammetry, Gaussian Splats, and Pro Processing let
              different users pick the balance of speed, quality, and budget
              that fits their situation.
            </li>
            <li>
              <span className="font-semibold text-neutral-100">
                Lightweight front-end, manual fulfillment (Opportunity #2)
              </span>{" "}
              – during Idea Factory, jobs are fulfilled manually using my
              existing photogrammetry and 3D toolchain. This keeps the
              experience accessible while I validate demand before investing in
              heavy automation.
            </li>
            <li>
              <span className="font-semibold text-neutral-100">
                Designed for narrative layers later (Opportunity #3)
              </span>{" "}
              – the roadmap explicitly includes hotspots, annotations, guided
              tours, and integration with Codex Learn / Codex Present so that
              assets don&apos;t live in isolation.
            </li>
          </ul>
        </section>

        {/* What I learned / watching */}
        <section className="space-y-3 border-t border-neutral-900 pt-8">
          <h2 className="text-lg font-semibold text-neutral-50">
            What I&apos;m watching for in this experiment
          </h2>
          <p className="text-sm text-neutral-300">
            With this MVE live, the goal is to learn how strongly each
            opportunity resonates in practice:
          </p>
          <ul className="ml-5 list-disc space-y-2 text-sm text-neutral-300">
            <li>
              For Opportunity #1: Do users feel like the Codex3D flow actually
              simplifies capture → production → publishing, or where does it
              still feel &quot;too difficult&quot; or &quot;too slow&quot;?
            </li>
            <li>
              For Opportunity #2: Which modes do different segments gravitate
              toward, and what does that say about how &quot;lightweight&quot;
              or &quot;affordable&quot; this needs to be?
            </li>
            <li>
              For Opportunity #3: When people talk about success, do they ask
              for more narrative, interactive, or educational layers on top of
              the 3D outputs?
            </li>
          </ul>
        </section>

        {/* Next steps */}
        <section className="space-y-3 border-t border-neutral-900 pt-8 pb-10">
          <h2 className="text-lg font-semibold text-neutral-50">Next steps</h2>
          <p className="text-sm text-neutral-300">
            Coming out of Idea Factory, Codex3D serves as a test bed for a
            broader Codex Studio roadmap:
          </p>
          <ul className="ml-5 list-disc space-y-2 text-sm text-neutral-300">
            <li>
              Deepen the unified workflow with more automation for recurring
              capture → 3D → publish jobs.
            </li>
            <li>
              Explore a Shopify / e-commerce plugin and educator-friendly
              templates to keep the tools lightweight and accessible.
            </li>
            <li>
              Layer in Codex Learn and Codex Present so users can combine 3D
              assets with narrative, interpretation, and guided experiences.
            </li>
            <li>
              Eventually fold this into a multi-tenant platform for museums,
              educators, and enterprises to manage and publish 3D over time.
            </li>
          </ul>
          <p className="mt-2 text-sm text-neutral-400">
            In short: Idea Factory helped clarify that the real opportunity
            isn&apos;t just &quot;better 3D tools&quot;—it&apos;s a unified,
            accessible workflow that turns real-world objects and knowledge into
            meaningful, story-driven digital experiences. Codex3D is the first
            concrete step in that direction.
          </p>
        </section>
        <BackToTop />
      </main>

      <footer className="border-t border-neutral-900 py-4 text-center text-[11px] text-neutral-500">
        Built as a Minimum Viable Experiment during Startup Virginia’s Idea
        Factory · 2025
      </footer>
    </div>
  );
}
