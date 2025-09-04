// components/decor/OpeningLeaves.tsx
import React from "react";
import { motion } from "framer-motion";

type OpeningLeavesProps = {
  leftColor?: string;
  rightColor?: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  z?: number;
  className?: string;
  position?: "absolute" | "fixed" | "relative";
  scale?: number; // escala global (1 = 128x131 por hoja)
  spread?: number; // cuánto se abren hacia los lados (cada hoja)
  tilt?: number; // rotación hacia afuera (grados)
  duration?: number;
  delay?: number;
  open?: boolean;
  flipY?: boolean; // << NUEVO: voltear verticalmente (hacia arriba)
};

const LEAF_PATH =
  'path("M0.19281 130.363V126.994C0.19281 56.862 57.4109 0 128 0V3.36907C128 73.5013 70.774 130.363 0.19281 130.363Z")';

const W = 128;
const H = 131;

export default function OpeningLeaves({
  leftColor = "#FDB713",
  rightColor = "#ffffff",
  top,
  left,
  right,
  bottom,
  z = 1,
  className = "",
  scale = 1,
  spread = 46,
  tilt = 0,
  duration = 0.9,
  delay = 0,
  open = true,
  flipY = false, // << default
  position = "absolute",
}: OpeningLeavesProps) {
  const containerStyle: React.CSSProperties = {
    position,
    top,
    left,
    right,
    bottom,
    zIndex: z,
    width: W * scale * 2,
    height: H * scale,
    pointerEvents: "none",
  };

  const leftColorClass = leftColor.startsWith?.("bg-") ? leftColor : "";
  const rightColorClass = rightColor.startsWith?.("bg-") ? rightColor : "";
  const leftBg = leftColorClass ? undefined : leftColor;
  const rightBg = rightColorClass ? undefined : rightColor;

  const baseLeafStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    width: W,
    height: H,
    WebkitClipPath: LEAF_PATH,
    clipPath: LEAF_PATH,
  };

  // factor Y: si flipY => -scale (volteadas hacia arriba)
  const sy = flipY ? -scale : scale;

  return (
    <div className={`relative ${className}`} style={containerStyle} aria-hidden>
      {/* Izquierda: pivota en abajo-derecha */}
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={{
          closed: {
            x: -W * scale,
            rotate: 0,
            scaleX: scale,
            scaleY: sy,
            opacity: 0,
          },
          open: {
            x: -W * scale - spread,
            rotate: -tilt,
            scaleX: scale,
            scaleY: sy,
            opacity: 1,
          },
        }}
        transition={{ duration, delay, ease: "easeInOut" }}
        className={`absolute ${leftColorClass}`}
        style={{
          ...baseLeafStyle,
          left: "50%",
          transformOrigin: "bottom right",
          background: leftBg,
        }}
      />

      {/* Derecha: espejada en X, pivota en abajo-izquierda */}
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={{
          closed: { x: 0, rotate: 0, scaleX: -scale, scaleY: sy, opacity: 0 },
          open: {
            x: spread,
            rotate: tilt,
            scaleX: -scale,
            scaleY: sy,
            opacity: 1,
          },
        }}
        transition={{ duration, delay, ease: "easeInOut" }}
        className={`absolute ${rightColorClass}`}
        style={{
          ...baseLeafStyle,
          left: "50%",
          transformOrigin: "bottom left",
          background: rightBg,
        }}
      />
    </div>
  );
}
