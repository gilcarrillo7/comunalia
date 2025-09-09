// components/blocks/Team.tsx
import React from "react";
import { motion } from "framer-motion";
import Textura from "../../images/textura1.svg";

export type TeamMember = {
  image: string;
  name: string;
  imageAlt?: string;
};

type TeamProps = {
  title: string;
  members: TeamMember[];
  className?: string;
};

export default function Team({ title, members, className = "" }: TeamProps) {
  const isOdd = members.length % 2 === 1;

  return (
    <section
      className={`relative overflow-hidden w-full bg-secondary ${className}`}
    >
      <div className="container py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
        <h2 className="text-center md:text-left text-white text-4xl md:text-5xl font-medium tracking-tight mb-8 md:mb-12">
          {title}
        </h2>

        <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
          {members.map((m, idx) => {
            const isLast = idx === members.length - 1;
            const mobileCenterLast =
              isOdd && isLast
                ? "col-span-2 place-self-center md:col-span-1"
                : "";

            return (
              <motion.div
                key={`${m.name}-${idx}`}
                className={`flex flex-col items-center text-center ${mobileCenterLast}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-white/30 shadow-sm">
                  <motion.img
                    src={m.image}
                    alt={m.imageAlt ?? m.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1.02, opacity: 0 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.05,
                      },
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  />
                </div>

                <p className="mt-3 text-white/95 font-light leading-tight">
                  {m.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <img src={Textura} className="absolute bottom-0 right-0 w-full" alt="" />
    </section>
  );
}
