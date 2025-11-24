// src/data/laPietaHotspots.ts
export type Hotspot = {
  id: string;
  label: string;
  position: [number, number, number]; // x y z
  normal: [number, number, number]; // nx ny nz
};

export const laPietaHotspots: Hotspot[] = [
  {
    id: "anatomy-weight",
    label: "Anatomy & Weight",
    position: [0, 0.25, 0.35],
    normal: [0, 0, 1],
  },
  {
    id: "drapery-flow",
    label: "Drapery & Flow",
    position: [0, 0, 0.45],
    normal: [0, 0, 1],
  },
];
