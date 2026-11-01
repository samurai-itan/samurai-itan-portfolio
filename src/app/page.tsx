
"use client";

import { useState } from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
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
  const [lanternOn, setLanternOn] = useState(false);

  return (
    <main className={`page-shell ${lanternOn ? "lantern-active" : ""}`}>
      <header className="topbar">
        <button
          type="button"
          className={`lantern-button ${lanternOn ? "is-on" : ""}`}
          onClick={() => setLanternOn((previous) => !previous)}
          aria-label="Toggle lantern light"
          aria-pressed={lanternOn}
        >
          <img src="/images/lantern.png" alt="" />
        </button>

        <nav aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <SectionLabel number="01">
            {portfolio.role.toUpperCase()}
          </SectionLabel>

          <img
            src="/images/samurai_text.png"
            alt="Samurai Itan"
            className="hero-name-image"
          />

          <p className="hero-headline">{portfolio.headline}</p>
          <p className="hero-intro">{portfolio.intro}</p>
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
        <a href="#top">
          BACK TO TOP <ArrowUp />
        </a>
      </footer>
    </main>
  );
}
