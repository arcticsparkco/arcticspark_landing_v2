import { Zap } from "lucide-react";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-arctic-border bg-arctic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: brand */}
        <div className="flex items-center gap-2 text-arctic-muted">
          <Zap size={14} className="text-arctic-cyan" aria-hidden />
          <span className="text-sm">© {year} Arctic Spark</span>
        </div>

        {/* Right: links */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {footerLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-arctic-muted hover:text-arctic-cyan transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
