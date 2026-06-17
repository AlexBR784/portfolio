"use client";
import { getPath } from "@/utils/path";
import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  "AI-Associate",
  "Associate",
  "JavaScript-Developer",
  "OmniStudio-Developer",
  "Platform-Developer-I",
  "Salesforce-Certified-Administrator",
  "Salesforce-Certified-Platform-App-Builder-Badge",
];

export function Experience() {
  const certsDupe = [...certs, ...certs, ...certs];

  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="linear-panel overflow-hidden">
        <div className="grid gap-6 border-b border-linear-hairline p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="linear-eyebrow">Credenciales</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.04em] text-linear-ink sm:text-5xl">
              Certificaciones
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-linear-ink-subtle lg:justify-self-end">
            Certificaciones orientadas a Salesforce, desarrollo frontend y construcción de soluciones empresariales.
          </p>
        </div>

        <div className="relative overflow-hidden px-4 py-8 sm:px-6">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-linear-surface-1 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-linear-surface-1 to-transparent" />

          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            }}
          >
            {certsDupe.map((cert, index) => (
              <motion.div
                key={`${cert}-${index}`}
                className="linear-card flex h-24 w-24 flex-shrink-0 items-center justify-center bg-linear-canvas p-3 transition-colors hover:bg-linear-surface-2 sm:h-28 sm:w-28"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18 }}
              >
                <Image
                  src={getPath(`/images/certis/${cert}.webp`)}
                  alt={cert}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-3 border-t border-linear-hairline px-6 py-5 text-sm text-linear-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>Salesforce, JavaScript y arquitectura de soluciones.</span>
          <span className="rounded-full border border-linear-hairline bg-linear-surface-2 px-3 py-1 text-xs text-linear-ink-muted">
            {certs.length} certificaciones
          </span>
        </div>
      </div>
    </section>
  );
}
