import React from "react";
import { motion } from "framer-motion";
import OpeningLeaves from "../shared/OpeningLeaves";
import { COLORS } from "../../constants";

type ValuesProps = {
  title: string;
  values: string[];
  className?: string;
};

function LeafOdd({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 25V24.3028C24 17.8649 21.4666 11.6885 16.97 7.12963C12.468 2.56536 6.36307 0 0 0V0.697168C0 7.14052 2.52801 13.317 7.02465 17.8758C11.5267 22.4346 17.6316 25 24 25Z"
        fill="#78040A"
      />
    </svg>
  );
}
function LeafEven({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 0L24.8028 0C18.3649 0 12.1885 2.53339 7.62963 7.03003C3.06536 11.532 0.5 17.6369 0.5 24L1.19717 24C7.64052 24 13.817 21.472 18.3758 16.9753C22.9346 12.4733 25.5 6.36844 25.5 0Z"
        fill="#FDB713"
      />
    </svg>
  );
}

export default function Values({ title, values, className = "" }: ValuesProps) {
  // izquierda: 0,2,4...  / derecha: 1,3,5...
  const left = values.filter((_, i) => i % 2 === 0);
  const right = values.filter((_, i) => i % 2 === 1);
  // => un valor por fila (dos columnas)
  const rows = Math.ceil(values.length / 2);

  return (
    <section
      className={`relative min-h-screen w-full bg-light overflow-hidden pt-12 ${className}`}
      aria-label={title}
    >
      <div className="absolute z-0 left-0 top-[calc(180px-50vw)] sm:top-[calc(215px-50vw)] h-[50vw] w-[100vw] bg-primary rounded-bl-full rounded-br-full " />
      {/* Semicírculo superior */}
      <div className="relative pb-3">
        <h2 className="z-10 text-center text-white text-3xl md:text-4xl font-medium tracking-tight">
          {title}
        </h2>
        <div className="relative flex justify-center h-[105px]">
          <OpeningLeaves
            position="relative"
            flipY
            leftColor={COLORS.tertiary}
            rightColor="white"
            top={-100}
            left={38}
            scale={0.8}
            spread={65}
            tilt={0}
            duration={0.9}
            delay={0.1}
            open
          />
        </div>
      </div>

      {/* Área de valores con tallo que llega hasta el final */}
      <div className="z-10 relative container py-10 md:py-14">
        {/* Tallo vertical (ocupa toda la altura de esta sección) */}
        <div className="pointer-events-none absolute left-1/2 inset-y-0 -translate-x-1/2 w-[3px] bg-primary/80" />

        {/* Grid: 2 columnas, una fila por par de valores */}
        <div className="flex flex-col gap-y-8 md:gap-y-10">
          {Array.from({ length: rows }).map((_, r) => {
            const leftIndex = r * 2; // índice global para delays
            const rightIndex = r * 2 + 1;

            const l = left[r];
            const rr = right[r];

            return (
              <React.Fragment key={r}>
                {/* IZQUIERDA: texto -> hoja -> tallo */}
                <div className="w-1/2 relative flex items-center justify-end">
                  {l && (
                    <>
                      <motion.span
                        className="text-primary text-lg md:text-xl font-medium"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.45,
                            ease: "easeOut",
                            delay: 0.06 * leftIndex,
                          },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        {l}
                      </motion.span>

                      <motion.span
                        className="ml-3 shrink-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.35,
                            ease: "easeOut",
                            delay: 0.06 * leftIndex + 0.03,
                          },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        {(leftIndex + 1) % 2 === 1 ? <LeafOdd /> : <LeafEven />}
                      </motion.span>
                    </>
                  )}
                </div>

                {/* DERECHA: tallo -> hoja -> texto */}
                <div className="w-1/2 ml-[50%] relative flex items-center justify-start">
                  {rr && (
                    <>
                      <motion.span
                        className="mr-3 shrink-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.35,
                            ease: "easeOut",
                            delay: 0.06 * rightIndex + 0.03,
                          },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        {(rightIndex + 1) % 2 === 1 ? (
                          <LeafOdd />
                        ) : (
                          <LeafEven />
                        )}
                      </motion.span>

                      <motion.span
                        className="text-primary text-lg md:text-xl font-medium"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.45,
                            ease: "easeOut",
                            delay: 0.06 * rightIndex,
                          },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        {rr}
                      </motion.span>
                    </>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
