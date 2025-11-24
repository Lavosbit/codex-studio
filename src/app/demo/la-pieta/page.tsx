import ModelViewer from "@/components/ModelViewer";

export default function LaPietaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <div className="space-y-4 mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Demo Artifact
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          La Pietà (Plaster Cast)
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-slate-300">
          Digitized with an Artec Eva scanner. Licensed as Public Domain Mark
          (PDM) from Scan the World / Statens Museum for Kunst.
        </p>
      </div>

      <div className="w-full aspect-[4/3] rounded-2xl border border-slate-800 overflow-hidden bg-black/40">
        <ModelViewer
          src="/demo-assets/la-pieta.glb"
          alt="La Pietà sculpture"
          camera-controls
          auto-rotate
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-orbit="0deg 65deg 2.3m"
          field-of-view="30deg"
          shadow-intensity="0.6"
          shadow-softness="0.35"
          exposure="0.8"
          environment-image="neutral"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Anatomy & weight */}
          <button
            className="cdx-hotspot"
            slot="hotspot-anatomy"
            data-position="13 0.25 -10"
            data-normal="0 0 1"
            data-visibility-attribute="data-visible"
          >
            <span className="cdx-hotspot-dot" />
            <span className="cdx-hotspot-label">Anatomy & Weight</span>
          </button>

          {/* Drapery study */}
          <button
            className="cdx-hotspot"
            slot="hotspot-drapery"
            data-position="60 20 40"
            data-normal="0 0 1"
            data-visibility-attribute="data-visible"
          >
            <span className="cdx-hotspot-dot" />
            <span className="cdx-hotspot-label">Drapery & Flow</span>
          </button>

          {/* Gaze & emotion */}
          <button
            className="cdx-hotspot"
            slot="hotspot-gaze"
            data-position="-20 0.65 0.2"
            data-normal="0 0 1"
            data-visibility-attribute="data-visible"
          >
            <span className="cdx-hotspot-dot" />
            <span className="cdx-hotspot-label">Gaze & Emotion</span>
          </button>
        </ModelViewer>
      </div>

      <footer className="mt-8 text-xs text-slate-500">
        Source: MyMiniFactory – SMK Statens Museum for Kunst (La Pietà, plaster
        cast) — Public Domain Mark (PDM)
      </footer>
    </main>
  );
}
