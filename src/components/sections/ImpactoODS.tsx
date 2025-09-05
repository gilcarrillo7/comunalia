// ImpactoODS.tsx
import React, { useMemo, useState } from "react";
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

  const pairs = useMemo(() => {
    const res: string[][] = [];
    for (let i = 0; i < items.length; i += 2) res.push(items.slice(i, i + 2));
    return res;
  }, []);

  const desktopCols = pairs.slice(0, 4);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIdx((i) => Math.min(i + 1, pairs.length - 1)),
    onSwipedRight: () => setIdx((i) => Math.max(i - 1, 0)),
    trackMouse: true,
  });

  const gridV = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="min-h-screen bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Encabezado */}
        <motion.h2
          className="text-2xl md:text-3xl font-normal leading-tight"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Nuestro impacto en el desarrollo sostenible
        </motion.h2>

        <motion.p
          className="mt-3 text-white/90 md:max-w-3xl text-lg md:text-xl font-light"
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
              {pairs.map((col, ci) => (
                <div
                  key={`slide-${ci}`}
                  className="shrink-0 w-full px-2"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Columna ${ci + 1}`}
                >
                  <motion.div
                    className="flex flex-col items-center gap-8 py-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: idx === ci ? 1 : 0.65, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {col.map((src, si) => (
                      <motion.div
                        className="text-center"
                        key={`img-wrap-${ci}-${si}`}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{
                          opacity: idx === ci ? 1 : 0.85,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                          delay: si * 0.05,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.img
                          key={`mob-img-${ci}-${si}`}
                          src={src}
                          alt={`ODS ${ci * 2 + si + 1}`}
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
            {idx < pairs.length - 1 && (
              <button
                className="absolute -right-2 top-1/2 -translate-y-1/2 p-2 text-white/90"
                onClick={() => setIdx((i) => Math.min(i + 1, pairs.length - 1))}
              >
                <ChevronRight size={40} />
              </button>
            )}
            {idx > 0 && (
              <button
                className="absolute -left-2 top-1/2 -translate-y-1/2 p-2 text-white/90"
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
