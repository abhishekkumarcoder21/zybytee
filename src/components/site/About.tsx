import { motion } from "framer-motion";

export function About() {
  return (
    <section id="vision" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-6">
            01 — ABOUT ZYBYTEE
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.03em] text-gradient">
            A company preparing
            <br />
            for the next
            <span className="text-gradient-accent"> technological civilization.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-10 max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              We architect intelligent systems, autonomous software, and
              boundary-less digital infrastructure — designed to think,
              adapt, and evolve alongside humanity.
            </p>
            <p>
              From AI and automation to cloud and creator tooling, every
              Zybytee product is a deliberate step toward a more
              intelligent, more elegant, more capable future.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              { k: "Intelligence", v: "Native AI" },
              { k: "Infrastructure", v: "Planetary" },
              { k: "Design", v: "Cinematic" },
              { k: "Horizon", v: "Next Era" },
            ].map((s) => (
              <div key={s.k} className="bg-background p-6">
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  {s.k.toUpperCase()}
                </div>
                <div className="mt-2 font-display text-xl font-medium">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
