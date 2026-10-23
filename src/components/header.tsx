import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Nav_Data } from "@/data/nav";
import { Menu, X } from "lucide-react"; // Essential icons for responsive toggle

export function Nav() {
  const { theme, toggle, setContact } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu drawer state

  const ThemeIcon =
    theme === "light" ? Nav_Data.theme.light : Nav_Data.theme.dark;

  const handleCtaClick = () => {
    setContact(true);
    setIsOpen(false); // Close mobile drawer on action click
  };

  return (
    <header className="sticky top-0 z-50 border-b border-app-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left Side: Brand Logo block */}
        <Link to="/" className="flex flex-col leading-tight shrink-0">
          <span className="text-sm sm:text-base font-bold tracking-tight text-app-heading">
            {Nav_Data.names}
          </span>
          <span className="text-[11px] font-medium text-app-text-muted">
            {Nav_Data.profession}
          </span>
        </Link>

        {/* Right Side: Desktop Navigation Links (Hidden on mobile viewports) */}
        <nav className="hidden md:flex items-center gap-6">
          {Nav_Data.links.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-app-brand"
                    : "text-app-text-muted hover:text-app-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Action Call Button */}
          <button
            type="button"
            onClick={handleCtaClick}
            className="cursor-pointer rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
          >
            {Nav_Data.cta}
          </button>

          {/* Theme Toggler Utility */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="cursor-pointer rounded-full p-2 text-app-text-muted transition-colors hover:bg-secondary hover:text-app-text"
          >
            <ThemeIcon className="h-4 w-4" />
          </button>
        </nav>

        {/* Mobile Viewport Utility Bar (Hidden on desktop viewports) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Quick theme trigger accessible on mobile navbar */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="cursor-pointer rounded-full p-2 text-app-text-muted"
          >
            <ThemeIcon className="h-4 w-4" />
          </button>

          {/* Hamburger Drawer Action Button Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open navigation menu"
            className="cursor-pointer rounded-lg p-2 text-app-text-muted hover:bg-secondary hover:text-app-text transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Overlay/Drawer Menu */}
      {isOpen && (
        <div className="border-t border-app-border bg-background px-4 py-4 md:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {Nav_Data.links.map((item) => (
              <NavLink
                key={item.link}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold py-1 transition-colors ${
                    isActive ? "text-app-brand" : "text-app-text-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Primary Action Button placed on bottom of mobile menu stack */}
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full text-center cursor-pointer rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition active:scale-[0.99]"
            >
              {Nav_Data.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
