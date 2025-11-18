"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BackToTop from "@/components/ui/back-to-top";

const MODES = [
  { id: "ai", label: "AI Fast Mode" },
  { id: "photogrammetry", label: "Photogrammetry Mode" },
  { id: "splats", label: "Gaussian Splats Mode" },
  { id: "pro", label: "Pro Processing (Human-in-the-loop)" },
];

export default function UploadPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState<string>("ai");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!files || files.length === 0) {
      setMessage("Please select at least one image.");
      return;
    }

    if (!email) {
      setMessage("Please enter your email so we can follow up.");
      return;
    }

    setSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Codex3D User",
          email,
          subject: `Codex3D ${mode} request (${files.length} file${
            files.length === 1 ? "" : "s"
          })`,
          message: [
            `Mode: ${mode}`,
            `Files uploaded: ${files.length}`,
            "",
            "Notes:",
            notes || "(none provided)",
          ].join("\n"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setMessage(
        "Thanks! For this MVE, we’ll manually process your 3D model and follow up by email."
      );
      // You can clear fields if you want:
      // setName(""); setEmail(""); setNotes(""); setFiles(null); setMode("ai");
    } catch (err) {
      console.error("❌ Submit error:", err);
      setMessage(
        "Something went wrong sending your request. You can also email me directly at jacob.galito@gmail.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Demo banner */}
      <div className="w-full border-b border-neutral-800 bg-neutral-900/90 px-4 py-2 text-center text-[11px] text-neutral-300 md:px-6">
        Demo Mode: This version simulates job submissions for Idea Factory.
      </div>

      {/* Header */}
      <header className="border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300" />
            <span className="text-sm font-semibold tracking-tight md:text-base">
              Codex<span className="text-sky-400">3D</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-neutral-700 bg-neutral-950/60 text-xs"
            >
              <a href="/">Back to overview</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:px-6 md:py-14">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
            Start a conversion
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Upload images and choose your mode.
          </h1>
          <p className="max-w-2xl text-sm text-neutral-300">
            This is a live minimum viable experiment. You upload 1–10 images,
            choose how you&apos;d like us to process them, and we manually run
            them through our 3D pipeline for this stage.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 md:grid-cols-[2fr,1.3fr] md:p-6"
        >
          {/* Left column: Name, Email, Files, Notes */}
          <div className="space-y-5">
            {/* NAME */}
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                Your name
              </label>
              <Input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-neutral-950/70 border-neutral-700 text-sm"
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                Your email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-neutral-950/70 border-neutral-700 text-sm"
                required
              />
              <p className="text-[11px] text-neutral-500">
                We&apos;ll send your 3D model and any follow-up questions here.
              </p>
            </div>

            {/* IMAGES */}
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                Images
              </label>
              <div className="flex flex-col gap-2 rounded-xl border border-dashed border-neutral-700 bg-neutral-950/60 p-4 text-xs text-neutral-300">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  className="cursor-pointer text-[11px] file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-neutral-800 file:px-3 file:py-1.5 file:text-[11px] file:font-medium file:text-neutral-100 hover:file:bg-neutral-700"
                />
                <p className="text-[11px] text-neutral-500">
                  Ideal: 3–10 clear shots around the object, consistent lighting
                  and background.
                </p>
              </div>
            </div>

            {/* NOTES */}
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                Notes (optional)
              </label>
              <Textarea
                placeholder="Tell us what this object is, where it will be used, or any constraints."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[80px] resize-none bg-neutral-950/70 border-neutral-700 text-sm"
              />
            </div>
          </div>

          {/* Right column: Modes + Submit */}
          <div className="space-y-5 rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                Mode
              </p>
              <div className="space-y-2">
                {MODES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMode(m.id)}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-xs transition ${
                      mode === m.id
                        ? "border-sky-400 bg-sky-400/10 text-neutral-50"
                        : "border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:border-neutral-500 hover:bg-neutral-900"
                    }`}
                  >
                    <span className="block text-[12px] font-medium">
                      {m.label}
                    </span>
                    {m.id === "ai" && (
                      <span className="mt-1 block text-[11px] text-neutral-400">
                        Fast turnaround. Great for simpler, clean objects.
                      </span>
                    )}
                    {m.id === "photogrammetry" && (
                      <span className="mt-1 block text-[11px] text-neutral-400">
                        Highest fidelity. Best for artifacts, training parts,
                        and accuracy-critical use.
                      </span>
                    )}
                    {m.id === "splats" && (
                      <span className="mt-1 block text-[11px] text-neutral-400">
                        Immersive splat render. Best for rooms, sculptures, or
                        artistic experiences (not e-commerce ready).
                      </span>
                    )}
                    {m.id === "pro" && (
                      <span className="mt-1 block text-[11px] text-neutral-400">
                        Human-in-the-loop cleanup and optimization. Ideal for
                        hero assets and complex objects.
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={submitting}
              >
                {submitting ? "Submitting…" : "Submit for processing"}
              </Button>
              <p className="text-[11px] text-neutral-500">
                In this Idea Factory experiment, we&apos;ll manually process
                your upload using our internal tools and send back a link to
                your 3D model.
              </p>
              {message && <p className="text-[11px] text-sky-400">{message}</p>}
            </div>
          </div>
        </form>
        <BackToTop />
      </main>

      <footer className="border-t border-neutral-900 py-4 text-center text-[11px] text-neutral-500">
        Built as a Minimum Viable Experiment during Startup Virginia’s Idea
        Factory · 2025
      </footer>
    </div>
  );
}
