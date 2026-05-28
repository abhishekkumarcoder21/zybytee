import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-40 sm:py-56 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-electric/[0.12] blur-[140px]" />
      </motion.div>
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <motion.div
        style={{ opacity }}
        className="relative max-w-5xl mx-auto px-6 text-center"
      >
        <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-8">
          03 — OUR VISION
        </div>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl font-semibold leading-[0.98] tracking-[-0.04em] text-gradient">
          We are not building apps.
          <br />
          <span className="text-gradient-accent">We are building the future.</span>
        </h2>
        <p className="mt-12 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          A future where intelligence is ambient, software is alive, and human
          potential is no longer constrained by the limits of the tools we
          inherited. Zybytee exists to build that world — quietly, deliberately,
          and at planetary scale.
        </p>
      </motion.div>
    </section>
  );
}
