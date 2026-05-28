import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Technology", href: "#technology" },
  { label: "Impact", href: "#impact" },
  { label: "Careers", href: "#careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-elevated" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-cyan to-electric opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-[3px] rounded-[5px] bg-background" />
              <div className="absolute inset-[6px] rounded-[3px] bg-gradient-to-br from-cyan to-violet-glow" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Zybytee
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-cyan to-electric group-hover:w-6 transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium glass hover:bg-white/[0.06] transition"
            >
              Enter Ecosystem
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden h-9 w-9 grid place-items-center rounded-full glass"
              aria-label="Menu"
            >
              <div className="space-y-1">
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-4 bg-foreground" />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
