"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function showToast(message, duration = 3500) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("sokratix-toast", { detail: { message, duration } })
    );
  }
}

export default function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    let timer;
    const handleToast = (e) => {
      const { message, duration = 3500 } = e.detail || {};
      setToast(message);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setToast(null);
      }, duration);
    };

    window.addEventListener("sokratix-toast", handleToast);
    return () => {
      window.removeEventListener("sokratix-toast", handleToast);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/15 bg-ink/90 px-4 py-3 text-sm text-white shadow-glow backdrop-blur-xl max-w-sm"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red/20 text-red">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="flex-1 font-medium leading-snug">{toast}</p>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="text-muted hover:text-white transition-colors"
              aria-label="Dismiss notification"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}