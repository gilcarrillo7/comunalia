import React, { useMemo, useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import Button from "./shared/Button";
import Textura from "../images/textura1.svg";

type Item = { value: string; lines: string[] };

const DATA: Item[] = [
  { value: "16", lines: ["estados", "impactados"] },
  { value: "+1,100,000", lines: ["beneficiarios"] },
  {
    value: "+$700,000,000",
    lines: ["otorgados a organizaciones", "de la sociedad civil"],
  },
];

type Props = {
  items?: Item[];
  ctaHref?: string;
  ctaText?: string;
};

/* ======================= CountUp con Framer Motion ======================= */
function CountUpFM({
  value,
  className = "",
  duration = 1.1, // animación sutil
  delay = 0,
}: {
  value: string;
  className?: string;
  duration?: number;
  delay?: number;
}) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(spanRef, { amount: 0.35, once: true });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState<string>(value); // SSR fallback

  // prefijo/sufijo y número objetivo (soporta +, $, comas)
  const { prefix, target, suffix } = useMemo(() => {
    const m = value.match(/^([^0-9]*)([0-9][0-9,]*)([^0-9]*)$/);
    const numStr = m?.[2] ?? "0";
    const n = parseInt(numStr.replace(/,/g, ""), 10) || 0;
    return { prefix: m?.[1] ?? "", target: n, suffix: m?.[3] ?? "" };
  }, [value]);

  const format = (n: number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    if (!spanRef.current) return;

    // respetar reduce motion
    if (prefersReduced) {
      setDisplay(`${prefix}${format(target)}${suffix}`);
      return;
    }

    if (inView) {
      // cuenta sutil con easing
      const controls = animate(0, target, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (v) =>
          setDisplay(`${prefix}${format(Math.round(v))}${suffix}`),
      });
      return () => controls.stop();
    }
  }, [inView, prefersReduced, prefix, suffix, target, duration, delay]);

  return (
    <span
      ref={spanRef}
      className={className}
      aria-label={`${prefix}${target}${suffix}`}
    >
      {display}
    </span>
  );
}

export default function ImpactoResumen({
  items = DATA,
  ctaText = "Consulta todos los resultados",
}: Props) {
  const [idx, setIdx] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIdx((i) => Math.min(i + 1, items.length - 1)),
    onSwipedRight: () => setIdx((i) => Math.max(i - 1, 0)),
    trackMouse: true,
  });

  const labelActual = useMemo(() => {
    const it = items[idx];
    return `${it.value} ${it.lines.join(" ")}`;
  }, [idx, items]);

  return (
    <section className="relative">
      <div className="relative bg-tertiary text-primary overflow-hidden">
        {/* Textura de fondo */}
        <img
          src={Textura}
          className="absolute bottom-0 right-0 w-full pointer-events-none select-none"
          alt=""
        />

        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <motion.h2
            className="text-xl md:text-2xl font-normal text-center md:text-left"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Conoce el impacto de las Fundaciones Comunitarias en México:
          </motion.h2>

          {/* DESKTOP */}
          <div className="mt-8 hidden md:flex gap-8 justify-around">
            {items.map((it, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: i * 0.06,
                }}
              >
                {i !== 0 && (
                  <span
                    aria-hidden
                    className="absolute -left-8 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-primary/60 md:block"
                  />
                )}
                <div className="leading-none tracking-tight">
                  <CountUpFM
                    value={it.value}
                    duration={1.0}
                    delay={i * 0.05}
                    className="text-5xl lg:text-6xl font-extrabold"
                  />
                </div>
                <div className="mt-2 text-lg md:text-xl leading-snug font-normal">
                  {it.lines.map((ln, j) => (
                    <div key={j}>{ln}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* MÓVIL: carrusel 1/slide */}
          <div className="mt-8 md:hidden" {...handlers}>
            <div
              className="relative overflow-hidden"
              aria-roledescription="carousel"
              aria-label="Resumen de impacto"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${idx * 100}%)` }}
              >
                {items.map((it, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-full px-2"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={i === idx ? labelActual : `${it.value}`}
                  >
                    <motion.div
                      className="py-10 flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="leading-none tracking-tight">
                        <CountUpFM
                          value={it.value}
                          duration={0.9}
                          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold"
                        />
                      </div>
                      <div className="mt-3 text-xl sm:text-2xl font-semibold">
                        {it.lines.map((ln, j) => (
                          <div key={j}>{ln}</div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Flechas */}
              {idx > 0 && (
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-[#78040A]/80"
                  onClick={() => setIdx((i) => Math.max(i - 1, 0))}
                  aria-label="Anterior"
                >
                  <ChevronLeft size={44} />
                </button>
              )}
              {idx < items.length - 1 && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#78040A]/80"
                  onClick={() =>
                    setIdx((i) => Math.min(i + 1, items.length - 1))
                  }
                  aria-label="Siguiente"
                >
                  <ChevronRight size={44} />
                </button>
              )}
            </div>
          </div>

          <motion.div
            className="mt-8 flex justify-center md:mt-12"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            <Button variant="primary">{ctaText}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
