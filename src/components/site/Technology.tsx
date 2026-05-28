import { motion } from "framer-motion";

export function Technology() {
  return (
    <section id="technology" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-6">
            04 — INTELLIGENCE LAYER
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient max-w-3xl leading-[1.05]">
            Intelligence,
            <span className="text-gradient-accent"> rendered visible.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-4">
          {/* Holographic dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative rounded-3xl glass glow-border overflow-hidden p-8 min-h-[420px]"
          >
            <div className="absolute inset-0 grid-bg animate-grid opacity-40" />
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-cyan/20 blur-[100px]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  ZYBYTEE.AI / NEURAL.CORE
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-glow animate-pulse" style={{ animationDelay: "0.6s" }} />
                </div>
              </div>

              {/* Neural waves */}
              <div className="mt-10 space-y-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="font-mono text-[10px] text-muted-foreground w-10">
                      0{i + 1}
                    </div>
                    <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${30 + ((i * 37) % 60)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan via-electric to-violet-glow"
                      />
                    </div>
                    <div className="font-mono text-[10px] text-foreground/70 w-10 text-right">
                      {(0.7 + i * 0.04).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {["TENSOR.OPS", "AGENT.MESH", "CONTEXT.WIN"].map((t, i) => (
                  <div key={t} className="rounded-xl glass p-3">
                    <div className="font-mono text-[9px] text-muted-foreground tracking-wider">{t}</div>
                    <div className="font-display text-lg mt-1">
                      {["12.4M", "∞", "1.2T"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Code stream */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-3xl glass glow-border overflow-hidden p-6 min-h-[420px]"
          >
            <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mb-6">
              ZYBYTEE.OS / STREAM
            </div>
            <div className="font-mono text-xs leading-relaxed space-y-1 text-muted-foreground">
              {[
                ["import", " { Intelligence } ", "from 'zybytee/core'"],
                ["", "", ""],
                ["const ", "future", " = await Intelligence.synthesize({"],
                ["  ", "context: ", "'humanity',"],
                ["  ", "horizon: ", "'next-era',"],
                ["  ", "ambition: ", "Infinity,"],
                ["})", "", ""],
                ["", "", ""],
                ["future", ".deploy(", "'planet')"],
                ["// → ", "deployed", " in 0.04s"],
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  <span className="text-cyan">{line[0]}</span>
                  <span className="text-foreground">{line[1]}</span>
                  <span className="text-violet-glow">{line[2]}</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2 rounded-full glass px-3 py-2 text-[10px] font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="text-muted-foreground">LIVE</span>
              <span className="ml-auto text-foreground/70">99.99% UPTIME</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
