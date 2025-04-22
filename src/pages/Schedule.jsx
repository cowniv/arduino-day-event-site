import { useState } from 'react'
import schedule from '../data/schedule.json'
import SessionCard from '../components/SessionCard.jsx'

const DAYS = [
  { value: 1, label: 'Day 1 · Sat' },
  { value: 2, label: 'Day 2 · Sun' },
]
const TRACKS = ['All', 'Main Stage', 'Community Hall']

export default function Schedule() {
  const [day, setDay] = useState(1)
  const [track, setTrack] = useState('All')

  const sessions = schedule
    .filter((s) => s.day === day && (track === 'All' || s.track === track))
    .sort((a, b) => a.time.localeCompare(b.time))

  return (
    <>
      <h1>Schedule</h1>
      <div className="tabs" role="tablist">
        {DAYS.map((d) => (
          <button
            key={d.value}
            role="tab"
            aria-selected={day === d.value}
            className={day === d.value ? 'tab active' : 'tab'}
            onClick={() => setDay(d.value)}
          >
            {d.label}
          </button>
        ))}
      </div>
      <div className="chips">
        {TRACKS.map((t) => (
          <button key={t} className={track === t ? 'chip active' : 'chip'} onClick={() => setTrack(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="session-list">
        {sessions.length ? sessions.map((s) => <SessionCard key={s.id} session={s} />) : <p>No sessions here.</p>}
      </div>
    </>
  )
}
