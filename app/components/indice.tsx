"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const IndiceParte = () => {
  return (
    <div className="bg-gradient-to-r from-black-50 to-red-300 p-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8"
      >
        <h1 className="text-3xl font-extrabold text-center mb-4 text-red-800">
          Índice de Shannon-Wiener (H’)
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Al calcular el índice de Shannon se obtuvo un valor de{" "}
          <span className="font-bold text-blue-800">2,147</span>; lo cual
          indica que al ser menor a 5 pero mayor a cero, existe una diversidad
          moderada. Esto se ve influenciado por la presencia de{" "}
          <span className="font-bold text-blue-800">37 especies distintas</span>
          , con la presencia de algunas con mayor predominancia, como
          <span className="font-bold text-blue-800">Auricularia nigricans</span>
          , que representa el <span className="font-bold text-blue-800">17,99%</span>{" "}
          y <span className="font-bold text-blue-800">18 especies</span> con
          solo <span className="font-bold text-blue-800">0.24%</span> cada una,
          limita la equitatividad. Al encontrarse H’ por
          debajo del máximo teórico de ln(37)=
          <span className="font-bold text-blue-800">3.611</span>, indica que
          existe una riqueza significativa, pero una equitatividad limitada.
          Aunque la comunidad fúngica en el campus analizado es rica, existen
          especies que posiblemente se adaptan de mejor manera a condiciones ya
          sea climáticas o biológicas en comparación a otras, lo que podría
          explicar por qué en algunos casos se ve poca presencia de estas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-800">
          Cálculo de Proporciones y Logaritmos
        </h2>
        <Image
          src="/TABLA1.png"
          alt="Tabla de proporciones y logaritmos"
          width={900}
          height={700}
          className="mx-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-600 mt-6 text-center">
          Tabla 3: Índice de Shannon-Wiener
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-800">
          Cálculo de índice de Shannon-Wiener
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          H’ = - Σ<sub>i=1</sub>
          <sup>s</sup> p<sub>i</sub> ln (p<sub>i</sub>)
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          H’ = -(2,147) = 2,147
        </p>
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-800">
          Diversidad de Simpson (1-D)
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Cerca de{" "}
          <span className="font-bold text-blue-800">0</span> → baja diversidad.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Cerca de{" "}
          <span className="font-bold text-blue-800">1</span> → alta diversidad.
          Cuanto más cercano a 1, mayor equilibrio y variedad de especies.
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700">
          <li className="font-bold text-blue-800">Diversidad generalizada</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Número total de individuos (N):{" "}
          <span className="font-bold text-blue-800">39</span>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Número total de especies (n):{" "}
          <span className="font-bold text-blue-800">417</span>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          D = 1 - Σ(n - 1/N - 1)
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          D = 39 (39 - 1)/417 (417 - 1) = 39 (38)/417 (416) = 1482/173472 = 0,0085
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          D = 1 - (0,0085) = 0,9915
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          0,9915 ≈ 1
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Hay una alta diversidad y baja dominancia entre las especies de hongos
          en la Universidad, ya que el valor del índice de Simpson se aproxima a{" "}
          <span className="font-bold text-blue-800">1</span>. El campus “La
          María” posee zonas de humedad y gran cantidad de árboles y materia
          orgánica, hábitat óptimo para el crecimiento de hongos. A pesar de las
          actividades antropológicas como construcciones y control agrícola con
          uso de fungicidas, los hongos crecen de gran manera siendo el suelo
          muy fértil para los hongos lo que provoca su desarrollo.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <Image
          src="/TABLA.png"
          alt="Tabla de datos"
          width={800}
          height={600}
          className="mx-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-600 mt-6 text-center">
          Tabla 5: Suma total de individuos
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          D = 1 - Σ(n/N)<sup>2</sup>
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          D(1) = 1 - (118/417)<sup>2</sup> = 0,919
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          D(2) = 1 - (107/417)<sup>2</sup> = 0,934
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          D(3) = 1 - (55/417)<sup>2</sup> = 0,982
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center font-bold text-blue-800">
          D(4) = 1 - (137/417)<sup>2</sup> = 0,892
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          La zona 4 (
          <span className="font-bold text-blue-800">0.892</span>),
          parqueadero, tiene un índice más bajo que las demás zonas, esto
          significa que tiene mayor dominancia en una de sus especies. Mientras
          que la zona 3 (
          <span className="font-bold text-blue-800">0.982</span>), presenta
          una cantidad más cercana a <span className="font-bold text-blue-800">1</span>
          , por lo tanto se sugiere que la zona tres tiene una distribución más
          equitativa o menos dominante de una sola especie, lo que incrementa su
          diversidad en comparación con las otras zonas.
        </p>
      </motion.div>
    </div>
  );
};

export default IndiceParte;