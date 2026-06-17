import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-canvas text-linear-ink">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <Nav />
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
