import React from 'react'
import MatchGauge from './MatchGauge.jsx'

export default function UserCard({ result, rank }) {
  const { user, matchScore, matchReason } = result
  return (
    <article className="user-card">
      <div className="user-card-top">
        <div className="user-card-rank">#{rank}</div>
        <MatchGauge score={matchScore} />
      </div>

      <h3 className="user-card-id">{user.id}</h3>
      <p className="user-card-client">{user.clientName} · <span className="muted">{user.planType}</span></p>

      <div className="user-card-tags">
        {user.roles?.map((r) => (
          <span key={r} className="tag">{r}</span>
        ))}
        <span className={`tag tag-quality ${user.dataQuality === 'High' ? 'quality-high' : 'quality-medium'}`}>
          {user.dataQuality} data quality
        </span>
      </div>

      <p className="user-card-reason">{matchReason}</p>

      <div className="user-card-footer">
        <span>Last validated {user.lastValidated}</span>
      </div>
    </article>
  )
}
