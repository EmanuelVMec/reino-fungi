"use client";
import { useState } from "react";
import MushroomModal from "./MushroomModal";

const mushrooms = [
  {
    id: 1,
    name: "Amanita Muscaria",
    image: "/mushrooms/amanita.jpg",
    description: "Hongo psicodélico y tóxico muy reconocible por su color rojo con puntos blancos.",
  },
  {
    id: 2,
    name: "Shiitake",
    image: "/mushrooms/shiitake.jpg",
    description: "Popular en la cocina asiática, con propiedades medicinales.",
  },
  {
    id: 3,
    name: "Portobello",
    image: "/mushrooms/portobello.jpg",
    description: "Hongo grande y carnoso, ideal para parrillas.",
  },
  {
    id: 1,
    name: "Amanita Muscaria",
    image: "/mushrooms/amanita.jpg",
    description: "Hongo psicodélico y tóxico muy reconocible por su color rojo con puntos blancos.",
  },
  {
    id: 2,
    name: "Shiitake",
    image: "/mushrooms/shiitake.jpg",
    description: "Popular en la cocina asiática, con propiedades medicinales.",
  },
  {
    id: 3,
    name: "Portobello",
    image: "/mushrooms/portobello.jpg",
    description: "Hongo grande y carnoso, ideal para parrillas.",
  },
  {
    id: 1,
    name: "Amanita Muscaria",
    image: "/mushrooms/amanita.jpg",
    description: "Hongo psicodélico y tóxico muy reconocible por su color rojo con puntos blancos.",
  },
  {
    id: 2,
    name: "Shiitake",
    image: "/mushrooms/shiitake.jpg",
    description: "Popular en la cocina asiática, con propiedades medicinales.",
  },
  {
    id: 3,
    name: "Portobello",
    image: "/mushrooms/portobello.jpg",
    description: "Hongo grande y carnoso, ideal para parrillas.",
  },
];

export default function MushroomGrid() {
  const [selected, setSelected] = useState(null);

  return (
    
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Menú de Hongos 🍄</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mushrooms.map((m) => (
          <div
            key={m.id}
            onClick={() => setSelected(m)}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={m.image}
              alt={m.name}
              className="h-60 w-full object-cover rounded-xl shadow-lg"
            />
            <h3 className="mt-3 text-xl font-semibold text-center">{m.name}</h3>
          </div>
        ))}
      </div>

      {selected && (
        <MushroomModal mushroom={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
