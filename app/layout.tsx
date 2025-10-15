import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio – Ton Nom",
  description: "Portfolio simple : à propos, projets, loisirs, contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="wrap header">
          <div className="brand">Ton Nom</div>
          <nav className="nav">
            <a href="#about">À propos</a>
            <a href="#projects">Projets</a>
            <a href="#hobbies">Loisirs</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <main className="wrap main">{children}</main>
        <footer className="wrap footer">© {new Date().getFullYear()} Ton Nom</footer>
      </body>
    </html>
  );
}
