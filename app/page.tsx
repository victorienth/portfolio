export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <span className="small">Disponible pour stage / alternance</span>
          <h1>Bonjour, je suis <span style={{color:"var(--accent)"}}>Ton Nom</span>.</h1>
          <p className="lead">Je conçois des sites simples, rapides et responsives. Voici qui je suis, ce que j’ai fait et comment me contacter.</p>
          <div className="socials">
            <a href="mailto:prenom.nom@email.com">✉️ Email</a>
            <a href="https://github.com/ton-utilisateur" target="_blank" rel="noreferrer">🐙 GitHub</a>
            <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a className="btn" href="/CV_TonNom.pdf" target="_blank" rel="noreferrer">📄 CV</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap grid grid-2">
          <div className="card">
            <h2>À propos</h2>
            <p>Étudiant·e en <strong>Informatique</strong> (IPSA), orienté·e développement web. J’aime les interfaces claires et le code lisible.</p>
            <ul className="list">
              <li><b>Compétences :</b> HTML, CSS, JS, React/Next.js, Git</li>
              <li><b>Objectif :</b> stage/alternance front-end</li>
            </ul>
          </div>
          <div className="card">
            <h2>Coordonnées</h2>
            <p><a href="mailto:prenom.nom@email.com">✉️ Email</a></p>
            <p><a href="https://github.com/ton-utilisateur" target="_blank">🐙 GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/ton-profil" target="_blank">💼 LinkedIn</a></p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="wrap">
          <h2>Projets</h2>
          <div className="grid grid-2">
            <article className="card">
              <h3 style={{marginTop:0}}>Mini-Portfolio</h3>
              <p>Site Next.js minimal (cette page).</p>
              <p><span className="badge">Next.js</span><span className="badge">CSS</span></p>
              <p><a href="#" target="_blank">Repo</a></p>
            </article>
            <article className="card">
              <h3 style={{marginTop:0}}>To-do basique</h3>
              <p>Liste de tâches avec localStorage.</p>
              <p><span className="badge">HTML</span><span className="badge">JS</span></p>
              <p><a href="#" target="_blank">Repo</a></p>
            </article>
            <article className="card">
              <h3 style={{marginTop:0}}>Page vitrine</h3>
              <p>Landing page responsive.</p>
              <p><span className="badge">HTML</span><span className="badge">CSS</span></p>
              <p><a href="#" target="_blank">Repo</a></p>
            </article>
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section id="hobbies">
        <div className="wrap">
          <h2>Loisirs</h2>
          <p className="small">Photo, course à pied, musique — discipline, créativité, esprit d’équipe.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap">
          <h2>Contact</h2>
          {/* Formulaire simple via Formspree (change TON_ID) */}
          <form className="card" style={{display:'grid',gap:'10px'}} action="https://formspree.io/f/TON_ID" method="POST">
            <input className="input" name="name" placeholder="Nom" required />
            <input className="input" name="email" type="email" placeholder="Email" required />
            <textarea className="textarea" name="message" placeholder="Message" required />
            <button className="btn" type="submit">Envoyer</button>
            <span className="small">Ou <a href="mailto:prenom.nom@email.com">mailto</a></span>
          </form>
        </div>
      </section>
    </>
  );
}
