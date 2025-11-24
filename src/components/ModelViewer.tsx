"use client";

import React, { useEffect, forwardRef } from "react";

type ModelViewerProps = React.HTMLAttributes<HTMLElement> & {
  src?: string;
  alt?: string;
  ar?: boolean | string;
  "ar-modes"?: string;
  "camera-controls"?: boolean | string;
  "auto-rotate"?: boolean | string;
  "shadow-intensity"?: string | number;
  "shadow-softness"?: string | number;
  exposure?: string | number;
  children?: React.ReactNode;
};

const ModelViewer = forwardRef<HTMLElement, ModelViewerProps>(
  ({ children, ...rest }, ref) => {
    useEffect(() => {
      // Load the web component only on the client
      import("@google/model-viewer");
    }, []);

    // Use React.createElement so TS doesn't care about JSX.IntrinsicElements
    return React.createElement("model-viewer", { ref, ...rest }, children);
  }
);

ModelViewer.displayName = "ModelViewer";

export default ModelViewer;
