"use client";

import { useEffect, useState } from "react";

const accents = [
  { id: "indigo", label: "Indigo", swatch: "#4f46e5" },
  { id: "cyan", label: "Cyan", swatch: "#0891b2" },
  { id: "violet", label: "Violet", swatch: "#7c3aed" },
];

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [accent, setAccent] = useState("indigo");

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setAccent(document.documentElement.getAttribute("data-accent") || "indigo");
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const changeAccent = (id: string) => {
    setAccent(id);
    if (id === "indigo") {
      document.documentElement.removeAttribute("data-accent");
    } else {
      document.documentElement.setAttribute("data-accent", id);
    }
    localStorage.setItem("accent", id);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
        {accents.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => changeAccent(a.id)}
            aria-label={`Accent ${a.label}`}
            className={`h-5 w-5 rounded-full transition ${
              accent === a.id ? "ring-2 ring-offset-2 ring-slate-400 dark:ring-offset-slate-900" : ""
            }`}
            style={{ backgroundColor: a.swatch }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={toggleDark}
        aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        {isDark ? "\u2600\ufe0f" : "\ud83c\udf19"}
      </button>
    </div>
  );
}
