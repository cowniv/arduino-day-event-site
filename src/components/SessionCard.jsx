import { Link } from 'react-router-dom'
import speakers from '../data/speakers.json'
import { useMySchedule } from '../context/MyScheduleContext.jsx'

export default function SessionCard({ session }) {
  const { isSaved, toggle } = useMySchedule()
  const speaker = speakers.find((s) => s.id === session.speakerId)
  const saved = isSaved(session.id)

  return (
    <article className={saved ? 'session saved' : 'session'}>
      <div className="session-time">
        <strong>{session.time}</strong>
        <small>{session.end}</small>
      </div>
      <div className="session-body">
        <span className="tag">{session.track}</span>
        <h3>{session.title}</h3>
        {speaker && <Link to={`/speakers/${speaker.id}`}>{speaker.name}</Link>}
      </div>
      <button className={saved ? 'btn btn-outline' : 'btn'} onClick={() => toggle(session.id)}>
        {saved ? '✓ Added' : '+ Add'}
      </button>
    </article>
  )
}
