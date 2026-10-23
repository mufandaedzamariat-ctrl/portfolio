import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const footerData = {
  profile: {
    name: "Maria Tanaka Mufandaedza",
    slogan: "Building practical technology. Engineering a better future.",
    logo: "/logo.jpg",
    status: "Open for opportunities",
  },
  routes: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maria-tanaka-mufandaedza-814423409",
    },
    { label: "GitHub", href: "https://github.com/mariatanaka" },
  ],
  contact: {
    email: "mufandaedzamariat@gmail.com",
    phone: "+90 548 859 89 97",
  },
};

export function Footer() {
  const { setContact } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-app-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 pb-10">
          {/* Column 1: Identity & Brand (Spans 6 columns on large layouts) */}
          <div className="flex flex-col items-start space-y-4 md:col-span-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={footerData.profile.logo}
                alt="Maria Tanaka Logo"
                className="h-8 w-8 rounded-md object-cover border border-app-border transition-transform group-hover:scale-105"
              />
              <span className="font-mono text-sm font-bold tracking-tight text-app-heading">
                {footerData.profile.name}
              </span>
            </Link>

            <p className="max-w-xs text-xs leading-relaxed text-app-text-muted">
              {footerData.profile.slogan}
            </p>

            {/* Live Availability Badge Indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {footerData.profile.status}
            </div>
          </div>

          {/* Column 2: Structural Navigation Map (Spans 3 columns) */}
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-app-heading block mb-3">
              Navigation
            </span>
            <ul className="space-y-2">
              {footerData.routes.map((r) => (
                <li key={r.href}>
                  <Link
                    to={r.href}
                    className="text-xs text-app-text-muted transition-colors hover:text-app-brand"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setContact(true)}
                  className="cursor-pointer text-xs text-app-text-muted transition-colors hover:text-app-brand text-left"
                >
                  Contact Form
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Networks & Direct Connection Matrix (Spans 3 columns) */}
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-app-heading block mb-3">
              Connect
            </span>
            <ul className="space-y-2">
              {footerData.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-app-text-muted transition-colors hover:text-app-brand"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-xs text-app-text-muted transition-colors hover:text-app-brand block truncate max-w-[200px]"
                >
                  {footerData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Attribution Segment */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-app-border/40 pt-6 sm:flex-row text-center sm:text-left">
          <span className="text-[11px] text-app-text-muted font-mono">
            © {currentYear} {footerData.profile.name}. All rights reserved.
          </span>
          <span className="text-[10px] text-app-text-muted/60 font-mono">
            Designed & Engineered using React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
