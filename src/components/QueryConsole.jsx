import React from 'react'

export default function QueryConsole({ scenario, onScenarioChange, onSearch, loading, selectedModule }) {
  return (
    <div className="query-console">
      <label htmlFor="scenario-input" className="query-label">
        Describe the testing scenario <span className="query-label-muted">(optional — leave blank for top matches in this module)</span>
      </label>
      <textarea
        id="scenario-input"
        className="query-input"
        placeholder={`e.g. "participant near the annual contribution limit with an active loan" — for ${selectedModule || 'the selected module'}`}
        value={scenario}
        onChange={(e) => onScenarioChange(e.target.value)}
        rows={3}
      />
      <div className="query-actions">
        <span className="query-console-status">
          {selectedModule ? `Searching within: ${selectedModule}` : 'Select a module to begin'}
        </span>
        <button className="btn-primary" onClick={onSearch} disabled={loading || !selectedModule}>
          {loading ? 'Retrieving…' : 'Find SAT Users'}
        </button>
      </div>
    </div>
  )
}
