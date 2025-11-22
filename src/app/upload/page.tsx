"use client";

import UploadForm from "@/components/layout/UploadForm";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import BackToOverviewButton from "@/components/ui/BackToOverviewButton";
import SiteHeader from "@/components/layout/SiteHeader";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Demo banner */}
      <div className="w-full border-b border-neutral-800 bg-neutral-900/90 px-4 py-2 text-center text-[11px] text-neutral-300 md:px-6">
        Demo Mode: This version simulates job submissions for Idea Factory.
      </div>

      {/* Header (same layout as other pages) */}
      <SiteHeader />

      {/* Main content */}
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 md:px-6 md:py-14">
        <div className="space-y-2">
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            <BackToOverviewButton />
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
          </motion.section>
        </div>

        <UploadForm />
      </main>

      <Footer />
    </div>
  );
}
