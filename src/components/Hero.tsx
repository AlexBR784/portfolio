"use client";
import Image from "next/image";
import { getPath } from "../utils/path";
import { motion } from "framer-motion";

const stack = ["Salesforce", "React", "Next.js", "TypeScript", "Tailwind CSS"];

const profileRows = [
  { label: "Actual", value: "NTT DATA", detail: "Engineer" },
  { label: "Foco", value: "Implementación Salesforce", detail: "CRM, automatización y herramientas de negocio" },
  { label: "Interfaces", value: "Producto web", detail: "Aplicaciones claras, mantenibles y orientadas a usuario" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="grid gap-10 py-14 sm:py-18 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20"
    >
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-5 flex items-center gap-3">
          <Image
            src={getPath("/images/profile-pic.png")}
            alt="Alejandro Bernardo"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-cover grayscale-[20%]"
          />
          <p className="linear-eyebrow">Ingeniero en NTT DATA</p>
        </div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-normal text-linear-ink sm:text-6xl lg:text-[72px]">
          Alejandro Bernardo
        </h1>
        <p className="mt-6 max-w-[620px] text-lg leading-8 tracking-normal text-linear-ink-muted sm:text-[19px]">
          Ingeniero Multimedia especializado en Salesforce, React y productos web con interfaces claras, mantenibles y orientadas a usuario.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            download="CV_Alejandro_Bernardo_Ruperez.pdf"
            href={getPath("/CV/CV_Alejandro_Bernardo_Ruperez.pdf")}
            className="linear-button-primary inline-flex items-center justify-center px-4"
          >
            Descargar CV
          </a>
          <a
            href="#projects"
            className="linear-button-secondary inline-flex items-center justify-center px-4"
          >
            Ver proyectos
          </a>
        </div>

        <div className="mt-10 flex max-w-xl border-t border-linear-hairline pt-5 text-sm text-linear-ink-subtle">
          <span>Disponible para colaborar en producto, frontend y Salesforce.</span>
        </div>
      </motion.div>

      <motion.div
        className="linear-panel overflow-hidden"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        <div className="flex items-center justify-between border-b border-linear-hairline px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-medium text-linear-ink">Perfil profesional</p>
              <p className="mt-1 text-xs text-linear-ink-subtle">Porfolio / 2026</p>
            </div>
          </div>
          <span className="rounded-md border border-linear-hairline bg-linear-surface-2 px-2.5 py-1 text-xs text-linear-ink-muted">
            Activo
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="rounded-xl border border-linear-hairline bg-linear-surface-2 p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs text-linear-ink-tertiary">Perfil actual</p>
                <p className="mt-2 text-2xl font-semibold leading-tight tracking-normal text-linear-ink">
                  Ingeniero · Salesforce + interfaces web
                </p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-linear-ink-subtle">
                  Implementación, interfaces de producto y herramientas internas para flujos web prácticos.
                </p>
              </div>
              <span className="w-fit rounded-md border border-linear-hairline bg-linear-canvas px-2.5 py-1 text-xs text-linear-ink-muted">
                ES / Remoto
              </span>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-linear-hairline bg-linear-canvas p-4">
              <p className="text-xs text-linear-ink-tertiary">Proyectos</p>
              <p className="mt-2 text-2xl font-semibold leading-none text-linear-ink">6</p>
            </div>
            <div className="rounded-xl border border-linear-hairline bg-linear-canvas p-4">
              <p className="text-xs text-linear-ink-tertiary">Certificaciones</p>
              <p className="mt-2 text-2xl font-semibold leading-none text-linear-ink">7</p>
            </div>
            <div className="rounded-xl border border-linear-hairline bg-linear-canvas p-4">
              <p className="text-xs text-linear-ink-tertiary">Modo</p>
              <p className="mt-2 text-sm font-medium leading-5 text-linear-ink">Producto web</p>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-linear-hairline">
            {profileRows.map((row, index) => (
              <div
                key={row.label}
                className="grid gap-2 border-linear-hairline bg-linear-surface-1 px-4 py-3 sm:grid-cols-[120px_1fr] sm:items-center [&:not(:last-child)]:border-b"
              >
                <p className="text-xs text-linear-ink-tertiary">{row.label}</p>
                <div>
                  <p className="text-sm font-medium text-linear-ink">{row.value}</p>
                  <p className="mt-1 text-xs text-linear-ink-subtle">{row.detail}</p>
                </div>
                {index === 0 ? (
                  <span className="hidden" aria-hidden="true">
                    actual
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-linear-hairline bg-linear-surface-2 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-linear-ink">Stack principal</p>
              <p className="text-xs text-linear-ink-tertiary">Actualizado</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-linear-hairline bg-linear-canvas px-2.5 py-1 text-xs text-linear-ink-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
