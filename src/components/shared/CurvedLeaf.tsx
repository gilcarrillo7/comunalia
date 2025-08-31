// components/decor/CurvedLeaf.tsx
import React from "react";
import { motion, type MotionStyle } from "framer-motion";

/** Breakpoints Tailwind por defecto */
type BP = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
type Responsive<T> = T | Partial<Record<BP, T>>;

type CurvedLeafProps = {
  /** Tamaño base del path: 128x131 (puedes sobrescribirlo) */
  width?: Responsive<number>;
  height?: Responsive<number>;
  /** Escala visual (se compone con flip) */
  scale?: Responsive<number>;
  /** Color: clase Tailwind (bg-*) o valor CSS (#fff, rgb(...)) */
  color?: Responsive<string>;
  /** Posición absoluta dentro de un contenedor relative */
  top?: Responsive<number | string>;
  left?: Responsive<number | string>;
  right?: Responsive<number | string>;
  bottom?: Responsive<number | string>;
  z?: Responsive<number>;
  /** Transformaciones */
  flipX?: Responsive<boolean>;
  flipY?: Responsive<boolean>;
  rotate?: Responsive<number>; // grados
  transformOrigin?: Responsive<string>; // p.ej. "bottom right"
  /** Animación de “flotar” */
  animateFloat?: Responsive<boolean>;
  floatDistance?: Responsive<number>; // px
  duration?: Responsive<number>; // seg
  /** Clases extra */
  className?: string;
};

const PATH =
  'path("M0.19281 130.363V126.994C0.19281 56.862 57.4109 0 128 0V3.36907C128 73.5013 70.774 130.363 0.19281 130.363Z")';

const DEFAULTS = {
  width: 128,
  height: 131,
  scale: 1,
  color: "white",
  rotate: 0,
  transformOrigin: "bottom right",
  animateFloat: false,
  floatDistance: 6,
  duration: 2.4,
  z: 1,
} as const;

const ORDER: BP[] = ["2xl", "xl", "lg", "md", "sm", "base"];

/** Detecta el breakpoint de Tailwind actual en cliente */
function useTailwindBreakpoint(): BP {
  const [bp, setBp] = React.useState<BP>("base");

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const queries: { bp: BP; mq: MediaQueryList }[] = [
      { bp: "2xl", mq: window.matchMedia("(min-width: 1536px)") },
      { bp: "xl", mq: window.matchMedia("(min-width: 1280px)") },
      { bp: "lg", mq: window.matchMedia("(min-width: 1024px)") },
      { bp: "md", mq: window.matchMedia("(min-width: 768px)") },
      { bp: "sm", mq: window.matchMedia("(min-width: 640px)") },
    ];

    const update = () => {
      const hit = queries.find((q) => q.mq.matches);
      setBp(hit?.bp ?? "base");
    };

    update();

    // Compatibilidad addEventListener / addListener
    queries.forEach(({ mq }) => {
      if ("addEventListener" in mq) {
        mq.addEventListener("change", update);
      } else {
        // @ts-ignore legacy
        mq.addListener(update);
      }
    });

    return () => {
      queries.forEach(({ mq }) => {
        if ("removeEventListener" in mq) {
          mq.removeEventListener("change", update);
        } else {
          // @ts-ignore legacy
          mq.removeListener(update);
        }
      });
    };
  }, []);

  return bp;
}

/** Resuelve un prop responsive según el BP actual con fallback razonable */
function resolve<T>(value: Responsive<T> | undefined, bp: BP, fallback: T): T {
  if (value === undefined) return fallback;
  if (typeof value !== "object" || value === null) return value as T;

  // Si es objeto responsive, buscamos el valor más cercano:
  const idx = ORDER.indexOf(bp);
  for (let i = idx; i < ORDER.length; i++) {
    const key = ORDER[i];
    if (key in value && (value as any)[key] !== undefined) {
      return (value as any)[key] as T;
    }
  }
  // fallback final
  return (value as any).base ?? fallback;
}

export default function CurvedLeaf(props: CurvedLeafProps) {
  const bp = useTailwindBreakpoint();

  const width = resolve(props.width, bp, DEFAULTS.width);
  const height = resolve(props.height, bp, DEFAULTS.height);
  const scale = resolve(props.scale, bp, DEFAULTS.scale);
  const color = resolve(props.color, bp, DEFAULTS.color);

  const top = resolve(props.top, bp, undefined as any);
  const left = resolve(props.left, bp, undefined as any);
  const right = resolve(props.right, bp, undefined as any);
  const bottom = resolve(props.bottom, bp, undefined as any);
  const z = resolve(props.z, bp, DEFAULTS.z);

  const flipX = resolve(props.flipX, bp, false);
  const flipY = resolve(props.flipY, bp, false);
  const rotate = resolve(props.rotate, bp, DEFAULTS.rotate);
  const origin = resolve(props.transformOrigin, bp, DEFAULTS.transformOrigin);

  const animateFloat = resolve(props.animateFloat, bp, DEFAULTS.animateFloat);
  const floatDistance = resolve(
    props.floatDistance,
    bp,
    DEFAULTS.floatDistance
  );
  const duration = resolve(props.duration, bp, DEFAULTS.duration);

  const sx = (flipX ? -1 : 1) * scale;
  const sy = (flipY ? -1 : 1) * scale;

  const baseStyle: MotionStyle = {
    position: "absolute",
    width,
    height,
    top,
    left,
    right,
    bottom,
    zIndex: z,
    WebkitClipPath: PATH,
    clipPath: PATH,
    transformOrigin: origin,
    // transforms como motion styles para que compongan con animate
    scaleX: sx,
    scaleY: sy,
    rotate,
    // color si viene como HEX/RGB/etc
    background:
      typeof color === "string" && color.startsWith("bg-")
        ? undefined
        : (color as string),
  };

  const colorClass =
    typeof color === "string" && color.startsWith("bg-") ? color : "";

  const floatProps = animateFloat
    ? {
        animate: { y: [0, -floatDistance, 0] },
        transition: { duration, repeat: Infinity, ease: "easeInOut" },
      }
    : {};

  return (
    <motion.div
      {...floatProps}
      className={`absolute ${colorClass} ${props.className ?? ""}`}
      style={baseStyle}
      aria-hidden
    />
  );
}
