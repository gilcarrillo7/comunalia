// components/blocks/MissionVision.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import OpeningLeaves from "../shared/OpeningLeaves";
import { COLORS } from "../../constants";

type MissionVisionProps = {
  missionTitle: string;
  missionDescription: string;
  visionTitle: string;
  visionDescription: string;
  missionImage: string;
  missionImageAlt?: string;
  visionImage: string;
  visionImageAlt?: string;
  Emblem?: React.ComponentType<{ className?: string }>;
  className?: string;
};

function DefaultEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <circle cx="60" cy="36" r="18" fill="white" />
      <path
        d="M60 60c22 0 32 16 32 28-12 0-22-6-32-18-10 12-20 18-32 18 0-12 10-28 32-28z"
        fill="#7C0A0F"
      />
      <path
        d="M60 60c-16 0-26 8-30 18-8-2-14-8-16-16 10-10 26-12 46-2z"
        fill="#FDC13A"
      />
      <path
        d="M60 60c16 0 26 8 30 18 8-2 14-8 16-16-10-10-26-12-46-2z"
        fill="#FF6B1A"
      />
    </svg>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function MissionVision({
  missionTitle,
  missionDescription,
  visionTitle,
  visionDescription,
  missionImage,
  missionImageAlt = "Misión",
  visionImage,
  visionImageAlt = "Visión",
  Emblem = DefaultEmblem,
  className = "",
}: MissionVisionProps) {
  return (
    <section
      className={`w-full bg-light overflow-hidden ${className}`}
      aria-label="Misión y Visión"
    >
      {/* STACK en mobile, 2 columnas en desktop */}
      <div className="flex flex-col md:flex-row">
        {/* IZQUIERDA (2/3): arriba (imagen+texto) y abajo (visión) */}
        <div className="w-full md:basis-2/3 md:flex md:flex-col">
          {/* fila superior: imagen misión (mitad) + texto misión (mitad) */}
          <div className="flex md:h-[400px]">
            <motion.figure
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="basis-1/2 md:shrink-0"
            >
              <img
                src={missionImage}
                alt={missionImageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.figure>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="basis-1/2 md:shrink-0 bg-white text-primary flex items-center justify-center"
            >
              <div className="p-4 md:w-[250px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
                  {missionTitle}
                </h2>
                <p className="mt-3 text-base md:text-lg lg:text-xl font-light leading-relaxed">
                  {missionDescription}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-tertiary px-4 py-8 md:py-0 text-primary md:h-[400px] flex items-center justify-center"
          >
            <div className="">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                {visionTitle}
              </h3>
              <p className="mt-3 text-base font-light md:text-lg lg:text-xl leading-relaxed max-w-prose">
                {visionDescription}
              </p>
            </div>
          </motion.div>
        </div>

        {/* DERECHA (1/3): emblema arriba, imagen visión abajo */}
        <div className="w-full md:basis-1/3 flex md:flex-col">
          <div className="relative flex flex-col basis-1/2 md:h-[400px] items-center justify-center bg-secondary py-6">
            <div className="bg-white h-[120px] w-[120px] rounded-full " />
            <OpeningLeaves
              position="relative"
              flipY
              leftColor={COLORS.tertiary}
              rightColor={COLORS.primary}
              top={-135}
              left={40}
              scale={0.8}
              spread={65}
              tilt={0}
              duration={0.9}
              delay={0.1}
              open
            />
          </div>

          <motion.figure
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full basis-1/2 md:flex-1"
          >
            <img
              src={visionImage}
              alt={visionImageAlt}
              className="h-full w-full object-cover md:h-[400px]"
              loading="lazy"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
