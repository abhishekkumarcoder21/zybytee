import { motion } from "framer-motion";

const roles = [
  "AI Research Engineer",
  "Foundation Model Scientist",
  "Systems Architect",
  "Product Designer, Intelligence",
  "Distributed Infra Engineer",
  "Security Architect",
];

export function Careers() {
  return (
    <section id="careers" className="relative py-32 sm:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-6">
              06 — CAREERS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient leading-[1.05]">
              Join the architects of
              <span className="text-gradient-accent"> tomorrow.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg">
              You're not joining a company. You're joining a mission to redesign
              what intelligence, software, and human capability look like in
              the next century.
            </p>
            <a
              href="#cta"
              className="mt-10 inline-flex items-center gap-2 rounded-full glass glow-border px-6 py-3 text-sm font-medium hover:bg-white/[0.04] transition"
            >
              View all positions <span aria-hidden>→</span>
            </a>
          </motion.div>

          <div className="space-y-2">
            {roles.map((r, i) => (
              <motion.a
                key={r}
                href="#cta"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center justify-between rounded-2xl glass p-5 hover:bg-white/[0.04] transition-all"
              >
                <div>
                  <div className="font-display text-lg font-medium">{r}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-1">
                    REMOTE · GLOBAL
                  </div>
                </div>
                <span
                  aria-hidden
                  className="text-muted-foreground group-hover:text-cyan group-hover:translate-x-1 transition-all"
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
