// app/demo/page.tsx

import { demoArtifacts } from "@/data/demoArtifacts";
import { ArtifactViewer } from "@/components/ArtifactViewer";
import Link from "next/link";

// export const metadata = {
//   title: "Global Demo Gallery | Codex Studio",
//   description:
//     "Explore a curated set of global artifacts rendered in Codex Studio's viewer.",
// };

export default function DemoGalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Demo
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Global artifact gallery
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-slate-300">
          These open-access 3D scans from museums and cultural collections
          around the world are rendered in Codex Studio&apos;s viewer as a
          glimpse of how real objects can be captured, preserved, and shared.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {demoArtifacts.map((artifact) => (
          <article
            key={artifact.id}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
          >
            <ArtifactViewer artifact={artifact} />

            <div className="space-y-1">
              <h2 className="text-lg font-medium">{artifact.name}</h2>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                {artifact.origin}
              </p>
              {artifact.museum && (
                <p className="text-xs text-slate-400">
                  {artifact.museum} • {artifact.location}
                </p>
              )}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700 px-2 py-0.5">
                {artifact.license}
              </span>
              {artifact.licenseUrl && (
                <Link
                  href={artifact.licenseUrl}
                  className="underline underline-offset-2 hover:text-slate-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>

      <footer className="border-t border-slate-800 pt-6 text-xs text-slate-500">
        Models courtesy of Scan the World, MyMiniFactory, and Smithsonian 3D
        under their respective open-access licenses. Attribution links are
        included with each object.
      </footer>
    </main>
  );
}
