import { Twitter, Github, Linkedin, Send } from "lucide-react";

const cols = [
  { title: "Platform", links: ["Markets", "Plans", "Calculator", "Dashboard"] },
  { title: "Support", links: ["Help Center", "Contact", "Status", "API Docs"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Compliance"] },
  { title: "Connect", links: ["Twitter", "Telegram", "LinkedIn", "Blog"] },
];

export function Footer() {
  return (
    <footer id="about" className="bg-navy text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="text-xl font-bold text-white">
              Nova<span className="text-accent">Capital</span>
            </div>
            <p className="mt-3 max-w-xs text-sm">
              Institutional-grade crypto investment platform.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="mb-4 text-sm font-semibold text-white">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <div className="text-xs">© 2026 NovaCapital. All rights reserved.</div>
          <div className="flex gap-4">
            {[Twitter, Send, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="transition hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
