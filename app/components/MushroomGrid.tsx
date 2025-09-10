"use client";

import { useState } from "react";
import Image from "next/image";
import MushroomModal from "./MushroomModal";

const mushrooms = [
  {
    id: 1,
    name: "Coprinellus micaceus",
    image: "/mushrooms/Coprinellus.jpg",
    description: `
      <strong>Nombre común:</strong> Caprino micáceo o Tapón de tinta brillante<br/><br/>

      <strong>Taxonomía:</strong><br/>
      Reino: <em>Fungi</em><br/>
      Filo: <em>Basidiomycotina</em><br/>
      Clase: <em>Agaricomycetes</em><br/>
      Orden: <em>Agaricales</em><br/>
      Familia: <em>Coprinaceae</em><br/>
      Género: <em>Coprinellus</em><br/><br/>

      <strong>Diagnóstico:</strong> Sombrero de ovoide (sin llegar a aplanarse), radialmente surcado, margen lobulado. Cutícula con surcos profundos y copos blancos brillantes. Carne blanca, delgada y frágil. Inodora e insabora.<br/><br/>

      <strong>Dimensiones:</strong> 2–5 cm<br/><br/>

      <strong>Sustrato:</strong> Madera en descomposición: troncos, tocones, ramas, raíces de árboles caducifolios.<br/><br/>

      <strong>Hábitat:</strong> Árboles de parques y jardines. Distribuido en América, Asia y Europa. Crece todo el año excepto en enero y febrero.
    `,
  },
 {
  id: 2,
  name: "Pleurocybella porrigens",
  image: "/mushrooms/Pleurocybella.jpg", // Asegúrate de que esta imagen esté en tu carpeta public/mushrooms
  description: `
    <strong>Nombre común:</strong> Será espátula blanca<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Basidiomycotina</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Phyllotopsidaceae</em><br/>
    Género: <em>Pleurocybella</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Sombrero de 2 a 8 cm de largo, algo menos de ancho, con forma irregular a modo de espátula o lengua, con base pilosa.
    Cutícula blanca, lisa, glabra. Láminas muy delgadas y apretadas, blancas que viran a amarillo con el tiempo.
    Pie muy corto o ausente, similar a especies del género <em>Pleurotus</em>.
    Carne escasa, delgada. De joven emite un olor agradable.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 2–8 cm de ancho. Pie muy corto o ausente.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece sobre madera muerta en bosques húmedos, especialmente entre musgos.<br/><br/>

    <strong>Hábitat:</strong><br/>
    Zonas boscosas, especialmente húmedas, donde hay abundante madera en descomposición y presencia de musgos.
  `,
},

  {
  id: 3,
  name: "Polyporus arcularius",
  image: "/mushrooms/Polyporus.jpg", 
  description: `
    <strong>Nombre común:</strong> Políporo arculario<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Polyporaceae</em><br/>
    Género: <em>Polyporus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Hongo poliporáceo que aunque crece sobre madera tiene forma de seta, con sombrero y pie.
    Sombrero 3-7 cm de semiesférico a aplanado, algo deprimido en el centro, margen incurvado con pelos hirsutos al tacto.
    Cutícula marrón-gris, con escamas oscuras.
    Himenóforo tubular de una sola capa, con tubos algo decurrentes, poros angulosos y poligonales, color blanco-crema.
    Pie corto, curvado hacia la base, algo escamoso, concoloro con el sombrero.
    Carne blanco-crema, delgada, fibrosa, tenaz. Débil olor fúngico y sabor dulce.<br/><br/>

    <strong>Dimensiones:</strong> 5–10 cm de altura total, incluyendo el tallo y el sombrero.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Ramas caídas de árboles de hoja caduca, como encinas, robles, chopos y álamos, en ambientes húmedos.<br/><br/>

    <strong>Hábitat:</strong><br/>
    Saprofita en ramas muertas de caducifolios (roble melojo, roble, castaño) y de perennifolios (alcornoque, encina).
  `,
},
{
  id: 4,
  name: "Trametes betulina",
  image: "/mushrooms/Trametes.jpg", // pon aquí la imagen real en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Cola de pavo<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Polyporaceae</em><br/>
    Género: <em>Trametes</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Configuración aplanada y frágil, con pileos en forma de abanico, margen delgado y ondulado.
    Superficie aterciopelada y claramente zonada en tonos grises y pardos con borde claro.
    Himenio poroso de color blanco‑crema (poros y tubos).<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombreros de 2.5 – 13 cm de ancho.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Parasita troncos y ramas de árboles caducifolios, provocando podredumbre blanca al descomponer la madera muerta o debilitada.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Presente en todos los continentes excepto la Antártida. Muy común; fructifica durante todo el año.
  `,
},
{
  id: 5, // Asigné el ID 5 (asumiendo que el anterior era 4)
  name: "Crepidotus mollis",
  image: "/mushrooms/crepidotus-mollis.jpg", // Asegúrate de tener la imagen en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Hongo abanico gelatinoso<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Crepidotaceae</em><br/>
    Género: <em>Crepidotus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Superficie superior lisa o ligeramente arrugada, de color blanco, crema a amarillo pálido, con textura viscosa o gelatinosa cuando está húmedo.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 2–6 cm de ancho, hasta 1.5 cm de espesor. Esporas de 7–11 × 4–6 µm (micrómetros), ocráceas en masa.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Se desarrolla sobre madera muerta y húmeda, preferiblemente de árboles caducifolios.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques templados y húmedos, distribuido en Europa, América del Norte y del Sur, Asia y Oceanía. Aparece en temporadas húmedas (como otoño y primavera en climas templados).
  `,
},
{
  id: 6, // Asigné el ID 6 (continuando desde el anterior)
  name: "Lentinus tricholoma",
  image: "/mushrooms/lentinus-tricholoma.jpg", // Asegúrate de tener la imagen en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Hongo tigre<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Polyporaceae</em><br/>
    Género: <em>Lentinus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Sombrero de color blanco a marrón claro, con láminas decurrentes (que bajan por el pie), apretadas. Pie central, corto, blanco o con tono marrón claro, fibroso.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 3–8 cm de diámetro. Pie de 2–5 cm de largo.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece sobre madera en descomposición, especialmente de árboles caducifolios.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques templados y subtropicales, distribuidos en Europa, América del Norte, Asia y Sudamérica (ocasional).
  `,
},
{
  id: 7,
  name: "Laccaria laccata",
  image: [ "/mushrooms/laccaria-laccata.jpg", "/mushrooms/laccaria-laccata2.jpg"],
  description: `
    <strong>Nombre común:</strong> Lacaria lacada, lakaria arrunt, pinpinella rosada, cogomelo lacado<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Homobasidiomycetes</em><br/>
    Orden: <em>Tricholomatales</em><br/>
    Familia: <em>Tricholomataceae</em><br/>
    Género: <em>Laccaria</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Color anaranjado, marrón claro o rosado, convexo cuando joven y plano al madurar, a menudo algo ondulado.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 2–6 cm de diámetro, pie de 4–10 cm de largo y 0.3–0.8 cm de grosor.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Suele aparecer en suelo desnudo, musgo o entre hojarasca, no directamente sobre madera.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques templados y fríos, tanto de coníferas como de árboles de hoja ancha. Distribuida en Europa, América, Asia y otras regiones templadas; muy frecuente en otoño.
  `,
},

{
  id: 8, // Continuando la numeración
  name: "Panus neostrigosus",
  image: [                      
    "/mushrooms/panus-neostrigosus.jpg",
    "/mushrooms/panus-neostrigosus2.jpg",
  ],
  description: `
    <strong>Nombre común:</strong> Hongo ostra peludo, Panus peludo<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Panaceae</em><br/>
    Género: <em>Panus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Sombrero densamente velloso, con tonos rosados o púrpuras. Láminas blancas decurrentes. Pie (estípete) excentrado o lateral, de color similar o más pálido que el sombrero.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 2–8 cm de ancho. Pie de 1–4 cm de largo y 0.5–1 cm de grosor.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece sobre troncos muertos, principalmente en bosques caducifolios.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Asociado a robles en bosques caducifolios. Distribución amplia en América del Norte, donde es común.
  `,
},
{
  id: 9,
  name: "Marasmius rotula",
  image: "/mushrooms/marasmius-rotula.jpg", // Asegúrate de colocar la imagen en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Hongo ruedita<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Marasmiaceae</em><br/>
    Género: <em>Marasmius</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Pequeño, plano o en forma de paragüitas, muy delgado, de color blanco a crema. Presenta estrías radiales visibles que parecen rayos de una rueda.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 0.5–2 cm de diámetro. Pie de 5–8 cm de largo, muy delgado (menos de 1 mm de grosor).<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece sobre ramitas, hojarasca, corteza o madera pequeña en descomposición.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques templados y tropicales. Presente en América del Norte, Europa, Asia y América del Sur.
  `,
},
{
  id: 10,
  name: "Antrodia albida",
  image: "/mushrooms/antrodia-albida.jpg", // Asegúrate de tener la imagen en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Hongo costroso blanco<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Fomitopsidaceae</em><br/>
    Género: <em>Antrodia</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Hongo resupinado (crece pegado a la superficie, como una costra). Color blanco a blanquecino inicialmente, tornándose crema o ligeramente amarillento con la edad.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Superficie puede cubrir grandes áreas (desde unos centímetros hasta varios decímetros), con un espesor entre 1–3 mm.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece sobre madera muerta o en descomposición, especialmente de árboles caducifolios.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques templados, especialmente en zonas húmedas con abundante madera muerta. Distribuido en Europa, América del Norte, Asia y América del Sur. Puede encontrarse en climas templados y fríos.
  `,
},
{
  id: 11,
  name: "Schizophyllum commune",
  image: "/mushrooms/schizophyllum-commune.jpg", // Asegúrate de subir la imagen a /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Hongo de las láminas hendidas<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Schizophyllaceae</em><br/>
    Género: <em>Schizophyllum</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Láminas blancas, profundamente hendidas a lo largo del eje central, lo que permite que el hongo se abra y cierre según la humedad (de ahí su nombre: <em>commune</em> = común, <em>schizo</em> = dividido).<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 1–4 cm de ancho, de espesor delgado y aplanado, en forma de concha u oreja. Láminas visibles por debajo, muy hendidas y apretadas.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece sobre madera muerta (ramas, troncos, corteza), tanto de árboles caducifolios como coníferas.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques templados y tropicales, desde zonas húmedas hasta relativamente secas. Común en América, Europa, Asia, África y Oceanía. Es uno de los hongos más distribuidos del mundo.
  `,
},
{
  id: 12,
  name: "Trichaptum abietinum",
  image: "/mushrooms/trichaptum-abietinum.jpg", // Asegúrate de tener la imagen en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Hongo de abeto púrpura (nombre sugerido, ya que no tiene nombre común ampliamente aceptado)<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Gloeophyllales</em><br/>
    Familia: <em>Polyporaceae</em><br/>
    Género: <em>Trichaptum</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Hongo poliporo que crece en forma de volvas o racimos. Superficie del sombrero en tonos marrones a marrón rojizo, lisa o ligeramente estriada, con estructura en capas. Himenio poroso con pequeños poros irregulares de color púrpura en ejemplares jóvenes (característica distintiva). Textura frágil y delgada, de aspecto seco.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Diámetro de 3–10 cm, con espesor de hasta 1 cm. Los cuerpos fructíferos suelen crecer superpuestos.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Especializado en madera de coníferas, principalmente abetos (<em>Abies</em>) y pinos (<em>Pinus</em>), tanto en árboles moribundos como en descomposición.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques templados y boreales de Norteamérica, Europa y Asia. Coloniza troncos, ramas y tocones en descomposición, contribuyendo activamente a la descomposición de la madera. Prefiere ambientes húmedos y es indicador de bosques maduros de coníferas.
  `,
},
{
  id: 13,
  name: "Ganoderma lucidum",
  image: "/mushrooms/ganoderma-lucidum.jpg", // Asegúrate de tener la imagen en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Reishi, Lingzhi<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Ganodermataceae</em><br/>
    Género: <em>Ganoderma</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Color rojo caoba a marrón rojizo con superficie lacada característica (lúcida). Forma de abanico o riñón, con margen blanquecino en crecimiento activo. Contexto leñoso y poros blancos que se manchan de marrón al tacto.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 5–25 cm de diámetro y 1–3 cm de espesor. Pie lateral o excéntrico (cuando presente) de 5–20 cm.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece sobre troncos, raíces o tocones de árboles muertos o moribundos, principalmente maderas duras (robles, hayas, arces).<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques tropicales, subtropicales y templados. Especie cosmopolita presente en todos los continentes excepto la Antártida, con especial relevancia en Asia (donde se cultiva por sus propiedades medicinales).
  `,
},
{
  id: 14,
  name: "Favolus spatulatus",
  image: "/mushrooms/favolus-spatulatus.jpg", // Asegúrate de tener la imagen en /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Hongo poro espátula (nombre sugerido por la forma característica de sus poros)<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Polyporaceae</em><br/>
    Género: <em>Favolus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Sombrero en forma de lámina o abanico con superficie cubierta de poros alargados en forma de espátula (rasgo distintivo). Color beige a marrón claro, con márgenes curvos o doblados. Los poros son angulares y se disponen radialmente, dando un aspecto de panal al himenio.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 5–20 cm de diámetro y 0.5–2 cm de espesor, con estructura carnosa pero firme.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece exclusivamente sobre madera muerta, especialmente troncos en descomposición de árboles tropicales (tanto caducifolios como perennifolios).<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Especie termófila restringida a bosques tropicales y subtropicales húmedos. Presente en América Central y del Sur, África subsahariana, Sureste Asiático y norte de Oceanía. Frecuente en bosques lluviosos con alta humedad ambiental.
  `,
},
{
  id: 15,
  name: "Gloeophyllum abietinum",
  image: "/mushrooms/gloeophyllum-abietinum.jpg", // Ensure image exists in /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Gloeophyllum de abeto, Hongo de podredumbre parda de coníferas<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Gloeophyllales</em><br/>
    Familia: <em>Gloeophyllaceae</em><br/>
    Género: <em>Gloeophyllum</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Cuerpos fructíferos en grupos imbricados, con superficie marrón a ocre (a veces con tonalidades verdosas por algas epífitas). Textura leñosa y coriácea, con margen afilado. Himenio laminar con láminas gruesas y espaciadas de color pardo. Causa podredumbre parda en la madera (degrada celulosa pero no lignina).<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Cuerpos fructíferos de 3–15 cm de ancho, formando estructuras semicirculares de hasta 5 cm de profundidad.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Especializado en madera de coníferas (principalmente <em>Abies</em>, <em>Picea</em> y <em>Pinus</em>), tanto en troncos caídos como en postes de madera tratada.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques boreales y templados del hemisferio norte (Norteamérica, Europa y Asia). Indicador de madera en avanzado estado de descomposición, frecuente en bosques de abetos y piceas con alta humedad.
  `,
},
{
  id: 16,
  name: "Pleurotus pulmonarius",
  image: "/mushrooms/pleurotus-pulmonarius.jpg", // Asegúrate de subir la imagen a /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Ostra de aire, Seta de ostra del aire, Ostra pálida<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Pleurotales</em><br/>
    Familia: <em>Pleurotaceae</em><br/>
    Género: <em>Pleurotus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Sombrero en forma de abanico o concha, de 8-20 cm, con superficie lisa y color crema a marrón claro (más pálido que P. ostreatus). Margen enrollado en ejemplares jóvenes. Láminas decurrentes, blancas a rosáceas, muy apretadas. Pie excéntrico o lateral, corto y robusto. Carne blanca con olor fúngico agradable.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero: 8-20 cm de diámetro<br/>
    Pie: 1-5 cm de altura × 2-3 cm de grosor<br/><br/>

    <strong>Sustrato:</strong><br/>
    Saprófito lignícola que crece sobre madera muerta de árboles caducifolios (especialmente hayas, robles y álamos). Frecuente en jardines urbanos, bordes de caminos forestales y áreas perturbadas.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Cosmopolita en zonas templadas y subtropicales. Más termófilo que otras especies de Pleurotus, aparece en verano y principios de otoño. Ampliamente distribuido en América, Europa y Asia. Cultivado comercialmente por su valor gastronómico.
  `,
},
{
  id: 17,
  name: "Pseudohydnum gelatinosum",
  image: "/mushrooms/pseudohydnum-gelatinosum.jpg", // Asegúrate de subir la imagen a /public/mushrooms/
  description: `
    <strong>Nombre común:</strong> Gelatina de hongo, Diente gelatinoso, Lengua de gato (en algunas regiones)<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Tremellales</em><br/>
    Familia: <em>Pseudohydnumaceae</em><br/>
    Género: <em>Pseudohydnum</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Cuerpo fructífero gelatinoso, translúcido, de color blanco grisáceo a rosado pálido. Superficie superior lisa y brillante, himenio inferior cubierto de pequeños "dientes" blandos (0.5-2 mm). Consistencia similar a gelatina comestible, rebotando al tacto. No tiene olor distintivo y es insípido.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero de 2-10 cm de diámetro × 0.5-1.5 cm de grosor. Pie corto (hasta 1 cm) o ausente.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece exclusivamente sobre madera en descomposición avanzada de coníferas (especialmente abetos y pinos), raramente en caducifolios. Fructifica en la cara inferior de troncos caídos.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques húmedos de coníferas en zonas templadas y montañosas. Presente en Europa, América del Norte, Asia y ocasionalmente Sudamérica. Fructifica en otoño e invierno, resistiendo heladas leves. Indicador de bosques maduros con alta humedad y materia orgánica en descomposición.
  `,
},
{
  id: 18,
  name: "Lepiota atrodisca",
  image: "/mushrooms/Lepiota.jpg",
  description: `
    <strong>Nombre común:</strong> Parasol oscuro<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Agaricaceae</em><br/>
    Género: <em>Lepiota</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Presenta color blanco-beige, superficie seca, cubierta por finas escamas negruzcas menos densas hacia el margen, con la carne muy delgada. Láminas: libres, blancas, con lamelulas. Su superficie es blanca, casi glabra en el ápice, fibrilosa hacia abajo. Velo blanquecino membranoso, delgado y frágil formando un anillo superior, a menudo con margen grisáceo.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Píleo: de 1.5 a 4 cm de ancho; convexo, se puede expandir hasta casi plano, ligeramente umbonado. Estípite: 2-8 cm de largo, delgado, frágil.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Tierra húmeda.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Hojarasca de bosques. Se encuentra principalmente en zonas bajas del Noroeste del Pacífico. Suele fructificar después de lluvias.<br/><br/>    
  `,
},
{
  id: 19,
  name: "Trametes villosa",
  image: "/mushrooms/Trametes2.jpg",
  description: `
    <strong>Nombre común:</strong> <br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Polyporaceae</em><br/>
    Género: <em>Trametes</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Este hongo se caracteriza por tener una estructura semicircular, posee un color grisáceo o blanquecino, en su sombrero tiene muchos poros de color blanquecino, pero a medida que el hongo crece estos se van tornando de un color marrón.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    El sombrero generalmente mide entre 5 a 10 cm de diámetro.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece en tejidos muertos o en descomposición, principalmente en madera, corteza, ramas u hojas.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Este hongo se encuentra en bosques templados y subtropicales, creciendo sobre troncos, raíces o restos de madera en descomposición. Y se distribuye por varios países de América central y del Sur.
  `,
},
{
  id: 20,
  name: "Leucocoprinus ianthinus",
  image: "/mushrooms/ianthinus.jpg",
  description: `
    <strong>Nombre común:</strong> Hongo púrpura de maceta<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Agaricaceae</em><br/>
    Género: <em>Leucocoprinus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Sombrero de color blanco a amarillento con un disco central oscuro que puede variar de violeta a negro, y un pie con una capa fibrilosa y violeta en la base, de donde surgen el anillo y la esporada de color blanco a lila pálido. El margen del sombrero es estriado y suele curvarse hacia adentro con la edad, mientras que las láminas son libres, apiñadas y blancas. Es un hongo tóxico que causa síntomas gastrointestinales y se encuentra en lugares con suelo alterado.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Su tamaño es de 2.5 a 5 cm de diámetro.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece preferentemente en sustratos orgánicos en descomposición, como suelos de macetas, invernaderos, humus de bosque, y pilas de compost o aserrín.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Distribución global, originándose en regiones tropicales y subtropicales, pero dispersándose fácilmente a través de plantas y compostaje a climas templados.
  `,
},
{
  id: 21,
  name: "Stereum rugosum",
  image: "/mushrooms/rugosum.jpg",
  description: `
    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Russulales</em><br/>
    Familia: <em>Stereaceae</em><br/>
    Género: <em>Stereum</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Cuerpo fructífero coriáceo, rugoso y tuberculado, que forma costras sobre la madera. Forma rugosa irregular. Crece en ramas y troncos, puede ser perenne, y aunque no es comestible, es un importante agente de descomposición de la madera.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Varían.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Hongo saprofito que aparece sobre madera muerta en descomposición de caducifolios, especialmente en ramas caídas y troncos, de los que se alimenta y que utiliza como sustrato para su desarrollo.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Bosques húmedos de diversas partes del mundo.
  `,
},
{
  id: 22,
  name: "Lentinus crinitus",
  image: "/mushrooms/crinitus.jpg",
  description: `
    <strong>Nombre común:</strong> Hongo de pelo o melena de león del bosque<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Polyporales</em><br/>
    Familia: <em>Polyporaceae</em><br/>
    Género: <em>Lentinus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Es un hongo con forma de embudo profundo, con superficie vellosa y color que va del marrón amarillento al marrón grisáceo. Posee láminas decurrentes ocreo pálido con bordes dentados y un estipe (tallo) con escamas amarillentas.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    El sombrero generalmente mide entre 1.2 a 4.2 cm de diámetro.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Generalmente crece sobre madera muerta o en descomposición.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Este hongo se encuentra en climas cálidos y húmedos de América, África y Asia. Su distribución abarca desde altitudes bajas hasta los 2800 metros y es más frecuente durante las temporadas de lluvias.
  `,
},
{
  id: 23,
  name: "Entoloma rhodopolium",
  image: "/mushrooms/entoloma.jpg",
  description: `
    <strong>Nombre común:</strong> Entoloma rosa grisáceo<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Entolomataceae</em><br/>
    Género: <em>Entoloma</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Hongo basidiomiceto venenoso que crece en bosques de hojas caducas durante el verano y otoño. Posee un sombrero de color gris a canela, de forma convexa a umbonada, que puede alcanzar hasta 20 cm de ancho. Sus láminas son de color claro al principio, volviéndose rosadas con el depósito de esporas. El tallo es blanquecino y la carne firme. La especie es conocida por causar síntomas gastrointestinales y contiene muscarina, un componente tóxico.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Hasta 20 centímetros de ancho en algunas descripciones, aunque otras fuentes indican que es más bien un hongo de tamaño medio, con un sombrero de hasta 10 cm. El tallo puede alcanzar hasta 13 centímetros de largo y 2 centímetros de grosor.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Árboles y lugares húmedos.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Se encuentra en bosques de hoja caduca, especialmente en lugares con abundantes hojas secas.
  `,
},
{
  id: 24,
  name: "Agrocybe pediades",
  image: "/mushrooms/pediades.jpg",
  description: `
    <strong>Nombre común:</strong> Hongo gorra de campo<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Strophariaceae</em><br/>
    Género: <em>Agrocybe</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Es un hongo pequeño que se caracteriza por su color crema a amarillo ocreo, que se aplana con la edad y puede volverse pegajoso con la humedad. Su pie es delgado, sin anillo, con rastros de un velo parcial.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Sombrero pequeño que mide entre 1-3 cm de diámetro.<br/><br/>

    <strong>Sustrato:</strong><br/>
    No requiere un sustrato específico para su crecimiento, ya que se alimenta de material orgánico en descomposición.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Este hongo crece en pastizales, céspedes, jardines y otros lugares herbáceos, a menudo sobre suelos ricos o fertilizados con estiércol. Se encuentra distribuido en diferentes partes del mundo, incluyendo Norteamérica y Europa.
  `,
},
{
  id: 25,
  name: "Panaeolus papilionaceus",
  image: "/mushrooms/panaeolo.jpg",
  description: `
    <strong>Nombre común:</strong> Panaeolo mariposa<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Agaricales</em><br/>
    Familia: <em>Panaeolus</em><br/>
    Género: <em>Panaeolus</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Este hongo se caracteriza por tener forma de campana, un color grisáceo a marrón claro, a veces con tonos más oscuros en el centro. Láminas estrechas y numerosas.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    El sombrero generalmente mide entre 2 a 5 cm de diámetro.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece específicamente en estiércol de vacas y caballos.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Este hongo se encuentra en pastizales. Su distribución es cosmopolita, abarcando climas cálidos en varias regiones del mundo, incluyendo Norteamérica, el Caribe, Sudamérica (Chile, Colombia, Uruguay), Europa, África, Asia (China, Irán, Filipinas) y Oceanía.
  `,
},
{
  id: 26,
  name: "Auricularia nigricans",
  image: "/mushrooms/nigricans.jpg",
  description: `
    <strong>Nombre común:</strong> Oreja de viejita<br/><br/>

    <strong>Taxonomía:</strong><br/>
    Reino: <em>Fungi</em><br/>
    Filo: <em>Basidiomycota</em><br/>
    Clase: <em>Agaricomycetes</em><br/>
    Orden: <em>Auriculariales</em><br/>
    Familia: <em>Auriculariaceae</em><br/>
    Género: <em>Auricularia</em><br/><br/>

    <strong>Diagnóstico:</strong><br/>
    Este hongo se caracteriza por tener una forma auriculada con una coloración gris ceniza a marrón amarillento con una textura vellosa en la parte superior y lisa en la parte inferior.<br/><br/>

    <strong>Dimensiones:</strong><br/>
    Puede alcanzar entre los 2-8 cm de diámetro, aunque puede ser mayor en condiciones favorables.<br/><br/>

    <strong>Sustrato:</strong><br/>
    Crece en madera muerta de árboles de hoja ancha.<br/><br/>

    <strong>Hábitat y distribución:</strong><br/>
    Este hongo se encuentra en diversas regiones templadas y tropicales del mundo, incluyendo América del Sur (como Argentina), América del Norte (Sur de EE.UU. y el Caribe) y Asia.
  `,
},
];
/* Tarjeta individual de hongo */
interface Mushroom {
  id: number;
  name: string;
  image: string | string[];
  description: string;
}

function MushroomCard({
  mushroom,
  onSelect,
}: {
  mushroom: Mushroom;
  onSelect: (m: Mushroom) => void;
}) {
  const gallery = Array.isArray(mushroom.image)
    ? mushroom.image
    : [mushroom.image];

  const [idx, setIdx] = useState(0);
  const total = gallery.length;

  const nextImg = () => setIdx((idx + 1) % total);

  return (
    <div
      onClick={() => onSelect(mushroom)}
      className="relative cursor-pointer transition-transform hover:scale-105"
    >
      {/* Imagen visible */}
      <Image
        src={gallery[idx]}
        alt={mushroom.name}
        width={600}
        height={400}
        className="h-60 w-full rounded-xl object-cover shadow-lg"
      />

      {/* Botón verde si hay varias fotos */}
      {total > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImg();
          }}
          className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white text-xl shadow-xl hover:bg-green-700 transition"
        >
          ↻
        </button>
      )}

      <h3 className="mt-3 text-center text-xl font-semibold">
        {mushroom.name}
      </h3>
    </div>
  );
}

export default function MushroomGrid() {
  const [selected, setSelected] = useState<Mushroom | null>(null);

  return (
    <div className="p-6">
      <h2 className="mb-6 text-center text-3xl font-bold">Menú de Hongos 🍄</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {mushrooms.map((m) => (
          <MushroomCard key={m.id} mushroom={m} onSelect={setSelected} />
        ))}
      </div>

      {selected && (
        <MushroomModal mushroom={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}