
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight, Mail, Send, ArrowUp } from "lucide-react";
import { portfolio, navigation } from "@/data/portfolio";

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#top">{portfolio.shortName}</a>
        <nav aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <SectionLabel number="01">{portfolio.role.toUpperCase()}</SectionLabel>

          <h1>
            {portfolio.name.split(" ")[0]}
            <br />
            {portfolio.name.split(" ").slice(1).join(" ")}
          </h1>

          <p className="hero-headline">{portfolio.headline}</p>
          <p className="hero-intro">{portfolio.intro}</p>

          <div className="social-row" aria-label="Social links">
            <a
              href="https://x.com/samurai_itan"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
              </svg>
            </a>

            <a
              href="https://t.me/samurai_itan"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <Send />
            </a>

            <a href="mailto:samurai.itan@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <Image
            src="/images/samurai.png"
            alt=""
            fill
            priority
            sizes="(max-width: 760px) 85vw, 48vw"
            className="samurai-image"
          />
        </div>

        <div className="hero-bottom-note">
          <span /> AVAILABLE FOR COMMUNITY LEADERSHIP
        </div>
      </section>

      <section className="content-section experience-section" id="experience">
        <SectionLabel number="02">EXPERIENCE</SectionLabel>

        <div className="experience-grid">
          <div className="experience-column current-column">
            <h2>Current Position</h2>

            <div className="current-cards">
              {portfolio.currentPositions.map((position) => (
                <a
                  className="experience-card current-card"
                  key={position.company}
                  href={position.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${position.company} on X`}
                >
                  <h3>{position.company}</h3>
                  <p className="position-title">{position.title}</p>
                  <i />
                  <p>{position.description}</p>
                  <ArrowUpRight className="card-arrow" />
                </a>
              ))}
            </div>
          </div>

          <div className="experience-column previous-column">
            <h2>Previous Experience</h2>

            <div className="previous-list">
              {portfolio.previousExperience.map((position) => (
                <a
                  className="previous-card"
                  key={position.company}
                  href={position.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${position.company} on X`}
                >
                  <div>
                    <h3>{position.company}</h3>
                    <p>{position.title}</p>
                  </div>
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="track-record">
        <SectionLabel number="03">TRACK RECORD</SectionLabel>

        <div className="stats-grid">
          {portfolio.stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <i />
              <p>{stat.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <SectionLabel number="04">CONTACT</SectionLabel>

        
<div className="contact-grid">
  <div className="contact-heading">
    <h2>Let’s work together.</h2>
    <p>
      Open to new opportunities, collaborations and interesting projects.
    </p>
  </div>

  <div className="contact-content">
    <div className="contact-links">
      {portfolio.contacts.map((contact) => (
        <a
          href={contact.href}
          key={contact.label}
          target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
        >
          <span>{contact.label}</span>
          <strong>{contact.value}</strong>
          <ArrowUpRight />
        </a>
      ))}
    </div>
  </div>
</div>
</section>


      <footer className="footer">
        <span>{portfolio.shortName}</span>
        <a href="#top">
          BACK TO TOP <ArrowUp />
        </a>
        <span>WEB3 COMMUNITY / {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
