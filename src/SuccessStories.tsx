// components/stories/SuccessStories.tsx
import React from "react";
import { navigate } from "gatsby";
import Button from "./components/shared/Button";
import { motion, useReducedMotion } from "framer-motion";

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

  return (
    <motion.section
      className={`w-full min-h-screen py-10 md:py-14 bg-light ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-6xl font-light tracking-tight text-primary mb-8 md:mb-12"
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Grid de historias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                <div className="w-full aspect-[4/3] overflow-hidden bg-white/60">
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

        {/* CTA inferior */}
        <motion.div
          className="flex justify-center mt-10 md:mt-12"
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
              onClick={() => navigate("/historias")}
            >
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
