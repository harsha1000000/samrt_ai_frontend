import React from 'react'

export default function MatchGauge({ score }) {
  const clamped = Math.max(0, Math.min(100, score))
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (clamped / 100) * circumference
  const gradientId = `gauge-gradient-${Math.round(clamped)}`

  return (
    <div className="match-gauge" role="img" aria-label={`Match score ${clamped.toFixed(0)} percent`}>
      <svg width="76" height="76" viewBox="0 0 76 76">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-signal)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>
        <circle cx="38" cy="38" r={radius} className="gauge-track" />
        <circle
          cx="38"
          cy="38"
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 38 38)"
          className="gauge-fill"
        />
      </svg>
      <div className="gauge-label">
        <span className="gauge-value">{clamped.toFixed(0)}</span>
        <span className="gauge-unit">%</span>
      </div>
    </div>
  )
}
