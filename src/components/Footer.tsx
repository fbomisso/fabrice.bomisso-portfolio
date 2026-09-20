import { contact } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Contenu principal */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Identité */}
          <div>
            <h3 className="text-xl font-bold">
              Fabrice BOMISSO
            </h3>

            <p className="mt-3 text-slate-400">
              Data Analyst | Power BI · Excel · Python
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold">
              Navigation
            </h3>

            <nav className="mt-4">
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#home"
                    className="transition hover:text-blue-400"
                  >
                    Accueil
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="transition hover:text-blue-400"
                  >
                    À propos
                  </a>
                </li>

                <li>
                  <a
                    href="#skills"
                    className="transition hover:text-blue-400"
                  >
                    Compétences
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className="transition hover:text-blue-400"
                  >
                    Projets
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="transition hover:text-blue-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition hover:text-blue-400"
                >
                  {contact.email}
                </a>
              </li>

              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Fabrice BOMISSO. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}
