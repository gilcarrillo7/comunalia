import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";
import Imagen from "../images/contacto.png";

export default function Contacto() {
  const WP_BASE_URL = "";
  const CF7_FORM_ID = "";
  const CF7_ENDPOINT = `${WP_BASE_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`;

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.4 },
  });

  const [form, setForm] = useState({
    "your-name": "",
    "your-email": "",
    "your-message": "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setServerMessage(null);

    try {
      const fd = new FormData();
      fd.append("your-name", form["your-name"]);
      fd.append("your-email", form["your-email"]);
      fd.append("your-message", form["your-message"]);
      fd.append("your-subject", "Contacto");
      fd.append("_wpcf7_unit_tag", `wpcf7-f${CF7_FORM_ID}-o1`);

      const res = await fetch(CF7_ENDPOINT, {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.status === "mail_sent") {
        setStatus("ok");
        setServerMessage(data.message || "¡Mensaje enviado!");
        setForm({ "your-name": "", "your-email": "", "your-message": "" });
      } else {
        setStatus("error");
        setServerMessage(
          data.message || "No se pudo enviar el mensaje. Verifica los datos."
        );
      }
    } catch (err: any) {
      setStatus("error");
      setServerMessage(err.message || "Error de red al enviar el formulario.");
    }
  };

  return (
    <Layout darkMode>
      <section className="min-h-screen relative flex items-center justify-end bg-primary text-tertiary px-4 pt-24 pb-16 mx-auto">
        <img
          src={Imagen}
          alt="Contacto"
          className="hidden md:block absolute left-0 bottom-0 z-0"
        />
        <div className="container z-10">
          <div className="max-w-3xl ml-auto text-lg lg:text-xl">
            <motion.h2
              className="text-left text-2xl md:text-3xl lg:text-4xl text-tertiary mb-12 md:mb-24"
              {...fadeInUp(0)}
            >
              Contacto
            </motion.h2>
            <form className="w-full" onSubmit={onSubmit}>
              <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 mb-12 md:mb-24">
                <motion.div
                  className="flex flex-col md:w-1/2"
                  {...fadeInUp(0.1)}
                >
                  <input
                    id="name"
                    name="your-name"
                    type="text"
                    className="bg-transparent border-b border-white focus:outline-none py-2 text-tertiary placeholder-tertiary"
                    placeholder="Nombre"
                    value={form["your-name"]}
                    onChange={onChange}
                    required
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col md:w-1/2"
                  {...fadeInUp(0.2)}
                >
                  <input
                    id="email"
                    name="your-email"
                    type="email"
                    className="bg-transparent border-b border-white focus:outline-none py-2 text-tertiary placeholder-tertiary"
                    placeholder="Email"
                    value={form["your-email"]}
                    onChange={onChange}
                    required
                  />
                </motion.div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 mb-12 md:mb-24">
                <motion.div
                  className="flex flex-col md:w-1/2"
                  {...fadeInUp(0.3)}
                >
                  <textarea
                    id="message"
                    name="your-message"
                    rows={1}
                    className="bg-transparent border-b border-white focus:outline-none py-2 text-tertiary placeholder-tertiary resize-none"
                    placeholder="Mensaje"
                    value={form["your-message"]}
                    onChange={onChange}
                    required
                  />
                </motion.div>
                <motion.div
                  className="text-right flex items-end md:w-1/2"
                  {...fadeInUp(0.4)}
                >
                  <img
                    src={Imagen}
                    alt="Contacto"
                    className="absolute left-0 bottom-0 md:hidden w-24 z-0"
                  />

                  {status !== "ok" && status !== "error" && (
                    <Button
                      type="submit"
                      variant="outline"
                      containerClassName="ml-28"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Enviando..." : "Enviar"}
                    </Button>
                  )}
                  {status === "ok" && (
                    <p className="text-green-300 mt-2">{serverMessage}</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-300 mt-2">{serverMessage}</p>
                  )}
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
