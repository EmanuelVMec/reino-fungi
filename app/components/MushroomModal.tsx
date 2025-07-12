"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Mushroom {
  name: string;
  image?: string;       // permite el antiguo
  images?: string[];    // nuevo array
  description: string;
}

interface ModalProps {
  mushroom: Mushroom | null;
  onClose: () => void;
}

export default function MushroomModal({ mushroom, onClose }: ModalProps) {
  const [idx, setIdx] = useState(0);
  if (!mushroom) return null;

  /* Usa array si existe, si no crea uno con la única imagen */
  const gallery = mushroom.images ?? (mushroom.image ? [mushroom.image] : []);
  const total   = gallery.length;

  const prev = () => setIdx((idx - 1 + total) % total);
  const next = () => setIdx((idx + 1) % total);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          style={{
            backgroundImage: "url(/noise.png)",
            backgroundSize: "180px",
            opacity: 0.5,
          }}
          onClick={onClose}
        />

        {/* modal */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.85, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 80 }}
          transition={{ duration: 0.45 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-400 shadow-2xl bg-[#fefbf7]"
        >
          {/* cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white text-2xl shadow-lg transition hover:scale-110 hover:bg-red-700"
          >
            ×
          </button>

          {/* slider */}
          {total > 0 && (
            <div className="relative">
              <img
                src={gallery[idx]}
                alt={mushroom.name}
                className="h-72 w-full object-cover border-b border-neutral-300"
              />

              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          )}

          {/* contenido */}
          <div className="p-8 max-h-[65vh] overflow-y-auto space-y-5">
            <h2 className="text-3xl font-extrabold text-red-700 text-center">
              {mushroom.name}
            </h2>
            <div
              className="prose max-w-none text-[15px] leading-relaxed"
              style={{ color: "#000000" }}
              dangerouslySetInnerHTML={{ __html: mushroom.description }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
