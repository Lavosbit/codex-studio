"use client";

import { useRouter } from "next/navigation";

type BackToOverviewButtonProps = {
  label?: string;
};

export default function BackToOverviewButton({
  label = "Back to overview",
}: BackToOverviewButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-950/60 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:border-neutral-500 hover:bg-neutral-900"
    >
      {label}
    </button>
  );
}
