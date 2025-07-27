"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const FancyButton3 = ({ children }: { children: string }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement).getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
      spanRef.current?.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current?.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const btn = btnRef.current;
    btn?.addEventListener("mousemove", handleMouseMove);
    btn?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn?.removeEventListener("mousemove", handleMouseMove);
      btn?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClick = () => {
    router.push("/acerca"); // ✅ Ruta correcta según tu carpeta
  };

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      onClick={handleClick}
      className="relative w-full md:w-fit overflow-hidden rounded-lg bg-slate-950 px-10 py-3 text-base font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {children}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-20 w-20 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};
