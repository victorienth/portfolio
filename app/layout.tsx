// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Portfolio – Victorien Thomas",
  description: "Portfolio simple : à propos, projets, loisirs, contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="wrap header">
          <div className="brand">Victorien THOMAS</div>

          {/* Navigation */}
          <nav className="nav">
            <a id="nav-about" href="#about">À propos</a>
            <a id="nav-projects" href="#projects">Projets</a>
            <a id="nav-hobbies" href="#hobbies">Loisirs</a>
            <a id="nav-contact" href="#contact">Contact</a>
          </nav>

          {/* Sélecteur de langue */}
          <div className="lang-switcher">
            <button className="lang-btn" data-lang="fr" aria-pressed="true" title="Français">
              <img src="/flags/fr.png" alt="Français" className="flag" /> FR
            </button>
            <button className="lang-btn" data-lang="en" aria-pressed="false" title="English">
              <img src="/flags/gb.png" alt="English" className="flag" /> EN
            </button>
            <button className="lang-btn" data-lang="es" aria-pressed="false" title="Español">
              <img src="/flags/es.png" alt="Español" className="flag" /> ES
            </button>
          </div>
        </header>

        <main className="wrap main">{children}</main>

        <footer className="wrap footer">
          © {new Date().getFullYear()} Victorien THOMAS
        </footer>

        {/* Script client pour changer la langue */}
        <Script id="i18n-header" strategy="afterInteractive">
          {`
            (function () {
              const T = {
                fr: { about: "À propos", projects: "Projets", hobbies: "Loisirs", contact: "Contact" },
                en: { about: "About", projects: "Projects", hobbies: "Hobbies", contact: "Contact" },
                es: { about: "Sobre mí", projects: "Proyectos", hobbies: "Pasatiempos", contact: "Contacto" }
              };

              const $ = id => document.getElementById(id);
              const btns = Array.from(document.querySelectorAll(".lang-btn"));

              function setActive(lang) {
                btns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
              }

              // 🔊 NOUVEAU : prévenir le reste du site
              function broadcast(lang) {
                try { window.dispatchEvent(new CustomEvent("site_lang_changed", { detail: lang })); } catch {}
              }

              function applyLang(lang) {
                const d = T[lang] || T.fr;
                document.documentElement.setAttribute("lang", lang);
                $("nav-about").textContent = d.about;
                $("nav-projects").textContent = d.projects;
                $("nav-hobbies").textContent = d.hobbies;
                $("nav-contact").textContent = d.contact;
                localStorage.setItem("site_lang", lang);
                setActive(lang);
                broadcast(lang); // ← important
              }

              // Charger la langue (URL ?lang=xx > localStorage > fr)
              const urlLang = new URLSearchParams(location.search).get("lang");
              applyLang(urlLang || localStorage.getItem("site_lang") || "fr");

              // Changer au clic
              btns.forEach(btn => {
                btn.addEventListener("click", () => applyLang(btn.dataset.lang || "fr"));
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
