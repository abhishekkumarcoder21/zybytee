import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Vision } from "@/components/site/Vision";
import { Technology } from "@/components/site/Technology";
import { Impact } from "@/components/site/Impact";
import { Careers } from "@/components/site/Careers";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zybytee" },
      {
        name: "description",
        content:
          "Zybytee is building futuristic software, AI systems, digital infrastructure, and intelligent products for the next era of humanity.",
      },
      { property: "og:title", content: "Zybytee" },
      {
        property: "og:description",
        content:
          "A constellation of AI-native products. One ecosystem. Infinite intelligence.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <Vision />
      <Technology />
      <Impact />
      <Careers />
      <CTA />
      <Footer />
    </main>
  );
}
