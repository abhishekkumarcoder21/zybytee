import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Cpu,
  FlaskConical,
  Sparkles,
  Wallet,
  Network,
  Eye,
  Shield,
  Code2,
  GraduationCap,
  Zap,
} from "lucide-react";

const products = [
  { name: "Zybytee AI", desc: "A foundation intelligence layer for autonomous reasoning and creation.", status: "In Development", icon: Brain },
  { name: "Zybytee Cloud", desc: "Planetary-scale compute and storage built for intelligent workloads.", status: "Coming Soon", icon: Cloud },
  { name: "Zybytee OS", desc: "An operating system designed around an AI-native interaction model.", status: "Future Release", icon: Cpu },
  { name: "Zybytee Labs", desc: "Frontier research into language, perception, and synthetic cognition.", status: "Active", icon: FlaskConical },
  { name: "Zybytee Studio", desc: "Creator and productivity tools amplified by generative intelligence.", status: "Coming Soon", icon: Sparkles },
  { name: "Zybytee Finance", desc: "Intelligent financial infrastructure for the post-bank generation.", status: "In Development", icon: Wallet },
  { name: "Zybytee Nexus", desc: "A connected fabric linking devices, agents, and digital identities.", status: "Future Release", icon: Network },
  { name: "Zybytee Vision", desc: "Perception systems for cameras, robotics, and the physical world.", status: "In Development", icon: Eye },
  { name: "Zybytee Shield", desc: "Autonomous cybersecurity for the AI-native enterprise.", status: "Coming Soon", icon: Shield },
  { name: "Zybytee Dev", desc: "Developer tooling for building, deploying, and orchestrating agents.", status: "In Development", icon: Code2 },
  { name: "Zybytee Learn", desc: "Personal AI tutors and adaptive education at planetary scale.", status: "Future Release", icon: GraduationCap },
  { name: "Zybytee Flow", desc: "Automation engine that turns intent into executed workflows.", status: "Coming Soon", icon: Zap },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-32 sm:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-6">
              02 — THE ECOSYSTEM
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient max-w-3xl leading-[1.05]">
              One ecosystem.
              <br />
              <span className="text-gradient-accent">Infinite intelligence.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A constellation of products — each built to stand alone, designed to work as one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative rounded-2xl glass glow-border p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-electric/0 group-hover:bg-electric/20 blur-3xl transition-all duration-700" />
                <div className="relative flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl glass grid place-items-center group-hover:bg-white/[0.06] transition">
                    <Icon className="h-5 w-5 text-cyan" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground border border-border rounded-full px-2.5 py-1">
                    {p.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="relative mt-8 font-display text-xl font-medium tracking-tight">
                  {p.name}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <div className="relative mt-6 flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition">
                  Learn more <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
