import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
