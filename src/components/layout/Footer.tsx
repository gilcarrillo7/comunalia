import React from "react";
import { SocialIcons } from "./SocialIcons";
import Button from "../shared/Button";
import FooterImg from "../../images/footer1.png";
import VectorFooter from "../../images/vectorFooter.png";

type Props = {
  year?: number;
  newsHref?: string;
  privacyHref?: string;
  siteEmail?: string;
  phone?: string;
  devHref?: string;
};

export default function Footer({
  year = new Date().getFullYear(),
  newsHref = "/noticias",
  privacyHref = "/aviso-de-privacidad",
  siteEmail = "contacto@comunalia.org.mx",
  phone = "2719 6670",
  devHref = "https://trazovivo.com",
}: Props) {
  return (
    <footer className="relative overflow-hidden">
      {/* Bloque principal amarillo */}
      <div className="bg-tertiary text-primary">
        <div className="flex flex-wrap">
          {/* Col 1: sello Cemefi */}
          <div className="shrink-0 w-1/3 lg:w-[240px] ">
            {/* Placeholder del sello (usa tu img si la tienes) */}
            <img
              src={FooterImg}
              alt="Sello Cemefi: Institucionalidad y Transparencia"
              className="object-contain"
            />
          </div>
          {/* Col 2: título, botón, redes */}
          <div className="shrink-0 w-2/3 lg:w-auto flex flex-col gap-2 xl:flex-row flex-grow justify-around items-center text-center lg:text-left py-4">
            <div className="h-full hidden xl:flex items-end">
              <img src={VectorFooter} className="h-24" />
            </div>
            <div>
              <h2 className="font-semibold tracking-tight leading-none md:text-4xl text-white drop-shadow-sm">
                Comunalia
              </h2>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center">
              {/* Botón Noticias */}
              <Button>Noticias</Button>
              {/* Redes */}
              <SocialIcons />
            </div>
          </div>
          {/* Col 3: datos de contacto y crédito */}
          <div className="relative shrink-0 w-1/3 flex lg:hidden items-end justify-center">
            <img src={VectorFooter} className="h-28 absolute bottom-0" />
          </div>
          {/* Col 4: datos de contacto y crédito */}
          <div className="shrink-0 mx-auto w-2/3 lg:w-[400px]">
            <div className="py-5 px-4 xl:pr-24 space-y-2 text-[10px] sm:text-sm leading-4 lg:leading-6 text-primary">
              <p className="font-extrabold">Dirección:</p>
              <p>
                YCo. Centro de Innovación e Impacto Social | Av. Del Estado
                #208, Col. Tecnológico, 64700, Monterrey, N.L.
              </p>
              <p className="mt-2 font-extrabold">
                Teléfono: <span className="font-normal">{phone}</span>
              </p>
              <p>
                <a
                  className="underline decoration-primary underline-offset-2 hover:opacity-80"
                  href={`mailto:${siteEmail}`}
                >
                  {siteEmail}
                </a>
              </p>
              <p className="mt-2">
                Diseño y desarrollo web por{" "}
                <a
                  href={devHref}
                  className="underline decoration-primary underline-offset-2 hover:opacity-80"
                  target="_blank"
                  rel="noreferrer"
                >
                  Trazo Vivo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Franja inferior vino */}
      <div className="bg-primary py-4 text-center text-sm sm:text-base text-white">
        <div className="flex flex-col sm:flex-row justify-center mx-auto px-4">
          <span className="font-medium">Comunalia {year}</span>
          <span className="mx-2 hidden sm:block">·</span>
          <a
            href={privacyHref}
            className="underline underline-offset-2 hover:opacity-90"
          >
            Consulta nuestro aviso de privacidad.
          </a>
        </div>
      </div>
    </footer>
  );
}
