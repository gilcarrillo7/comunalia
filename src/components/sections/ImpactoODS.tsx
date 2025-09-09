// ImpactoODS.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../shared/Button";

const items: string[] = [
  "impacto/item1.png",
  "impacto/item2.png",
  "impacto/item3.png",
  "impacto/item4.png",
  "impacto/item5.png",
  "impacto/item6.png",
  "impacto/item7.png",
  "impacto/item8.png",
];

export default function ImpactoODS() {
  const [idx, setIdx] = useState(0);

  // Desktop: grupos de 2 (para 2 imágenes por columna)
  const pairs = useMemo(() => {
    const res: string[][] = [];
    for (let i = 0; i < items.length; i += 2) res.push(items.slice(i, i + 2));
    return res;
  }, []);

  // Mobile: grupos de 4 (para 2x2 por slide)
  const mobQuads = useMemo(() => {
    const res: string[][] = [];
    for (let i = 0; i < items.length; i += 4) res.push(items.slice(i, i + 4));
    return res;
  }, []);

  const desktopCols = pairs.slice(0, 4);

  // Asegura que idx nunca exceda el total de slides móviles
  useEffect(() => {
    if (idx > mobQuads.length - 1) setIdx(Math.max(mobQuads.length - 1, 0));
  }, [mobQuads.length, idx]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIdx((i) => Math.min(i + 1, mobQuads.length - 1)),
    onSwipedRight: () => setIdx((i) => Math.max(i - 1, 0)),
    trackMouse: true,
  });

  const gridV = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="min-h-screen bg-primary text-white flex items-center">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Encabezado */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Nuestro impacto en el desarrollo sostenible
        </motion.h2>

        <motion.p
          className="mt-3 text-white/90 md:max-w-4xl text-lg sm:text-xl md:text-2xl font-light"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          Fomentamos la alineación con los ODS en la agenda local, fortaleciendo
          el conocimiento y capacidades de las fundaciones comunitarias.
        </motion.p>

        {/* DESKTOP: 4 columnas (2 imágenes por columna) con stagger */}
        <motion.div
          className="hidden md:grid grid-cols-4 gap-8 mt-12"
          variants={gridV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {desktopCols.map((col, ci) => (
            <motion.div
              key={`col-${ci}`}
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {col.map((src, si) => (
                <motion.div
                  className="text-center"
                  key={`img-wrap-${ci}-${si}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.img
                    src={src}
                    alt={`ODS ${ci * 2 + si + 1}`}
                    loading="lazy"
                    className="mx-auto"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE: carrusel con 4 elementos por slide (grid 2x2) */}
        <div className="md:hidden mt-10" {...handlers}>
          <div
            className="relative overflow-hidden"
            aria-roledescription="carousel"
            aria-label="Impacto ODS carrusel"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {mobQuads.map((quad, qi) => (
                <div
                  key={`slide-${qi}`}
                  className="shrink-0 w-full px-2"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${qi + 1}`}
                >
                  <motion.div
                    className="grid grid-cols-2 gap-6 py-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: idx === qi ? 1 : 0.65, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {quad.map((src, si) => (
                      <motion.div
                        className="text-center"
                        key={`mob-wrap-${qi}-${si}`}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{
                          opacity: idx === qi ? 1 : 0.85,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                          delay: (si % 2) * 0.05,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.img
                          src={src}
                          alt={`ODS ${qi * 4 + si + 1}`}
                          className="mx-auto"
                          loading="lazy"
                          draggable={false}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Flechas */}
            {idx < mobQuads.length - 1 && (
              <button
                className="absolute -right-5 top-1/2 -translate-y-1/2 p-2 text-white/90"
                onClick={() =>
                  setIdx((i) => Math.min(i + 1, mobQuads.length - 1))
                }
              >
                <ChevronRight size={40} />
              </button>
            )}
            {idx > 0 && (
              <button
                className="absolute -left-5 top-1/2 -translate-y-1/2 p-2 text-white/90"
                onClick={() => setIdx((i) => Math.max(i - 1, 0))}
              >
                <ChevronLeft size={40} />
              </button>
            )}
          </div>
        </div>

        <motion.div
          className="mt-12 md:mt-16 flex justify-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Button variant="outline">Informe voluntario</Button>
        </motion.div>
      </div>
    </section>
  );
}
