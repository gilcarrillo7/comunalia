import React, { useState } from "react";
import classnames from "classnames";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import Button, { ButtonVariant } from "../shared/Button";
import { navigate } from "gatsby";
import OpeningLeaves from "../shared/OpeningLeaves";
import { BUTTON_TYPES, COLORS } from "../../constants";
import RamasHojasAnimadas from "../shared/RamasHojasAnimadas";

type MediaType = "image" | "video" | "iframe";

type SectionProps = {
  title?: string;
  content?: string;
  button1Text?: string;
  button1Href?: string;
  button1Variant?: ButtonVariant;
  button2Text?: string;
  button2Href?: string;
  mediaSrc?: string;
  mediaSrcMob?: string;
  mediaType?: MediaType;
  reverse?: boolean;
  reverseMobile?: boolean;
  bgColor?: string;
  mediaAlign?: "center" | "border" | "border-left" | "border-bottom";
  leaves?: boolean;
  tree?: boolean;
  titleClassname?: string;
  containerClassname?: string;
  mediaClassname?: string;
};

/** Animaciones suaves */
const containerV = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export default function ContentSection({
  title,
  content,
  button1Text,
  button1Href,
  button1Variant,
  button2Text,
  button2Href,
  mediaSrc,
  mediaSrcMob = "",
  mediaType = "image",
  reverse = false,
  reverseMobile = false,
  bgColor = "light",
  mediaAlign = "center",
  leaves = false,
  tree = false,
  titleClassname = "text-tertiary",
  containerClassname = "",
  mediaClassname = "",
}: SectionProps) {
  const [active, setActive] = useState(false);

  const handleButtonClick = (buttonLink: string) => {
    if (!buttonLink) return;
    if (buttonLink.startsWith("http")) {
      window.location.href = buttonLink;
    } else {
      navigate(buttonLink);
    }
  };

  return (
    <section
      className={`${containerClassname} w-full min-h-screen flex items-center justify-center relative pt-24 pb-16 md:py-28`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <motion.div
          className={classnames(
            "flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24",
            { "md:flex-row-reverse": reverse },
            { "flex-col-reverse md:flex-row": reverseMobile },
            { "pb-[280px] pt-[50px] md:py-0": tree }
          )}
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Texto */}
          <div
            className={classnames("space-y-4", {
              "w-full md:w-1/2":
                mediaType === "video" || mediaAlign === "center",
              "md:w-2/3": mediaType !== "video" && mediaAlign !== "center",
            })}
          >
            {title && (
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 140, damping: 18 },
                  },
                }}
                className={`text-3xl sm:text-5xl font-medium mb-6 ${titleClassname}`}
              >
                {title}
              </motion.h2>
            )}

            {content !== "" && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 140, damping: 18 },
                  },
                }}
                className="text-xl sm:text-2xl md:text-3xl font-light"
                dangerouslySetInnerHTML={{ __html: content as string }}
              />
            )}

            {button1Text && button1Href && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 140, damping: 18 },
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleButtonClick(button1Href)}
                  variant={button1Variant ?? BUTTON_TYPES.get(bgColor)}
                  className="mt-4"
                  onMouseEnter={() => setActive(true)}
                  onMouseLeave={() => setActive(false)}
                >
                  {button1Text}
                </Button>
              </motion.div>
            )}
            {button2Text && button2Href && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 140, damping: 18 },
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleButtonClick(button2Href)}
                  variant={BUTTON_TYPES.get(bgColor)}
                  className="mt-4"
                >
                  {button2Text}
                </Button>
              </motion.div>
            )}
          </div>

          {/* Media */}
          <div
            className={classnames("w-full", {
              "md:w-1/2": mediaType === "video" || mediaAlign === "center",
              "md:w-1/3": mediaType !== "video" && mediaAlign !== "center",
              "flex justify-center": mediaAlign === "center" && !tree,
              "": tree,
            })}
          >
            {!leaves && mediaType === "image" && mediaSrc && (
              <img
                src={mediaSrc}
                alt={title || ""}
                loading="lazy"
                className={classnames(`${mediaClassname} max-w-full`, {
                  "w-1/2 sm:w-3/5 md:w-auto md:max-w-[30%] md:absolute h-auto md:max-h-screen -ml-[1rem] sm:-ml-[5rem] md:-ml-0 md:left-0 md:top-1/2 md:-translate-y-1/2":
                    mediaAlign === "border",
                  "ml-auto w-3/5 md:w-auto md:max-w-[30%] md:absolute h-auto md:max-h-screen right-0 md:top-1/2 md:-translate-y-1/2 -mr-4":
                    mediaAlign === "border-left",
                  "ml-auto w-3/5 md:w-auto md:max-w-[30%] md:absolute h-auto md:max-h-screen right-0 md:bottom-0 -mr-4":
                    mediaAlign === "border-bottom",
                  "relative w-auto h-auto": mediaAlign === "center",
                  "hidden md:block": mediaSrcMob !== "",
                })}
              />
            )}
            {mediaSrcMob !== "" && (
              <img src={mediaSrcMob} className="md:hidden -ml-4 w-[100vw] max-w-[100vw]" />
            )}

            {!leaves && mediaType === "video" && mediaSrc && (
              <motion.div
                className="w-full h-[325px]"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  src={mediaSrc}
                />
              </motion.div>
            )}

            {leaves && (
              <div className="flex flex-col items-center md:absolute md:right-0 md:bottom-0">
                <img
                  src={mediaSrc}
                  className="max-w-full md:w-[400px] translate-y-[50px]"
                  alt=""
                />
                <OpeningLeaves
                  position="relative"
                  flipY
                  leftColor={COLORS.complementary}
                  rightColor={COLORS.light}
                  top={-200}
                  left={120}
                  scale={1.5}
                  spread={65}
                  tilt={0}
                  duration={0.9}
                  delay={0.1}
                  open
                />
              </div>
            )}

            {tree && (
              <div
                className="w-[400px] md:w-[600px] absolute right-0 bottom-0"
                style={{ aspectRatio: "1 / 1" }}
              >
                <RamasHojasAnimadas />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
