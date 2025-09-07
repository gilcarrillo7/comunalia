// components/blocks/Board.tsx
import React from "react";
import { motion } from "framer-motion";

export type BoardMember = {
  image: string;
  name: string;
  role: string;
  imageAlt?: string;
};

type BoardProps = {
  title: string;
  members: BoardMember[];
  className?: string;
};

export default function Board({ title, members, className = "" }: BoardProps) {
  const isOdd = members.length % 2 === 1;

  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="container py-10 md:py-14">
        <h2 className="text-center md:text-left text-4xl md:text-5xl font-medium tracking-tight text-primary mb-8 md:mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
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
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45, ease: "easeOut" },
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-neutral-200">
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

                <div className="mt-3">
                  <p className="text-primary font-medium leading-tight">
                    {m.name}
                  </p>
                  <p className="text-sm text-primary font-normal mt-1">
                    {m.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
