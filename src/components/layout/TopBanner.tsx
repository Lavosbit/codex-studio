import React from "react";

type TopBannerProps = {
  message: string;
};

export default function TopBanner({ message }: TopBannerProps) {
  return (
    <div className="w-full border-b border-neutral-900 bg-neutral-900/90">
      <div className="mx-auto max-w-5xl px-4 py-2 text-center text-[11px] text-neutral-300 md:px-6">
        {message}
      </div>
    </div>
  );
}
