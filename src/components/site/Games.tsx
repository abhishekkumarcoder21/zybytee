import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export function Games() {
  return (
    <section id="games" className="relative py-24 sm:py-32 overflow-hidden noise">
      {/* Background aurora and orbs */}
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-violet-glow/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 h-[450px] w-[450px] rounded-full bg-cyan/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-cyan mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            ENTER THE PLAYGROUND
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-gradient flex items-center gap-3">
            <span>🎮 ZyBytee Games</span>
          </h2>
        </motion.div>

        {/* Premium Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-3xl glass glow-border overflow-hidden p-8 sm:p-12 lg:p-16"
        >
          {/* Animated background grids */}
          <div className="absolute inset-0 grid-bg animate-grid opacity-30 pointer-events-none" />

          {/* High-fidelity gaming-inspired gradient light sources */}
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-glow/30 to-electric/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan/20 blur-[100px] pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-gradient">
                Play Free Browser Games
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Explore a growing collection of arcade, puzzle, racing, strategy and multiplayer games. No downloads required. Play instantly from your browser.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="https://games.zybytee.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold overflow-hidden shadow-glow transition-all hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Gamepad2 className="h-4.5 w-4.5" />
                    Play Games
                  </span>
                  <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan via-electric to-violet-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex items-center justify-center p-8 rounded-2xl glass glow-border bg-black/20"
              >
                {/* Controller SVG and custom styling */}
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan/20 to-violet-glow/30 blur-2xl opacity-60 pointer-events-none" />

                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-cyan drop-shadow-[0_0_20px_oklch(0.7_0.22_245/0.4)]"
                  >
                    {/* Controller Body */}
                    <path
                      d="M20 55C15 50 10 38 12 28C14.5 15.5 30 14 50 14C70 14 85.5 15.5 88 28C90 38 85 50 80 55C75.5 59.5 68 53 62 50C54.5 46.2 45.5 46.2 38 50C32 53 24.5 59.5 20 55Z"
                      fill="url(#controller-bg-grad)"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />

                    {/* Highlights */}
                    <path
                      d="M12 28C14.5 15.5 30 14 50 14C70 14 85.5 15.5 88 28"
                      stroke="url(#accent-glow)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    {/* D-Pad */}
                    <path
                      d="M26 32H34M30 28V36"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Buttons */}
                    <circle cx="68" cy="30" r="2.5" fill="currentColor" />
                    <circle cx="74" cy="34" r="2.5" fill="currentColor" />
                    <circle cx="68" cy="38" r="2.5" fill="currentColor" />
                    <circle cx="62" cy="34" r="2.5" fill="currentColor" />

                    {/* Joysticks */}
                    <circle cx="38" cy="42" r="6" stroke="currentColor" strokeWidth="2" fill="url(#stick-grad)" />
                    <circle cx="38" cy="42" r="2" fill="currentColor" />

                    <circle cx="62" cy="42" r="6" stroke="currentColor" strokeWidth="2" fill="url(#stick-grad)" />
                    <circle cx="62" cy="42" r="2" fill="currentColor" />

                    {/* Start/Select */}
                    <rect x="44" y="24" width="4" height="2" rx="1" fill="currentColor" />
                    <rect x="52" y="24" width="4" height="2" rx="1" fill="currentColor" />

                    <defs>
                      <linearGradient id="controller-bg-grad" x1="50" y1="14" x2="50" y2="58" gradientUnits="userSpaceOnUse">
                        <stop stopColor="oklch(0.17 0.02 260 / 0.8)" />
                        <stop offset="1" stopColor="oklch(0.13 0.015 260 / 0.95)" />
                      </linearGradient>
                      <linearGradient id="stick-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="oklch(0.21 0.025 260)" />
                        <stop offset="1" stopColor="oklch(0.25 0.02 260)" />
                      </linearGradient>
                      <linearGradient id="accent-glow" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="oklch(0.85 0.16 200)" />
                        <stop offset="0.5" stopColor="oklch(0.7 0.22 245)" />
                        <stop offset="1" stopColor="oklch(0.62 0.22 295)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Decorative radar/HUD UI elements */}
                  <div className="absolute inset-2 border border-dashed border-cyan/20 rounded-full animate-spin [animation-duration:15s] pointer-events-none" />
                  <div className="absolute -inset-2 border border-dotted border-violet-glow/30 rounded-full animate-spin [animation-duration:25s] pointer-events-none [animation-direction:reverse]" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
