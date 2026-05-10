"use client";

import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-arctic-bg/95 backdrop-blur-md border-b border-arctic-border shadow-[0_1px_20px_rgba(0,212,255,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Zap
            size={20}
            className="text-arctic-cyan group-hover:text-arctic-gold transition-colors duration-200"
            aria-hidden
          />
          <span className="font-bold text-lg tracking-tight text-arctic-white group-hover:text-arctic-cyan transition-colors duration-200">
            Arctic Spark
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className="text-sm font-medium text-arctic-muted hover:text-arctic-cyan transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-arctic-cyan group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
          <li>
            <Button
              size="sm"
              onClick={() => handleNavClick("#contact")}
              className="ml-2"
            >
              Get in Touch
            </Button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-arctic-white hover:text-arctic-cyan transition-colors p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-arctic-bg/98 backdrop-blur-md border-b border-arctic-border px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="w-full text-left px-3 py-3 text-arctic-muted hover:text-arctic-cyan hover:bg-arctic-surface rounded-lg transition-all duration-200 font-medium"
            >
              {label}
            </button>
          ))}
          <Button
            className="mt-2 w-full"
            onClick={() => handleNavClick("#contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
