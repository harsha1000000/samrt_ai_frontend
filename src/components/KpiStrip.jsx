import React from 'react'

export default function KpiStrip({ kpis }) {
  if (!kpis || kpis.length === 0) return null
  return (
    <section className="kpi-strip" aria-label="Key performance indicators">
      {kpis.map((k) => (
        <div className="kpi-card" key={k.label}>
          <div className="kpi-target">{k.target}</div>
          <div className="kpi-label">{k.label}</div>
          <div className="kpi-detail">{k.detail}</div>
        </div>
      ))}
    </section>
  )
}
