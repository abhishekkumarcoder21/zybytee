import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="relative py-40 sm:py-56 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-electric/[0.15] blur-[160px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-violet-glow/[0.15] blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-9xl font-semibold leading-[0.95] tracking-[-0.04em] text-gradient"
        >
          The future has a name.
          <br />
          <span className="text-gradient-accent">Zybytee.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14"
        >
          <a
            href="mailto:hello@zybytee.in"
            className="group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background px-9 py-4 text-base font-medium overflow-hidden shadow-glow"
          >
            <span className="relative z-10">Enter the Ecosystem</span>
            <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan via-electric to-violet-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
