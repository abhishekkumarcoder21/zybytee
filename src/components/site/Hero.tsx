import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 100;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 100;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Aurora glow following cursor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at calc(50% + var(--mx,0px)) calc(40% + var(--my,0px)), oklch(0.7 0.22 245 / 0.25), transparent 60%)",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-electric/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-violet-glow/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan/[0.08] blur-[100px]" />

      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-foreground/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `float ${4 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
              opacity: 0.2 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono tracking-widest text-muted-foreground mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          INITIALIZING THE NEXT ERA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-gradient"
        >
          Engineering
          <br />
          <span className="relative inline-block">
            <span className="text-gradient-accent">The Future.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="absolute -bottom-2 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-cyan to-transparent"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Zybytee is building futuristic software, AI systems, digital
          infrastructure, and intelligent products for the next era of humanity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#vision"
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium overflow-hidden shadow-glow"
          >
            <span className="relative z-10">Explore Vision</span>
            <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan via-electric to-violet-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 rounded-full glass glow-border px-7 py-3.5 text-sm font-medium hover:bg-white/[0.04] transition"
          >
            Enter Ecosystem
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-muted-foreground"
        >
          SCROLL
          <span className="block h-10 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
