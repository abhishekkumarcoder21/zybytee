import { motion } from "framer-motion";
import { Building2, ShieldCheck, Sparkles, Gauge } from "lucide-react";

const highlights = [
  { label: "Enterprise-grade security", icon: ShieldCheck },
  { label: "AI-native workflows", icon: Sparkles },
  { label: "Realtime performance", icon: Gauge },
];

export function Products() {
  return (
    <section id="products" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-6">
              07 — PRODUCTS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient leading-[1.05]">
              Zybytee Business
              <span className="text-gradient-accent"> for modern teams.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg">
              The intelligent business platform for operations, growth, and customer
              orchestration. Built with the same Zybytee core that powers our AI-first ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-foreground/80"
                  >
                    <Icon className="h-4 w-4 text-cyan" strokeWidth={1.6} />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-3xl glass glow-border p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute -top-24 -right-16 h-48 w-48 rounded-full bg-electric/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                  ENTERPRISE PLATFORM
                </div>
                <div className="h-11 w-11 rounded-2xl glass grid place-items-center">
                  <Building2 className="h-5 w-5 text-cyan" strokeWidth={1.6} />
                </div>
              </div>

              <h3 className="mt-10 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                Zybytee Business
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                An integrated suite for teams who move fast: intelligent CRM, ops intelligence,
                and automation pipelines woven into one secure command layer.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://business.zybytee.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium shadow-glow"
                >
                  Launch Zybytee Business
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <div className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                  BUSINESS.ZYBYTEE.IN
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
