"use client";

import React, { useRef, useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-neutral-100 py-6">
      <SlideTabs />
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() =>
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }))
      }
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {["Home", "Catalogo", "Acerca_de", "Indice"].map((label) => (
        <Tab key={label} setPosition={setPosition}>
          {label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<HTMLLIElement | null>(null);

const routes: { [key: string]: string } = {
    Home: "/",
    Catalogo: "/pricing",
    Acerca_de: "/acerca",
    Indice: "/indice",
  };


  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <Link href={routes[children] || "#"}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

