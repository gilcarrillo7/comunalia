// components/stories/SuccessStories.tsx
import React, { useMemo, useState, useEffect } from "react";
import { navigate } from "gatsby";
import Button from "./components/shared/Button";
import { motion, useReducedMotion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

type StoryItem = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  slug: string; // ej: "/historias/fondo-comunidades-activas"
};

type SuccessStoriesProps = {
  title: string; // "Historias de éxito"
  ctaText: string; // "Ver todas"
  items: StoryItem[];
  className?: string;
};

export default function SuccessStories({
  title,
  ctaText,
  items,
  className = "",
}: SuccessStoriesProps) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  // asegura que idx esté en rango
  useEffect(() => {
    if (idx > items.length - 1) setIdx(Math.max(items.length - 1, 0));
  }, [items.length, idx]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIdx((i) => Math.min(i + 1, items.length - 1)),
    onSwipedRight: () => setIdx((i) => Math.max(i - 1, 0)),
    trackMouse: true,
  });

  return (
    <motion.section
      className={`w-full flex items-center md:min-h-screen py-10 md:py-14 bg-light ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-8 md:mb-12 lg:mb-24"
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* MOBILE: Slider 1x1 con swipe y flechas */}
        <div className="md:hidden" {...handlers}>
          <div
            className="relative overflow-hidden"
            aria-roledescription="carousel"
            aria-label="Historias carrusel"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {items.map((it, i) => (
                <div
                  key={it.slug}
                  className="shrink-0 w-full px-8"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} de ${items.length}`}
                >
                  <motion.article
                    className="flex flex-col px-1"
                    initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                    animate={{ opacity: idx === i ? 1 : 0.6, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Imagen */}
                    <button
                      type="button"
                      onClick={() => navigate(it.slug)}
                      className="text-left"
                      aria-label={it.title}
                    >
                      <div className="w-full aspect-[4/3] overflow-hidden bg-white/60 rounded-xl">
                        <motion.img
                          src={it.image}
                          alt={it.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.02 }}
                          whileHover={reduce ? {} : { scale: 1.04 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          draggable={false}
                        />
                      </div>
                    </button>

                    {/* Contenido */}
                    <div className="mt-4">
                      <motion.h3
                        className="text-primary font-semibold"
                        initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {it.title}
                      </motion.h3>

                      <motion.p
                        className="leading-relaxed line-clamp-4 text-sm"
                        initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {it.description}
                      </motion.p>

                      {/* Link Leer */}
                      <motion.button
                        type="button"
                        onClick={() => navigate(it.slug)}
                        className="mt-5 text-primary font-normal inline-flex flex-col w-full items-center"
                        initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={reduce ? {} : { scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{it.buttonText}</span>
                        <span className="mt-1 h-[2px] w-10 bg-primary/60 rounded" />
                      </motion.button>
                    </div>
                  </motion.article>
                </div>
              ))}
            </div>

            {/* Flechas de navegación */}
            {idx > 0 && (
              <button
                className="absolute -left-5 top-1/2 -translate-y-1/2 p-2 text-primary"
                onClick={() => setIdx((i) => Math.max(i - 1, 0))}
              >
                <ChevronLeft size={44} />
              </button>
            )}
            {idx < items.length - 1 && (
              <button
                className="absolute -right-5 top-1/2 -translate-y-1/2 p-2 text-primary"
                onClick={() => setIdx((i) => Math.min(i + 1, items.length - 1))}
              >
                <ChevronRight size={44} />
              </button>
            )}
          </div>
        </div>

        {/* DESKTOP/TABLET: grid 3 columnas */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, idx) => (
            <motion.article
              key={it.slug}
              className="flex flex-col"
              initial={{ opacity: 0, y: reduce ? 0 : 20, scale: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.07,
              }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={reduce ? {} : { y: -4 }}
            >
              {/* Imagen */}
              <button
                type="button"
                onClick={() => navigate(it.slug)}
                className="text-left"
                aria-label={it.title}
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-white/60 rounded-xl">
                  <motion.img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.02 }}
                    whileHover={reduce ? {} : { scale: 1.06 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
              </button>

              {/* Contenido */}
              <div className="mt-4">
                <motion.h3
                  className="text-primary font-semibold"
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.07 + 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  {it.title}
                </motion.h3>

                <motion.p
                  className="leading-relaxed line-clamp-4 text-sm"
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.07 + 0.08,
                  }}
                  viewport={{ once: true }}
                >
                  {it.description}
                </motion.p>

                {/* Link Leer */}
                <motion.button
                  type="button"
                  onClick={() => navigate(it.slug)}
                  className="mt-5 text-primary font-normal inline-flex flex-col w-full items-center"
                  initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.07 + 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{it.buttonText}</span>
                  <span className="mt-1 h-[2px] w-10 bg-primary/60 rounded" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA inferior: oculto en móvil, visible en md+ */}
        <motion.div
          className="hidden md:flex justify-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: items.length * 0.05,
          }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={reduce ? {} : { scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant="outline-primary"
              onClick={() => {}}
            >
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
