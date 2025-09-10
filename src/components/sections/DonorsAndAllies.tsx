// components/partners/DonorsAndAllies.tsx
import React from "react";
import Button from "../shared/Button";
import { navigate } from "gatsby";
import { motion, useReducedMotion } from "framer-motion";

type DonorsAndAlliesProps = {
  title: string;
  images: string[]; // arreglo de logos
  ctaText: string; // texto del botón
  ctaHref: string; // link del botón
  bottomText?: React.ReactNode;
  bottomTextHiglight?: React.ReactNode;
  className?: string;
};

export default function DonorsAndAllies({
  title,
  images,
  ctaText,
  ctaHref,
  bottomText,
  bottomTextHiglight,
  className = "",
}: DonorsAndAlliesProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className={`w-full min-h-screen flex items-center py-8 ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight text-primary mb-8 md:mb-10"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Grid de logos */}
        <div
          className="flex flex-wrap justify-center items-center gap-2 md:gap-6 w-full mx-auto"
          aria-label="Lista de donantes y aliados"
        >
          {images.map((img, i) => (
            <motion.div
              key={`${img}-${i}`}
              className="
                basis-[30%]
                sm:basis-[25%]
                md:basis-[20%]
                lg:basis-[15%]
                xl:basis-[13%]
                flex items-center justify-center
              "
              initial={{
                opacity: 0,
                y: reduce ? 0 : 16,
                scale: reduce ? 1 : 0.96,
              }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={reduce ? {} : { scale: 1.03 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
            >
              <div className="w-3/4">
                <img
                  src={img}
                  alt="Logo"
                  loading="lazy"
                  className="block w-auto h-auto transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto inferior */}
        {bottomText && (
          <motion.p
            className="w-full mx-auto text-center text-lg md:text-xl font-light text-primary mt-10 md:mt-12 leading-relaxed"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {bottomText}
            <br className="md:hidden" />{" "}
            {bottomTextHiglight && <span className="font-semibold">{bottomTextHiglight}</span>}
          </motion.p>
        )}

        {/* Botón */}
        <motion.div
          className="flex justify-center mt-6 md:mt-8"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={reduce ? {} : { scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button variant="primary" onClick={() => navigate(ctaHref)}>
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
