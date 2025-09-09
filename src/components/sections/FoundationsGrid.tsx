// components/foundations/FoundationsGrid.tsx
import React from "react";
import { motion } from "framer-motion";

export type FoundationItem = {
  image?: string; // ruta o URL del logo
  title: string; // título
  description: string; // descripción breve
  href: string; // enlace externo
  imageAlt?: string; // opcional: alt del logo
};

type Props = {
  items: FoundationItem[];
  className?: string;
};

/** Variantes de animación (suaves) */
const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export default function FoundationsGrid({ items, className = "" }: Props) {
  return (
    <section className={`w-full py-12 md:py-24 ${className}`}>
      <motion.div
        className="container grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-14"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((it, idx) => (
          <motion.a
            key={`${it.title}-${idx}`}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 140, damping: 18 },
              },
            }}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="flex items-center justify-between gap-6"
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Bloque de texto con acento a la izquierda */}
            <div className="w-2/3">
              <div className="pl-4 border-l-4 border-primary">
                <h3 className="text-primary text-sm md:text-lg font-medium leading-tight">
                  {it.title}
                </h3>
                <p className="mt-2 text-xs md:text-[15px] leading-relaxed text-primary/80">
                  {it.description}
                </p>
                <motion.a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-medium underline underline-offset-4 text-primary hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/30 rounded"
                  whileHover={{ x: 2 }}
                  whileTap={{ x: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {it.href}
                </motion.a>
              </div>
            </div>

            {/* Logo a la derecha (oculto en móvil) */}
            {it.image && (
              <motion.div
                className="w-1/3"
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.35, ease: "easeOut" },
                  },
                }}
              >
                <img
                  src={it.image}
                  alt={it.imageAlt || it.title}
                  className="w-36 xl:w-40 h-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            )}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
