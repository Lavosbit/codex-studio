"use client";

import React, { useEffect, forwardRef } from "react";

type ModelViewerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
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

    return (
      <model-viewer ref={ref as any} {...rest}>
        {children}
      </model-viewer>
    );
  }
);

ModelViewer.displayName = "ModelViewer";

export default ModelViewer;
