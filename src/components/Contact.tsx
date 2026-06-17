"use client";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <footer id="contact" className="pb-10 pt-12 sm:pt-16">
      <div className="linear-panel p-6 sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="linear-eyebrow">Contacto</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-linear-ink sm:text-4xl">
              Hablemos de productos web, Salesforce o nuevas oportunidades.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              type="button"
              onClick={() => window.open("https://github.com/alexbr784", "_blank")}
              className="linear-button-secondary inline-flex items-center gap-2 px-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
              GitHub
            </motion.button>

            <motion.button
              type="button"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/alejandro-bernardo-rupérez-810905227/",
                  "_blank"
                )
              }
              className="linear-button-primary inline-flex items-center gap-2 px-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 0 0-4 0" />
              </svg>
              LinkedIn
            </motion.button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-linear-hairline pt-5 text-xs text-linear-ink-tertiary sm:flex-row sm:items-center sm:justify-between">
          <span>Alejandro Bernardo</span>
          <span>Porfolio construido con Next.js</span>
        </div>
      </div>
    </footer>
  );
}
