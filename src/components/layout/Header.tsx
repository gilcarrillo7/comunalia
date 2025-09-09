import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import classnames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link, navigate } from "gatsby";
import Button from "../shared/Button";
import { SocialIcons } from "./SocialIcons";

import Logo from "../../images/logo.png";
import LogoWhite from "../../images/logo_white.png";
import VectorMenu from "../../images/vectorMenu.png";
import OpeningLeaves from "../shared/OpeningLeaves";

const headerJson = {
  headerBtn: {
    btnText: "Invierte en comunidades",
    btnLink: "/invierte_en_comunidades",
  },
};
const navItems = [
  { link: "Quiénes somos", url: "/quienes_somos" },
  {
    link: "Fundaciones socias",
    url: "/fundaciones_socias",
  },
  { link: "Servicios", url: "/servicios" },
  { link: "Historias de éxito", url: "/historias_de_exito" },
  { link: "Donantes y aliados", url: "/#donantes_y_aliados" },
  {
    link: "Biblioteca virtual",
    url: "https://comunalia.org.mx/biblioteca-virtual/",
  },
  { link: "Contacto", url: "/contacto" },
];

export default function Header({ darkMode }: { darkMode: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent text-white w-full absolute top-0 left-0 z-50">
      <div
        className={classnames(
          "container mx-auto flex items-center justify-between gap-4 py-4 sm:py-8 relative z-50",
          { "bg-secondary": isOpen }
        )}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="shrink-0">
          <img
            src={isOpen || darkMode ? LogoWhite : Logo}
            alt="Logo Consejo Cívico"
            className="h-12 md:h-16 lg:h-20 w-auto"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-6">
          {!isOpen && (
            <Button
              variant="secondary"
              className="text-sm sm:text-xl !px-2 sm:!px-4"
              squaered
              onClick={() => navigate(headerJson.headerBtn.btnLink)}
            >
              {headerJson.headerBtn.btnText}
            </Button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none transition-all duration-300"
          >
            <span className="block relative w-12 h-12 sm:w-16 sm:h-16">
              <Menu
                className={classnames(
                  "w-12 h-12 sm:w-16 sm:h-16 absolute inset-0 transition-all duration-300 transform",
                  {
                    "text-white": darkMode,
                    "text-primary": !darkMode,
                    "opacity-0 scale-75 rotate-45": isOpen,
                    "opacity-100 scale-100 rotate-0": !isOpen,
                  }
                )}
              />
              <X
                className={`text-white w-12 h-12 sm:w-16 sm:h-16 absolute inset-0 transition-all duration-300 transform ${
                  isOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-75 rotate-45"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-full h-screen bg-secondary text-white z-40 overflow-y-auto md:overflow-y-hidden"
            >
              <div className="container mx-auto h-full relative z-10">
                <motion.nav
                  className="relative pt-20 md:pt-56 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-10 md:gap-x-20 min-h-screen"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <div className="space-y-4 md:space-y-8">
                    {navItems.slice(0, 4).map((item, i) => (
                      <motion.div
                        key={item.url}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <Link
                          to={item.url}
                          className="text-xl sm:text-2xl lg:text-[40px] font-light hover:text-tertiary z-10"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.link}
                        </Link>
                      </motion.div>
                    ))}

                    <div className="w-1/2 absolute bottom-0">
                      <div className="hidden md:block w-[256px] h-[256px]">
                        <OpeningLeaves
                          position="relative"
                          leftColor="bg-tertiary"
                          rightColor="white"
                          top={-135}
                          left={64}
                          scale={1}
                          spread={65}
                          tilt={0}
                          duration={0.9}
                          delay={0.1}
                          open
                          flipY
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 1,
                            ease: [0.25, 0.5, 0.75, 1],
                            delay: 0.5,
                          }}
                          style={{ transformOrigin: "bottom center" }}
                          className="w-[256px] aspect-[2/1] bg-primary rounded-t-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Columna derecha */}
                  <div className="space-y-4 md:space-y-8">
                    {navItems.slice(4).map((item) => (
                      <motion.div
                        key={item.url}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <Link
                          to={item.url}
                          className="text-xl sm:text-2xl lg:text-[40px] font-light hover:text-tertiary"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.link}
                        </Link>
                      </motion.div>
                    ))}

                    {/* CTA’s y redes */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="pt-0 md:pt-10 mx-8 md:mx-0 text-center md:text-left"
                    >
                      <div className="mx-auto">
                        <p className="font-light text-base md:text-lg mb-4">
                          Soy fundación asociada
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                          <Button
                            variant="outline"
                            onClick={() =>
                              window.open(
                                "https://sites.google.com/comunalia.org.mx/hub/inicio"
                              )
                            }
                          >
                            Ingresa al HUB
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => navigate("/quiero_ser_una_fc_socia")}
                          >
                            Quiero ser una FC socia
                          </Button>
                        </div>
                        <div className="h-px w-full md:w-80 bg-tertiary my-6" />
                      </div>
                    </motion.div>

                    <div className="flex ">
                      <div className="w-1/2 md:w-0 flex justify-end sm:hidden">
                        <img
                          src={VectorMenu}
                          alt="Vector decorativo"
                          className="scale-[80%]"
                        />
                      </div>
                      <div className="w-1/2 md:w-full flex justify-center sm:justify-start gap-6">
                        <SocialIcons className="mb-8" sameSize />
                      </div>
                    </div>
                  </div>
                </motion.nav>
              </div>
            </motion.div>

            <Helmet
              bodyAttributes={{
                class: "overflow-hidden",
              }}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
