'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================
   ANIMACIONES
========================= */

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* =========================
   COMPONENTE
========================= */

export default function Home() {
  const [activeSection, setActiveSection] = useState("perfil");
  const [darkMode, setDarkMode] = useState(true);

  /* =========================
     SECCIÓN ACTIVA (NAV)
  ========================= */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const cardStyle = darkMode
    ? "bg-gray-900 border-gray-800 text-gray-300"
    : "bg-white border-gray-200 text-gray-700";

  return (
    <main
      className={`min-h-screen px-6 scroll-smooth transition-colors duration-300
      ${darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}
    >

      {/* =========================
         HEADER / NAVBAR
      ========================= */}
      <header
        className={`fixed top-0 left-0 right-0 backdrop-blur border-b z-50
        ${darkMode ? "bg-black/80 border-gray-800" : "bg-white/80 border-gray-200"}`}
      >

          <div className="space-x-4 text-sm flex items-center">
            {["perfil", "fortaleza", "tecnologias", "experiencia", "contacto"].map(
              (sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  className={`relative pb-1 transition-all
                    ${activeSection === sec
                      ? "font-semibold after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-500"
                      : "opacity-70 hover:opacity-100"}
                  `}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              )
            )}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 border px-3 py-1 rounded text-xs transition-all hover:scale-105"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
      </header>

      {/* =========================
         PERFIL
      ========================= */}
      <motion.section
        id="perfil"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto pt-32 pb-16"
      >
        <div className={`rounded-xl border p-8 ${cardStyle}`}>
          <h1 className="text-4xl font-bold mb-3">Franco Madera</h1>
          <h2 className="text-xl text-blue-500 mb-5">
            Técnico Superior en Desarrollo de Software
          </h2>

          <p className="mb-3">
            Desarrollador con formación técnica y experiencia en soporte IT,
            implementación de sistemas y desarrollo de software.
          </p>

          <p className="mb-3">
            Mi objetivo es formar parte de una organización donde pueda aplicar
            mis conocimientos técnicos y seguir creciendo profesional y
            personalmente.
          </p>
        </div>
      </motion.section>

      {/* =========================
         FORTALEZAS
      ========================= */}
      <section id="fortaleza" className="max-w-4xl mx-auto py-16">
        <h3 className="text-3xl font-semibold mb-6">Fortalezas</h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`rounded-xl border p-6 space-y-4 ${cardStyle}`}
        >
          {[
            "Trabajo en equipo y aprendizaje continuo.",
            "Responsabilidad y compromiso con objetivos y plazos.",
            "Capacidad para traducir necesidades del usuario en soluciones técnicas."
          ].map((text, i) => (
            <motion.p key={i} variants={fadeItem}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* =========================
         TECNOLOGÍAS
      ========================= */}
      <section id="tecnologias" className="max-w-4xl mx-auto py-16">
        <h3 className="text-3xl font-semibold mb-6">Tecnologías</h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[
            ["Lenguajes", "C# · Python · JavaScript · Dart"],
            ["Web", "HTML · CSS · Tailwind · React · Next.js"],
            ["Base de datos", "SQL Server"],
            ["Mobile", "Flutter"],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              variants={fadeItem}
              className={`rounded-lg border p-4 text-sm ${cardStyle}`}
            >
              <h4 className="font-semibold mb-2">{title}</h4>
              <p>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================
         EXPERIENCIA
      ========================= */}
      <section id="experiencia" className="max-w-4xl mx-auto py-16">
        <h3 className="text-3xl font-semibold mb-6">Experiencia</h3>

        <div className={`rounded-xl border p-6 space-y-6 ${cardStyle}`}>
          <div>
            <h4 className="font-semibold">Soporte IT – LCI Consultoras IT</h4>
            <p className="text-sm opacity-70 mb-2">06/2025 – Actualidad</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Implementación y soporte de sistemas ERP (Tango), MRP (Capataz) y CRM (Action Sales)</li>
              <li>Gestión de reportes y mantenimineto de bases de datos SQL</li>
              <li>Soporte remoto mediante Help Desk</li>
              <li>Infraestructura y redes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">
              Vendedor / Logística – Ingeniería Boggio
            </h4>
            <p className="text-sm opacity-70 mb-2">11/2020 – 06/2025</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Venta de insumos eléctricos</li>
              <li>Presupuestos y e-commerce</li>
              <li>Control de stock</li>
              <li>Atención al cliente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
         CONTACTO
      ========================= */}
      <section id="contacto" className="max-w-4xl mx-auto py-16">
        <h3 className="text-3xl font-semibold mb-6">Contacto</h3>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/franco-madera-9597341ab/"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/FrancoMadera"
            target="_blank"
            className={`px-6 py-3 rounded-lg border ${cardStyle}`}
          >
            GitHub
          </a>
        </div>
      </section>

      {/* =========================
         WHATSAPP FLOTANTE
      ========================= */}
      <a
        href="https://wa.me/5493492564591"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        💬 WhatsApp
      </a>
    </main>
  );
}
