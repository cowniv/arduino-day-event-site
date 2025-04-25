import { Link } from 'react-router-dom'
import speakers from '../data/speakers.json'
import Avatar from '../components/Avatar.jsx'

export default function Speakers() {
  return (
    <>
      <h1>Speakers</h1>
      <p className="lead">Makers, engineers and students sharing what they've built.</p>
      <div className="grid">
        {speakers.map((s) => (
          <Link to={`/speakers/${s.id}`} key={s.id} className="card speaker-card">
            <Avatar name={s.name} />
            <h3>{s.name}</h3>
            <p>{s.title}</p>
            <small>{s.org}</small>
          </Link>
        ))}
      </div>
    </>
  )
}
