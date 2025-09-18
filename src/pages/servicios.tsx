import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";
import Button from "../components/shared/Button";
import Textura from "../images/textura3.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout darkMode>
      <ContentSection
        bgColor={COLORS.primary}
        title="1. Fortalecimiento individual"
        content={`
        <div class="text-white font-light">
        <p class="text-lg md:text-xl mb-6">Acompañamos a cada fundación en la atención de sus necesidades específicas, brindando apoyo personalizado a lo largo de su ruta de fortalecimiento a través de:</p>
        
        <p class="mb-4 text-tertiary text-base md:text-lg">
        • Identificación de necesidades de Fortalecimiento<br/>
        • Diseño de una ruta anual de fortalecimiento individual<br/>
        • Asesorías técnicas personalizadas<br/>
        • Otorgamiento de becas<br/>
        • Evaluación a través de la herramienta Signos Vitales<br/>
        • Participación en los Círculos de Dar
        </p>
        </div>
        `}
        button1Text="Contacto"
        button1Href="mailto:minerva.zamora@comunalia.org.mx"
        mediaType="image"
        mediaSrc="/images/servicios1.png"
        mediaClassname="md:!absolute md:right-0 md:bottom-0 md:w-[600px]"
      />
      <ContentSection
        bgColor={COLORS.light}
        title="2. Fortalecimiento colectivo"
        titleClassname="text-primary -mb-4"
        content={`
        <div class="text-primary font-light">
        <p class="text-lg md:text-2xl lg:text-3xl mb-6 text-secondary">Fomentamos el aprendizaje entre pares como estrategia para el fortalecimiento de las fundaciones socios, a través de:</p>
        
        <p class="mb-4 text-base md:text-lg lg:text-xl">
        • Comunidades de práctica<br/>
        • Pasantías<br/>
        • Comunalia HUB<br/>
        • Biblioteca virtual
        </p>
        </div>
        `}
        button1Text="Contacto"
        button1Href="mailto:minerva.zamora@comunalia.org.mx"
        mediaAlign="border"
        mediaType="image"
        mediaSrc="/images/servicios2.png"
        reverse
      />
      <ContentSection
        bgColor="white"
        title="3. Comunicación y conexiones del movimiento de FCs"
        titleClassname="text-primary -mb-4"
        content={`
        <div class="text-primary font-light">
        <p class="text-lg md:text-2xl lg:text-3xl mb-6 text-secondary">visibilizar la contribución de las fundaciones comunitarias en el ecosistema social, como:</p>
        
        <p class="mb-4 text-base md:text-lg">
        • Eventos nacionales e internacionales<br/>
        • Publicaciones técnicas para impulsar el movimiento de FCs<br/>
        • Exposición en redes sociales<br/>
        • Boletines<br/>
        • Alianzas<br/>
        • Sistematización de indicadores de la contribución colectiva de la alianza de FCs
        </p>
        </div>
        `}
        button1Text="Contacto"
        button1Href="mailto:minerva.zamora@comunalia.org.mx"
        mediaType="image"
        mediaSrc="/images/servicios3.png"
        mediaClassname="w-[60%]"
      />
      <div className="flex">
        <div className="relative basis-2/3 md:basis-3/4 bg-secondary flex items-center pt-4">
          <img src={Textura} className="absolute left-0 top-0 z-0" />
          <div className="container z-10">
            <p className="text-white text-base md:text-xl lg:text-2xl mb-4 md:mb-8 text-center md:text-left">
              Soy fundación asociada
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:justify-around">
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
                Quiero ser fundación asociada
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-1/3 md:basis-1/4 bg-primary flex items-center justify-center p-4">
          <img src="/images/fcsocia.png" className="w-48" />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Servicios</title>;
