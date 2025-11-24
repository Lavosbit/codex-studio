// data/demoArtifacts.ts
export type DemoArtifact = {
  id: string;
  name: string;
  origin: string;
  location: string;
  museum?: string;
  license: string;
  licenseUrl?: string;
  file: string; // path to GLB in /public
  usdz?: string; // optional USDZ
  thumbnail?: string; // optional thumbnail
};

export const demoArtifacts: DemoArtifact[] = [
  {
    id: "nefertiti",
    name: "Bust of Nefertiti",
    origin: "Ancient Egypt",
    location: "Amarna, Egypt",
    museum: "Neues Museum, Berlin",
    license: "Public Domain (Scan the World / MyMiniFactory)",
    licenseUrl:
      "https://www.myminifactory.com/object/3d-print-bust-of-nefertiti-70502",
    file: "/demo-assets/nefertiti.glb",
    thumbnail: "/demo-assets/nefertiti.jpg",
  },
  {
    id: "winged-victory",
    name: "Winged Victory of Samothrace",
    origin: "Ancient Greece",
    location: "Samothrace, Greece",
    museum: "Louvre Museum, Paris",
    license: "CC BY",
    licenseUrl:
      "https://www.myminifactory.com/object/3d-print-winged-victory-of-samothrace-234239",
    file: "/demo-assets/winged-victory.glb",
    thumbnail: "/demo-assets/winged-victory.jpg",
  },
  {
    id: "moai",
    name: "Moai Statue",
    origin: "Rapa Nui (Easter Island)",
    location: "Rapa Nui, Chile",
    license: "CC BY",
    licenseUrl:
      "https://www.myminifactory.com/object/3d-print-moai-statue-easter-island-143568",
    file: "/demo-assets/moai.glb",
    thumbnail: "/demo-assets/moai.jpg",
  },
  {
    id: "goryeo-celadon",
    name: "Goryeo Celadon Vase",
    origin: "Korea (Goryeo Dynasty)",
    location: "Korea",
    license: "CC0 / Public Domain",
    licenseUrl:
      "https://www.myminifactory.com/object/3d-print-goryeo-celadon-108470",
    file: "/demo-assets/goryeo-celadon.glb",
    thumbnail: "/demo-assets/goryeo-celadon.jpg",
  },
  {
    id: "medieval-reliquary",
    name: "Medieval Reliquary",
    origin: "Medieval Europe",
    location: "Europe",
    license: "CC BY-SA",
    licenseUrl:
      "https://www.myminifactory.com/object/3d-print-medieval-reliquary-52762",
    file: "/demo-assets/medieval-reliquary.glb",
    thumbnail: "/demo-assets/medieval-reliquary.jpg",
  },
  {
    id: "tiger-skull",
    name: "Tiger Skull",
    origin: "Anatomical Specimen",
    location: "Smithsonian Institution",
    museum: "Smithsonian National Museum of Natural History",
    license: "CC0",
    licenseUrl:
      "https://3d.si.edu/object/3d/tiger-skull:48c0c8dc-8c7f-11ea-bc68-2e728ce88125",
    file: "/demo-assets/tiger-skull.glb",
    thumbnail: "/demo-assets/tiger-skull.jpg",
  },
  {
    id: "la-pieta",
    name: "La Pietà (Plaster Cast)",
    origin: "Italy (15th Century)",
    location: "Scan the World x Statens Museum for Kunst (Denmark)",
    museum: "SMK – Statens Museum for Kunst",
    license: "Public Domain Mark (PDM)",
    licenseUrl: "https://www.myminifactory.com/object/3d-print-la-pieta-52660",
    file: "/demo-assets/la-pieta.glb",
    thumbnail: "/demo-assets/la-pieta.jpg",
  },
];
