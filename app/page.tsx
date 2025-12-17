import { Hero } from "@/components/sections/hero";
import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/scroll-progress";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
    </main>
  );
}
