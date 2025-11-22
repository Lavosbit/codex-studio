"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MODES = [
  { id: "ai", label: "AI Fast Mode" },
  { id: "photogrammetry", label: "Photogrammetry Mode" },
  { id: "splats", label: "Gaussian Splats Mode" },
  { id: "pro", label: "Pro Processing (Human-in-the-loop)" },
];

export default function UploadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState<string>("ai");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ✅ simple validity check: require email + at least one file
  const isFormValid = !!email.trim() && !!files && files.length > 0;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);
    setMessage(null);

    if (!files || files.length === 0) {
      setError("Please select at least one image.");
      return;
    }

    if (!email) {
      setError("Please enter your email so we can follow up.");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("name", name || "Codex3D User");
      formData.append("email", email);
      formData.append("mode", mode);
      formData.append("notes", notes);

      // Attach all selected files
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData, // browser sets multipart boundary
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data?.success === false) {
        throw new Error(data?.error || "Request failed");
      }

      setMessage(
        "Thanks! For this MVE, we’ll manually process your 3D model and follow up by email."
      );
    } catch (err: any) {
      console.error("❌ Submit error:", err);
      setError(
        "Something went wrong sending your request. You can also email me directly at jacob.galito@gmail.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
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
              Ideal: 3–10 clear shots around the object, consistent lighting and
              background.
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
                <span className="block text-[12px] font-medium">{m.label}</span>
                {m.id === "ai" && (
                  <span className="mt-1 block text-[11px] text-neutral-400">
                    Fast turnaround. Great for simpler, clean objects.
                  </span>
                )}
                {m.id === "photogrammetry" && (
                  <span className="mt-1 block text-[11px] text-neutral-400">
                    Highest fidelity. Best for artifacts, training parts, and
                    accuracy-critical use.
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
                    Human-in-the-loop cleanup and optimization. Ideal for hero
                    assets and complex objects.
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            type="submit"
            disabled={!isFormValid || submitting}
            className={`
              mx-auto mt-4 inline-flex items-center justify-center
              rounded-full px-6 h-10 text-sm font-semibold
              transition-all duration-200
              ${
                !isFormValid || submitting
                  ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                  : "bg-sky-400 text-neutral-900 hover:bg-sky-300 active:bg-sky-500"
              }
            `}
          >
            {submitting ? "Submitting…" : "Submit for processing"}
          </button>

          <p className="text-[11px] text-neutral-500">
            In this Idea Factory experiment, we&apos;ll manually process your
            upload using our internal tools and send back a link to your 3D
            model.
          </p>

          {error && <p className="text-[11px] text-red-400">{error}</p>}
          {message && <p className="text-[11px] text-sky-400">{message}</p>}
        </div>
      </div>
    </form>
  );
}
