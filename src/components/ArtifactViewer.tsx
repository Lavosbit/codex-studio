"use client";

import ModelViewer from "./ModelViewer";

export function ArtifactViewer() {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl border border-slate-800 bg-black/40 overflow-hidden">
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
        shadow-softness="0.8"
        exposure="0.8"
        environment-image="neutral"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
