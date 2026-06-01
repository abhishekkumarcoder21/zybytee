export function Footer() {
  const cols = [
    {
      title: "Products",
      links: [
        { label: "Zybytee Business", href: "https://business.zybytee.in", external: true },
      ],
    },
    {
      title: "Ecosystem",
      links: [
        { label: "Zybytee AI", href: "#" },
        { label: "Zybytee Cloud", href: "#" },
        { label: "Zybytee OS", href: "#" },
        { label: "Zybytee Labs", href: "#" },
        { label: "Zybytee Studio", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Vision", href: "#vision" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#cta" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Manifesto", href: "#" },
        { label: "Research", href: "#" },
        { label: "Brand", href: "#" },
        { label: "Legal", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative h-7 w-7">
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-cyan to-electric" />
                <div className="absolute inset-[3px] rounded-[5px] bg-background" />
                <div className="absolute inset-[6px] rounded-[3px] bg-gradient-to-br from-cyan to-violet-glow" />
              </div>
              <span className="font-display text-lg font-semibold">Zybytee</span>
            </div>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Building the future through software, AI, intelligence,
              and technology — for the next era of humanity.
            </p>
            <div className="mt-8 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              ZYBYTEE.IN
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                {c.title.toUpperCase()}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-foreground/80 hover:text-foreground transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} ZYBYTEE — ALL FUTURES RESERVED.
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            SYSTEMS ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
