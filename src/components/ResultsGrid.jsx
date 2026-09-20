import React from 'react'
import UserCard from './UserCard.jsx'

export default function ResultsGrid({ results, loading, error, searched }) {
  if (loading) {
    return <div className="results-status">Running retrieval + ranking over the SAT user index…</div>
  }
  if (error) {
    return <div className="results-status results-status-error">{error}</div>
  }
  if (!searched) {
    return (
      <div className="results-status">
        Pick a module and hit <strong>Find SAT Users</strong> to see AI-ranked recommendations.
      </div>
    )
  }
  if (results.length === 0) {
    return <div className="results-status">No SAT users found for this module in the demo dataset.</div>
  }
  return (
    <div className="results-grid">
      {results.map((r, i) => (
        <UserCard key={r.user.id} result={r} rank={i + 1} />
      ))}
    </div>
  )
}
