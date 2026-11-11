
const principles = [
  {
    number: "01",
    title: "Understand",
    description: "Understand what drives you, what you value, and how you prefer to work.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Discover the many disciplines and possibilities within technology.",
  },
  {
    number: "03",
    title: "Experiment",
    description: "Move beyond assumptions. Experience a direction before choosing it.",
  },
];

function CompassMark() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="compass-mark"
      aria-hidden="true"
    >
      <circle cx="160" cy="160" r="125" stroke="currentColor" opacity=".14" />
      <circle cx="160" cy="160" r="99" stroke="currentColor" opacity=".24" strokeDasharray="2 8" />
      <circle cx="160" cy="160" r="72" stroke="currentColor" opacity=".12" />
      <path d="M160 18V45M160 275V302M18 160H45M275 160H302" stroke="currentColor" opacity=".5" />
      <path
        d="M160 68L184 145L252 160L184 175L160 252L136 175L68 160L136 145L160 68Z"
        stroke="#C6A66B"
        strokeWidth="1.2"
        fill="url(#gold)"
      />
      <path d="M160 68L160 160L136 145L160 68Z" fill="#E5D0A0" opacity=".8" />
      <path d="M160 160L184 175L160 252L160 160Z" fill="#8A7045" opacity=".75" />
      <circle cx="160" cy="160" r="5" fill="#E5D0A0" />
      <circle cx="160" cy="35" r="2" fill="#C6A66B" />
      <circle cx="285" cy="160" r="2" fill="#C6A66B" />
      <defs>
        <linearGradient id="gold" x1="80" y1="70" x2="240" y2="250">
          <stop stopColor="#E8D6AE" stopOpacity=".08" />
          <stop offset="1" stopColor="#C6A66B" stopOpacity=".02" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a href="/" className="brand" aria-label="Orienta home">
          ORIENTA<span>.</span>
        </a>
        <div className="status">
          <span className="status-dot" />
          <span>AN IDEA IN MOTION</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-art">
          <div className="art-glow" />
          <CompassMark />
          <span className="art-label label-n">N</span>
          <span className="art-label label-e">E</span>
          <span className="art-label label-s">S</span>
          <span className="art-label label-w">W</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            <span /> A NEW PERSPECTIVE ON CAREER DISCOVERY
          </p>

          <h1>
            Find your
            <br />
            <span>direction.</span>
          </h1>

          <p className="hero-description">
            Your future in technology shouldn’t be chosen by trends,
            titles, or expectations. It should begin with understanding
            yourself.
          </p>

          <div className="coming-soon">
            <span className="coming-line" />
            <span>WE’RE FINDING OUR WAY TO YOU</span>
          </div>
        </div>

        <div className="hero-index">
          <span>01 — 03</span>
          <span>THE JOURNEY BEGINS HERE</span>
        </div>
      </section>

      <section className="principles">
        <div className="section-heading">
          <span>THE ORIENTA APPROACH</span>
          <p>Not a destination. A process of discovery.</p>
        </div>

        <div className="principle-grid">
          {principles.map((item) => (
            <article className="principle" key={item.number}>
              <span className="principle-number">{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a href="/" className="footer-brand">
          ORIENTA<span>.</span>
        </a>
        <p>Understand yourself. Explore possibilities.</p>
        <span className="copyright">© 2026 ORIENTA LAB</span>
      </footer>
    </main>
  );
}
