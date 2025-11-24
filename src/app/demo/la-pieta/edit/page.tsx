// src/app/demo/la-pieta/edit/page.tsx
import ArtifactHotspotEditor from "@/components/ArtifactHotspotEditor";
import { laPietaHotspots } from "@/data/laPietaHotspots";

export default function LaPietaEditPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Editor
        </p>
        <h1 className="text-2xl font-semibold">La Pietà Hotspot Editor</h1>
        <p className="text-sm text-slate-300">
          Click on the sculpture to drop a label, then edit the copy on the
          right. Use “Copy JSON” and paste into <code>laPietaHotspots.ts</code>{" "}
          when you’re happy.
        </p>
      </header>

      <ArtifactHotspotEditor
        src="/demo-assets/la-pieta.glb"
        initialHotspots={laPietaHotspots}
      />
    </main>
  );
}
