import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#161616]">
      <div className="bg-[#161616] w-1/3 pt-10 pb-5 flex flex-col">
        <Nav />
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
