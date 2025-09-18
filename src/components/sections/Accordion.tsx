// components/ui/Accordion.tsx
import React, { useId, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  title: string;
  content: React.ReactNode; // accepts text, HTML, or components
};

type Props = {
  title: string;
  items: AccordionItem[];
  defaultOpenIndex?: number;
};

export default function Accordion({
  title,
  items,
  defaultOpenIndex = 0,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);
  const groupId = useId();

  const toggle = (idx: number) =>
    setOpenIndex((cur) => (cur === idx ? -1 : idx));

  return (
    <section className="min-h-screen bg-light px-4 flex justify-center items-center pt-24 pb-16 md:py-44">
      <div className="container flex flex-col md:max-w-3xl">
        {/* Animated page title (only this uses Framer Motion) */}
        <motion.h2
          className="text-2xl md:text-3xl font-light tracking-tight text-primary mb-6 md:mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          {title}
        </motion.h2>

        <div className="divide-y divide-primary/30 border-y border-primary/30">
          {items.map((it, idx) => {
            const isOpen = idx === openIndex;
            const contentId = `${groupId}-panel-${idx}`;
            const buttonId = `${groupId}-button-${idx}`;
            return (
              <div key={idx}>
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 py-3 md:py-4 text-left text-primary hover:text-secondary"
                >
                  <span className="text-base md:text-lg">
                    {it.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    } text-primary`}
                    aria-hidden
                  />
                </button>

                {/* Content: pure CSS transition (no framer-motion) */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`pb-4 grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden text-sm md:text-base text-primary/90">
                    {typeof it.content === "string" ? (
                      <p className="leading-relaxed">{it.content}</p>
                    ) : (
                      it.content
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
