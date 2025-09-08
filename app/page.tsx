"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FancyButton1 } from "./components/FiArrowUpRight";
import { FancyButton2 } from "./components/FiArrowUpRight2";
import { FancyButton3 } from "./components/FiArrowUpRight3";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* PRIMER BLOQUE CON VIDEO Y LOGO */}
      <TextParallaxVideoContent
        videoSrc="/video.mp4"
        logoSrc="/logo.png"
        heading="UTEQ: Reino Fungi."
      >
        <ExampleContent />
      </TextParallaxVideoContent>

      {/* OTROS BLOQUES CON IMÁGENES */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Cualidad"
        heading="Trabajo Grupal."
      >
        <ExampleContent2 />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Indice"
        heading="Índice de Shannon-Wiener (H’)"
      >
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
}

const IMG_PADDING = 12;

// COMPONENTE DE VIDEO CON TEXTO PARALLAX
const TextParallaxVideoContent = ({
  videoSrc,
  logoSrc,
  heading,
  children,
}: {
  videoSrc: string;
  logoSrc: string;
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyVideo videoSrc={videoSrc} />
        <OverlayCopy
          heading={heading}
          subheading={
            <Image
  src={logoSrc}
  alt="Logo"
  width={370}
  height={100} // ajusta a la altura que quieras
  className="mb-2"
/>
          }
        />
      </div>
      {children}
    </div>
  );
};

const StickyVideo = ({ videoSrc }: { videoSrc: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ scale }}
      className="sticky top-3 z-0 overflow-hidden rounded-3xl h-[calc(100vh-24px)]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        src={videoSrc}
      />
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: React.ReactNode;
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: React.ReactNode;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      {subheading}
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-red-500 md:col-span-4">
      Información que necesitas sobre los hongos
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        🍄 Explora el mundo de los Hongos
Descubre la gran diversidad de hongos que existen: comestibles, medicinales y silvestres.
 Aprende a identificarlos, conoce sus propiedades y adéntrate en este fascinante 
 reino natural.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        👉 Presiona el botón para acceder al Catálogo de Hongos y explorar toda la colección disponible.
      </p>
      <FancyButton1>Ver más información</FancyButton1>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-red-500 md:col-span-4">
      Calidad y autenticidad de investigación
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        🍄 Nosotros
Somos un grupo de estudiantes apasionados por el mundo de los hongos. 
Nos gusta explorarlos, aprender a identificarlos y armar un catálogo 
sencillo donde cualquiera pueda conocer más sobre ellos.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        👉 Presiona el botón para descubrir sobre nosotros, 
        cómo hacemos este trabajo y quiénes formamos parte del proyecto.
      </p>
      <FancyButton2>Ver más información</FancyButton2>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-red-500 md:col-span-4">
      Indice explicativo
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Revisar el índice de la página para conocer más sobre hongos, su
        clasificación y hábitat natural.
      </p>
      <FancyButton3>Ver más información</FancyButton3>
    </div>
  </div>
);
