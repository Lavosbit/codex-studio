"use client";

import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl px-4 sm:px-5 md:px-6">
      {children}
    </div>
  );
}
