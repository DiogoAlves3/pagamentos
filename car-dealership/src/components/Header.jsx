import { useState } from "react";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Estoque", href: "#catalog" },
  { label: "Ofertas", href: "#offers" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="text-2xl font-bold text-primary">
          AutoPrime
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          WhatsApp
        </a>
        {/* mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-primary font-medium"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}