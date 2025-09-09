// components/stories/StoryDetail.tsx
import React from "react";
import { motion } from "framer-motion";
import VectorFooter from "../../images/vectorFooter.png";

type StoryDetailProps = {
  /** Ej: "circulos-de-dar" (sin / inicial) */
  slug: string;
  /** Título visible */
  titulo: string;
  /** URL de la imagen del header */
  imagen: string;
  /** HTML del contenido (párrafos, enlaces, etc.) */
  content: string;
  /** Clase opcional para ajustes locales */
  className?: string;
};

export default function StoryDetail({
  slug,
  titulo,
  imagen,
  content,
  className = "",
}: StoryDetailProps) {
  return (
    <section className={`w-full min-h-screen bg-white ${className}`}>
      {/* Header / Hero */}
      <div className="relative">
        {/* Franja superior de color */}
        <div className="h-24 md:h-40 bg-primary" />
        <div className="flex h-40 md:h-96">
          <div className="w-1/2 bg-secondary flex items-center justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-normal tracking-tight text-white">
              {titulo}
            </h1>
          </div>
          <div className="relative w-1/2 overflow-hidden ">
            <img
              src={imagen}
              alt={titulo}
              className="object-cover z-0"
              loading="eager"
            />
            <div className="">
              <img src={VectorFooter} className="h-12 md:h-40 z-10 absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="container"
      >
        <div className="gap-8 py-12 md:py-24 px-4 md:pl-0 md:pr-40">
          <article
            className="prose prose-sm md:prose-base max-w-none text-justify lg:col-span-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* CTAs inferiores */}
        <div className="flex flex-col gap-6 pb-10">
          <a
            href={`/${slug}/siguiente`}
            className="text-xl md:text-3xl text-primary font-semibold hover:opacity-80 transition-opacity"
          >
            Siguiente historia
          </a>
          <a
            href="/historias"
            className="text-lg md:text-xl text-primary hover:opacity-80 transition-opacity"
          >
            Ver todas
          </a>
        </div>
      </motion.div>
    </section>
  );
}
