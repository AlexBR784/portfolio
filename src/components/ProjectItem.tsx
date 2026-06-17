"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

interface TechItem {
  techName: string;
  color: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  link: string;
  tech: TechItem[];
  variant?: "featured" | "compact";
}

export function ProjectItem({
  title,
  description,
  imageUrl,
  videoUrl,
  link,
  tech,
  variant = "compact",
}: ProjectItemProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const metadata = videoUrl ? "Demo disponible" : "Proyecto";

  if (variant === "featured") {
    return (
      <>
        <motion.article
          className="linear-panel grid gap-5 overflow-hidden p-4 transition-colors duration-200 hover:border-linear-hairline-strong sm:p-5 lg:grid-cols-[1fr_260px] lg:items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -2 }}
        >
          <div className="order-2 lg:order-1">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-linear-hairline bg-linear-surface-2 px-2 py-1 text-xs text-linear-ink-muted">
                Proyecto destacado
              </span>
              <span className="rounded-md border border-linear-hairline bg-linear-canvas px-2 py-1 text-xs text-linear-ink-tertiary">
                {metadata}
              </span>
            </div>

            <h3 className="text-3xl font-semibold leading-tight tracking-normal text-linear-ink sm:text-4xl">
              {title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-linear-ink-subtle sm:text-base">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tech.map((item, index) => (
                <span
                  key={`${item.techName}-${index}`}
                  className="rounded-md border border-linear-hairline bg-linear-surface-2 px-2.5 py-1 text-xs text-linear-ink-muted"
                >
                  {item.techName}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {videoUrl ? (
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="linear-button-primary inline-flex items-center justify-center px-4"
                >
                  Ver demo
                </button>
              ) : null}
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="linear-button-secondary inline-flex items-center justify-center px-4"
              >
                Abrir proyecto
              </a>
            </div>
          </div>

          <button
            type="button"
            className="order-1 overflow-hidden rounded-xl border border-linear-hairline bg-linear-canvas text-left lg:order-2 lg:justify-self-end"
            onClick={() => (videoUrl ? setIsVideoModalOpen(true) : window.open(link, "_blank"))}
            aria-label={videoUrl ? `Ver demo de ${title}` : `Abrir ${title}`}
          >
            <div className="relative aspect-[16/10] w-full lg:w-[260px]">
              {videoUrl && isHovered ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-85 grayscale-[10%] saturate-[0.82]"
                />
              ) : (
                <Image
                  src={imageUrl}
                  alt={`${title} screenshot`}
                  width={760}
                  height={428}
                  className="h-full w-full object-cover opacity-85 grayscale-[10%] saturate-[0.82] transition-transform duration-500 hover:scale-[1.02]"
                />
              )}
              <div className="absolute inset-0 bg-linear-canvas/10" />
            </div>
          </button>
        </motion.article>

        {videoUrl && (
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoUrl={videoUrl}
            title={title}
          />
        )}
      </>
    );
  }

  return (
    <>
      <article
        className="grid gap-4 bg-linear-surface-1 px-4 py-4 transition-colors duration-200 hover:bg-linear-surface-2 sm:grid-cols-[1fr_112px] sm:items-center sm:px-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-medium leading-tight tracking-normal text-linear-ink">
              {title}
            </h3>
            <span className="rounded-md border border-linear-hairline bg-linear-canvas px-2 py-0.5 text-xs text-linear-ink-tertiary">
              {metadata}
            </span>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-linear-ink-subtle">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={`${item.techName}-${index}`}
                className="rounded-md border border-linear-hairline bg-linear-canvas px-2 py-0.5 text-xs text-linear-ink-muted"
              >
                {item.techName}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {videoUrl ? (
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="linear-button-primary inline-flex min-h-9 items-center justify-center px-3"
              >
                Ver demo
              </button>
            ) : null}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="linear-button-secondary inline-flex min-h-9 items-center justify-center px-3"
            >
              Abrir
            </a>
          </div>
        </div>

        <button
          type="button"
          className="overflow-hidden rounded-lg border border-linear-hairline bg-linear-canvas sm:justify-self-end"
          onClick={() => (videoUrl ? setIsVideoModalOpen(true) : window.open(link, "_blank"))}
          aria-label={videoUrl ? `Ver demo de ${title}` : `Abrir ${title}`}
        >
          <div className="relative aspect-[4/3] w-full sm:w-28">
            {videoUrl && isHovered ? (
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-78 grayscale-[15%] saturate-[0.72]"
              />
            ) : (
              <Image
                src={imageUrl}
                alt={`${title} screenshot`}
                width={280}
                height={175}
                className="h-full w-full object-cover opacity-78 grayscale-[15%] saturate-[0.72]"
              />
            )}
            <div className="absolute inset-0 bg-linear-canvas/15" />
          </div>
        </button>
      </article>

      {videoUrl && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={videoUrl}
          title={title}
        />
      )}
    </>
  );
}
