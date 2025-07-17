"use client";

import { motion } from "framer-motion";
import { useRef, useState, MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// 🟢 Card (debe ir primero)
interface CardProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZ = -Infinity;
    els.forEach((el) => {
      const currentZ = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );
      if (!isNaN(currentZ) && currentZ > maxZ) {
        maxZ = currentZ;
      }
    });
    setZIndex(maxZ + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{ top, left, rotate, zIndex }}
      className={twMerge(
        "drag-elements absolute bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing p-1",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.6}
    />
  );
};

// 🔵 Componente para las tarjetas arrastrables
const DragCards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {studentsImages.map((img, idx) => (
        <Card
          key={img.file}
          containerRef={containerRef}
          src={`/students/${img.file}`}
          alt={`Estudiante ${idx + 1}`}
          top={img.top}
          left={img.left}
          rotate={img.rotate}
          className={img.size}
        />
      ))}
    </div>
  );
};

// 🔴 Datos
const students = [
  {
    name: "Ana García",
    description: "Apasionada por la inteligencia artificial y el diseño de interfaces.",
    img: "ana.jpg",
  },
  {
    name: "Luis Rodríguez",
    description: "Especialista en backend con experiencia en Node.js y bases de datos.",
    img: "luis.jpg",
  },
  {
    name: "María López",
    description: "Diseñadora UX/UI enfocada en accesibilidad y experiencia de usuario.",
    img: "maria.jpg",
  },
  {
    name: "Carlos Fernández",
    description: "Desarrollador frontend con amor por React y animaciones interactivas.",
    img: "carlos.jpg",
  },
  {
    name: "Sofía Martínez",
    description: "Ingeniera de datos y entusiasta del aprendizaje automático.",
    img: "sofia.jpg",
  },
  {
    name: "Jorge Ramírez",
    description: "Creador de contenido educativo sobre programación y tecnología.",
    img: "jorge.jpg",
  },
  {
    name: "Valeria Torres",
    description: "Full-stack developer con interés en startups y productos innovadores.",
    img: "valeria.jpg",
  },
  {
    name: "Integrante ultimo",
    description: "Full-stack developer con interés en startups y productos innovadores.",
    img: "valeria.jpg",
  },
];

const studentsImages = [
  { file: "2.jpg", top: "20%", left: "25%", rotate: "6deg", size: "w-36 md:w-56" },
  { file: "imagen.jpg", top: "45%", left: "60%", rotate: "12deg", size: "w-24 md:w-48" },
  { file: "images (1).jpg", top: "20%", left: "40%", rotate: "-6deg", size: "w-52 md:w-80" },
  { file: "images.jpg", top: "50%", left: "40%", rotate: "8deg", size: "w-48 md:w-77" },
  { file: "trabajo.jpg", top: "20%", left: "65%", rotate: "18deg", size: "w-40 md:w-64" },
  { file: "ana.jpg", top: "35%", left: "55%", rotate: "-3deg", size: "w-24 md:w-48" },
  { file: "luis.jpg", top: "30%", left: "35%", rotate: "10deg", size: "w-36 md:w-63" },
  { file: "maria.jpg", top: "30%", left: "35%", rotate: "10deg", size: "w-36 md:w-60" },
  { file: "maria.jpg", top: "30%", left: "35%", rotate: "10deg", size: "w-36 md:w-70" },
];

// 🟡 Componente principal
export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sección arrastrable */}
      <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
        <img
          src="/uteq.png"
          alt="UTEQ Logo"
          className="absolute inset-0 m-auto z-0 opacity-70 w-[60vw] max-w-[500px] pointer-events-none"
        />
        <DragCards />
      </section>

      {/* Sección de descripción */}
      <section className="bg-white px-4 py-16 md:px-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Nuestro equipo de estudiantes
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student, index) => (
            <motion.div
              key={student.name}
              className="rounded-2xl bg-slate-100 p-6 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4 h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={`/students/${student.img}`}
                  alt={student.name}
                  className="h-full w-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                {student.name}
              </h2>
              <p className="mt-2 text-slate-700">{student.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
