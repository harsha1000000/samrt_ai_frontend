import React from 'react'

const MODULE_HINTS = {
  RSM: 'Recordkeeping & Statement Management',
  CMAX: 'Client Maximizer — plan admin & payroll',
  RR: 'Retirement Readiness scoring',
  'Paycheck Deduction': 'Deduction elections & payroll sync',
  Contributions: 'Employee / employer / true-up contributions',
}

export default function ModuleSelector({ modules, selected, onSelect }) {
  return (
    <div className="module-selector" role="tablist" aria-label="Peregrine module">
      {modules.map((m) => (
        <button
          key={m}
          role="tab"
          aria-selected={selected === m}
          className={`module-pill ${selected === m ? 'active' : ''}`}
          onClick={() => onSelect(m)}
        >
          <span className="module-pill-name">{m}</span>
          <span className="module-pill-hint">{MODULE_HINTS[m] || 'Peregrine module'}</span>
        </button>
      ))}
    </div>
  )
}
