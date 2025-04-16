import { Link } from 'react-router-dom'
import speakers from '../data/speakers.json'
import workshops from '../data/workshops.json'
import schedule from '../data/schedule.json'
import Avatar from '../components/Avatar.jsx'

export default function Home() {
  const stats = [
    { value: schedule.length, label: 'Sessions' },
    { value: speakers.length, label: 'Speakers' },
    { value: workshops.length, label: 'Workshops' },
    { value: 2, label: 'Days' },
  ]

  return (
    <>
      <section className="hero">
        <p className="eyebrow">April 2025 · Manila</p>
        <h1>Arduino Day <span>Philippines</span></h1>
        <p>Two days of talks, hands-on workshops and student projects celebrating open-source hardware.</p>
        <div className="actions">
          <Link to="/schedule" className="btn">View schedule</Link>
          <Link to="/workshops" className="btn btn-outline">Reserve a workshop</Link>
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section>
        <div className="section-head">
          <h2>Featured speakers</h2>
          <Link to="/speakers">See all →</Link>
        </div>
        <div className="grid">
          {speakers.slice(0, 3).map((s) => (
            <Link to={`/speakers/${s.id}`} key={s.id} className="card speaker-card">
              <Avatar name={s.name} />
              <h3>{s.name}</h3>
              <p>{s.topic}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
