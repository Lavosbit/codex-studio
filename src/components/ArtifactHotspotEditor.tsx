"use client";

import { useEffect, useRef, useState } from "react";
import ModelViewer from "./ModelViewer";
import type { Hotspot } from "@/data/laPietaHotspots";

type Props = {
  src: string;
  initialHotspots?: Hotspot[];
};

export default function ArtifactHotspotEditor({
  src,
  initialHotspots = [],
}: Props) {
  const viewerRef = useRef<HTMLElement | null>(null);
  const [hotspots, setHotspots] = useState<Hotspot[]>(initialHotspots);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Attach click handler to the <model-viewer> element
  useEffect(() => {
    const viewer = viewerRef.current as any;
    if (!viewer) return;

    const handleClick = (event: MouseEvent) => {
      const rect = viewer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const hit = viewer.positionAndNormalFromPoint(x, y);
      if (!hit) return;

      const { position, normal } = hit;

      // If a hotspot is selected, MOVE it instead of creating a new one
      if (selectedId) {
        setHotspots((prev) =>
          prev.map((h) =>
            h.id === selectedId
              ? {
                  ...h,
                  position: [position.x, position.y, position.z],
                  normal: [normal.x, normal.y, normal.z],
                }
              : h
          )
        );
        return;
      }

      // Otherwise create a new hotspot
      const id = `hotspot-${Date.now()}`;

      const newHotspot: Hotspot = {
        id,
        label: "New label",
        position: [position.x, position.y, position.z],
        normal: [normal.x, normal.y, normal.z],
      };

      setHotspots((prev) => [...prev, newHotspot]);
      setSelectedId(id);
    };

    viewer.addEventListener("click", handleClick);
    return () => viewer.removeEventListener("click", handleClick);
  }, [selectedId]);

  const updateLabel = (id: string, label: string) => {
    setHotspots((prev) => prev.map((h) => (h.id === id ? { ...h, label } : h)));
  };

  const copyJson = () => {
    const json = JSON.stringify(hotspots, null, 2);
    navigator.clipboard.writeText(json).catch(() => {});
    alert("Hotspot JSON copied to clipboard");
  };

  const removeHotspot = (id: string) => {
    setHotspots((prev) => prev.filter((h) => h.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const selectHotspot = (id: string) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      {/* Viewer */}
      <div className="w-full aspect-[4/3] rounded-2xl border border-slate-800 overflow-hidden bg-black/40">
        <ModelViewer
          ref={viewerRef}
          src={src}
          alt="Editing hotspots"
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="0.6"
          shadow-softness="0.8"
          exposure="0.8"
          environment-image="neutral"
          style={{ width: "100%", height: "100%" }}
        >
          {hotspots.map((h, index) => (
            <button
              key={h.id}
              className={`cdx-hotspot ${
                selectedId === h.id ? "ring-2 ring-emerald-400/70" : ""
              }`}
              slot={`hotspot-${index}`}
              data-position={h.position.join(" ")}
              data-normal={h.normal.join(" ")}
              data-visibility-attribute="data-visible"
            >
              <span className="cdx-hotspot-dot" />
              <span className="cdx-hotspot-label">{h.label}</span>
            </button>
          ))}
        </ModelViewer>
      </div>

      {/* Side panel */}
      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-400">
            Hotspots
          </h2>
          <button
            onClick={copyJson}
            className="rounded-full border border-emerald-500/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-300 hover:bg-emerald-500/10"
          >
            Copy JSON
          </button>
        </div>

        {hotspots.length === 0 && (
          <p className="text-xs text-slate-500">
            Click on the sculpture to drop your first label.
          </p>
        )}

        <ul className="space-y-3 max-h-64 overflow-auto pr-1">
          {hotspots.map((h) => (
            <li
              key={h.id}
              className={`rounded-xl border px-3 py-2 text-xs cursor-pointer ${
                selectedId === h.id
                  ? "border-emerald-500/70 bg-emerald-500/10"
                  : "border-slate-700 bg-slate-900/70"
              }`}
              onClick={() => selectHotspot(h.id)}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="uppercase tracking-[0.16em] text-[10px] text-slate-400">
                  {h.id}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeHotspot(h.id);
                  }}
                  className="text-[10px] text-slate-400 hover:text-rose-400"
                >
                  Remove
                </button>
              </div>
              <input
                value={h.label}
                onChange={(e) => updateLabel(h.id, e.target.value)}
                className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-emerald-500"
              />
            </li>
          ))}
        </ul>

        {selectedId && (
          <p className="text-[11px] text-slate-400">
            <span className="font-semibold text-emerald-300">
              Move mode active:
            </span>{" "}
            click on the sculpture to reposition{" "}
            <code className="text-[10px]">{selectedId}</code>.
          </p>
        )}
      </div>
    </div>
  );
}
