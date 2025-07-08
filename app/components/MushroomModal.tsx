"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function MushroomModal({ mushroom, onClose }) {
  return (
    <AnimatePresence>
      {mushroom && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 100 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-md transition"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Imagen del hongo */}
            <img
              src={mushroom.image}
              alt={mushroom.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            {/* Contenido del modal */}
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-3">
              {mushroom.name}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {mushroom.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
