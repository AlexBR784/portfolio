import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0e14] scanline-effect">
      {/* Terminal Grid Background */}
      <div className="fixed inset-0 terminal-grid opacity-20 pointer-events-none" />
      
      <div className="bg-[#0a0e14] w-full xl:w-1/2 2xl:w-1/3 pt-10 pb-5 flex flex-col relative z-10">
        <Nav />
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
