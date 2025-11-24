// components/ArtifactViewer.tsx
"use client";

import "@google/model-viewer"; // ensure this is imported somewhere once
import type { DemoArtifact } from "@/data/demoArtifacts";

type Props = {
  artifact: DemoArtifact;
};

export function ArtifactViewer({ artifact }: Props) {
  return (
    <div className="w-full aspect-[4/3] rounded-2xl border border-slate-800 bg-black/40 overflow-hidden">
      <model-viewer
        src="/demo-assets/la-pieta.glb"
        alt="La Pietà sculpture"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="0.9"
      ></model-viewer>
    </div>
  );
}
