import React from 'react'

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="15.5" stroke="var(--accent-signal)" strokeWidth="1.5" />
            <circle cx="17" cy="17" r="9.5" stroke="var(--accent-secondary)" strokeWidth="1.5" />
            <circle cx="17" cy="17" r="2.4" fill="var(--accent-signal)" />
          </svg>
        </div>
        <div>
          <h1>SmartSAT AI</h1>
          <p className="brand-tagline">Intelligent Module-Based Test User Discovery · Peregrine</p>
        </div>
      </div>
      <div className="brand-badges">
        <span className="pill pill-ghost">RAG</span>
        <span className="pill pill-ghost">Semantic Search</span>
        <span className="pill pill-ghost">Generative AI</span>
      </div>
    </header>
  )
}
