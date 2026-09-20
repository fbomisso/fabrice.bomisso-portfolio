import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { contact } from "@/data/contact";
import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface-alt py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Restons en contact
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Vous pouvez me contacter ou retrouver mon parcours et mes projets
            à travers les différents canaux ci-dessous.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Mes coordonnées
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Je suis disponible pour échanger autour d'opportunités
              professionnelles, de projets Data et de collaborations.
            </p>

            <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-surface shadow-sm dark:divide-slate-700 dark:border-slate-700">

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-4 p-6 transition first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40">
                  <FaEnvelope className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Email
                  </h4>
                  <p className="mt-1 truncate text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {contact.email}
                  </p>
                </div>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 transition first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40">
                  <FaLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </h4>
                  <p className="mt-1 truncate text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    Fabrice BOMISSO
                  </p>
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 transition first:rounded-t-2xl last:rounded-b-2xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40">
                  <FaGithub className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    GitHub
                  </h4>
                  <p className="mt-1 truncate text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    fbomisso
                  </p>
                </div>
              </a>

            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Envoyer un message
            </h3>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
