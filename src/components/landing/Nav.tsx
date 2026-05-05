import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Markets", "Invest", "Trade", "About"];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 ${
        scrolled ? "bg-white shadow-[0_1px_20px_rgba(10,22,40,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className={`text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          Nova<span className="text-accent">Capital</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            className={`text-sm font-medium transition-opacity hover:opacity-80 ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Sign In
          </button>
          <button
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-accent text-white hover:brightness-110"
                : "border border-white/70 text-white hover:bg-white/10"
            }`}
          >
            Get Started
          </button>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-16 border-t border-hairline bg-white px-6 py-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-navy"
              >
                {l}
              </a>
            ))}
            <button className="text-left text-base font-medium text-navy">Sign In</button>
            <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
