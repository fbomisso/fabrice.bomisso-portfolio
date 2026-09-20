"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold text-blue-600"
        >
          Fabrice BOMISSO
        </a>

        {/* Navigation Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-slate-700 transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Bouton hamburger Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-3xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`py-4 text-lg text-slate-700 transition hover:text-blue-600 ${
                  index < navLinks.length - 1
                    ? "border-b border-slate-100"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4 flex justify-center border-t border-slate-100 pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
