import React from "react";
import classnames from "classnames";
import ReactPlayer from "react-player";
import Button from "../shared/Button";
import { navigate } from "gatsby";
import { BUTTON_TYPES, COLORS } from "../constants";
import OpeningLeaves from "../shared/OpeningLeaves";

type MediaType = "image" | "video" | "iframe";

type SectionProps = {
  title?: string;
  content?: string;
  button1Text?: string;
  button1Href?: string;
  button2Text?: string;
  button2Href?: string;
  mediaSrc?: string;
  mediaType?: MediaType;
  reverse?: boolean;
  bgColor?: string;
  mediaAlign?: "center" | "border";
  leaves?: boolean;
};

export default function ContentSection({
  title,
  content,
  button1Text,
  button1Href,
  button2Text,
  button2Href,
  mediaSrc,
  mediaType = "image",
  reverse = false,
  bgColor = "light",
  mediaAlign = "center",
  leaves = false,
}: SectionProps) {
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
      className="w-full min-h-screen flex items-center justify-center relative py-16 md:py-40 xl:py-8"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <div
          className={classnames(
            "flex flex-col md:flex-row items-center gap-8",
            {
              "md:flex-row-reverse": reverse,
            }
          )}
        >
          <div
            className={classnames("space-y-4", {
              "md:w-2/3": mediaType !== "video",
              "md:w-1/2": mediaType === "video",
            })}
          >
            {title && (
              <h2 className="text-3xl sm:text-5xl font-medium text-tertiary mb-6">
                {title}
              </h2>
            )}

            {content !== "" && (
              <div
                className="text-base text-primary"
                dangerouslySetInnerHTML={{ __html: content as string }}
              />
            )}

            {button1Text && button1Href && (
              <Button
                onClick={() => handleButtonClick(button1Href)}
                variant={BUTTON_TYPES.get(bgColor)}
                className="mt-4"
              >
                {button1Text}
              </Button>
            )}
            {button2Text && button2Href && (
              <Button
                onClick={() => handleButtonClick(button2Href)}
                variant={BUTTON_TYPES.get(bgColor)}
                className="mt-4"
              >
                {button2Text}
              </Button>
            )}
          </div>
          {/* Media */}
          <div
            className={classnames({
              "md:w-1/3": mediaType !== "video",
              "md:w-1/2": mediaType === "video",
              "flex justify-center": mediaAlign === "center",
            })}
          >
            {!leaves && mediaType === "image" && mediaSrc && (
              <img
                src={mediaSrc}
                alt={title || ""}
                className={classnames("max-w-full h-auto", {
                  "w-1/2 sm:w-3/5 md:w-auto md:max-w-[30%] md:absolute md:max-h-screen -ml-[1rem] sm:-ml-[5rem] md:-ml-0 md:left-0 md:top-1/2 md:-translate-y-1/2":
                    mediaAlign === "border",
                  relative: mediaAlign === "center",
                })}
              />
            )}
            {!leaves && mediaType === "video" && mediaSrc && (
              <div className="aspect-video rounded overflow-hidden shadow-lg w-full md:w-4/5">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  src={mediaSrc}
                />
              </div>
            )}
            {leaves && (
              <div className="flex flex-col items-center md:absolute md:right-0 md:bottom-0">
                <img src={mediaSrc} className="w-[308px] translate-y-[40px]" />
                <OpeningLeaves
                  position="relative"
                  flipY
                  leftColor={COLORS.complementary}
                  rightColor={COLORS.light}
                  top={-155}
                  left={90}
                  scale={1.2}
                  spread={65}
                  tilt={0}
                  duration={0.9}
                  delay={0.1}
                  open
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
