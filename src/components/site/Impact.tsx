import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => {
    if (to >= 1000) return (v / 1000).toFixed(1) + "K";
    return Math.round(v).toString();
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  { v: 1, s: "B+", label: "Future minds we're building for" },
  { v: 12, s: "", label: "Intelligent products in motion" },
  { v: 195, s: "", label: "Countries within reach" },
  { v: 100, s: "%", label: "AI-native by design" },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-32 sm:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-6">
            05 — GLOBAL IMPACT
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gradient max-w-3xl leading-[1.05]">
            Building technology for
            <span className="text-gradient-accent"> the next billion minds.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 sm:p-10 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-electric/0 group-hover:from-electric/[0.06] group-hover:to-transparent transition-all duration-500" />
              <div className="relative font-display text-5xl sm:text-6xl font-semibold text-gradient-accent">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="relative mt-4 text-sm text-muted-foreground max-w-[200px]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
