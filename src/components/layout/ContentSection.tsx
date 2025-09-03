import React from "react";
import classnames from "classnames";
import Button from "../shared/Button";
import { navigate } from "gatsby";
import { BUTTON_TYPES, COLORS } from "../constants";

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
          <div className="md:w-1/2 space-y-4">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold text-tertiary">
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
          <div className="md:w-1/2 flex justify-center">
            {mediaType === "image" && mediaSrc && (
              <img
                src={mediaSrc}
                alt={title || ""}
                className="rounded-lg max-w-full h-auto"
              />
            )}
            {mediaType === "video" && mediaSrc && (
              <video
                src={mediaSrc}
                controls
                className="rounded-lg max-w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
