export function Nav() {
  return (
    <nav className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-linear-hairline bg-linear-canvas/90 backdrop-blur-xl">
      <a href="#home" className="flex items-center">
        <span className="text-sm font-medium text-linear-ink">
          Alejandro Bernardo
        </span>
      </a>

      <div className="hidden items-center gap-6 text-sm text-linear-ink-subtle md:flex">
        <a className="transition-colors hover:text-linear-ink" href="#projects">
          Proyectos
        </a>
        <a className="transition-colors hover:text-linear-ink" href="#experience">
          Certificaciones
        </a>
        <a className="transition-colors hover:text-linear-ink" href="#contact">
          Contacto
        </a>
      </div>
      <span className="hidden w-[1px] sm:block" aria-hidden="true" />
    </nav>
  );
}
