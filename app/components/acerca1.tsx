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
    name: "Cristian Lucas",
    description: "Estudiante apasionado por la biología marina, decidido a explorar y proteger los secretos del océano.",
    img: "Uno.jpg",
  },
  {
    name: "Mayra Palacios",
    description: "Estudiante de biología con interés en laboratorio jajajaja.",
    img: "Dos.jpg",
  },
  {
    name: "Camila Vinces",
    description: "Futura bióloga entusiasmada en microbiología con interés en área de laboratorio, impulsada por las herramientas biotecnológicas.",
    img: "Tres.jpg",
  },
  {
    name: "Eduviges Cagua",
    description: "Estudiante de Biología, apasionada de la Mastofauna en busca de aventuras salvajes 🤭.",
    img: "Cuatro.jpg",
  },
  {
    name: "Fabiana Vargas",
    description: "Ingeniera de datos y entusiasta del aprendizaje automático.",
    img: "Cinco.jpg",
  },
  {
    name: "Thalena Lamorú",
    description: "Estudiante de biología con gran interés en neurociencias y el estudio del cuerpo humano.",
    img: "Seis.jpg",
  },
  {
    name: "Elena Medina",
    description: "Full-stack developer con interés en startups y productos innovadores.",
    img: "Siete.jpg",
  },
  {
    name: "Vivian Varela",
    description: "Full-stack developer con interés en startups y productos innovadores.",
    img: "Ocho.jpg",
  },
];

const studentsImages = [
  { file: "2.jpg", top: "20%", left: "25%", rotate: "6deg", size: "w-36 md:w-56" },
  { file: "imagen.jpg", top: "45%", left: "60%", rotate: "12deg", size: "w-24 md:w-48" },
  { file: "images (1).jpg", top: "20%", left: "40%", rotate: "-6deg", size: "w-52 md:w-80" },
  { file: "images.jpg", top: "50%", left: "40%", rotate: "8deg", size: "w-48 md:w-90" }, //YA ESTA
  { file: "trabajo.jpg", top: "20%", left: "65%", rotate: "18deg", size: "w-40 md:w-64" },
  { file: "Uno.jpg", top: "30%", left: "20%", rotate: "5deg", size: "w-36 md:w-50" },//FOTOS DE ESTUDIANTES
  { file: "Dos.jpg", top: "30%", left: "20%", rotate: "5deg", size: "w-36 md:w-50" },
  { file: "Tres.jpg", top: "35%", left: "55%", rotate: "-3deg", size: "w-24 md:w-50" },
  { file: "Cuatro.jpg", top: "35%", left: "59%", rotate: "-3deg", size: "w-24 md:w-48" },
  { file: "Cinco.jpg", top: "30%", left: "35%", rotate: "10deg", size: "w-36 md:w-41" },
  { file: "Seis.jpg", top: "30%", left: "35%", rotate: "10deg", size: "w-36 md:w-35" },
  { file: "Siete.jpg", top: "30%", left: "35%", rotate: "10deg", size: "w-24 md:w-35" },
  { file: "Ocho.jpg", top: "30%", left: "35%", rotate: "10deg", size: "w-24 md:w-39" },
];

// 🟡 Componente principal
export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sección arrastrable */}
      <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
        <Image
          src="/uteq.png"
          alt="UTEQ Logo"
          width={500}  // Ancho en píxeles
          height={300} // Alto en píxeles
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
              <div className="mb-4 h-21 w-21 rounded-full overflow-hidden">
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
