import { Link, useParams } from 'react-router-dom'
import speakers from '../data/speakers.json'
import schedule from '../data/schedule.json'
import Avatar from '../components/Avatar.jsx'
import SessionCard from '../components/SessionCard.jsx'
import NotFound from './NotFound.jsx'

export default function SpeakerDetail() {
  const { id } = useParams()
  const speaker = speakers.find((s) => s.id === id)

  if (!speaker) return <NotFound />

  const sessions = schedule.filter((s) => s.speakerId === id)

  return (
    <>
      <Link to="/speakers" className="back">← All speakers</Link>
      <div className="speaker-detail">
        <Avatar name={speaker.name} size={140} />
        <div>
          <h1>{speaker.name}</h1>
          <p className="lead">{speaker.title} · {speaker.org}</p>
          <p>{speaker.bio}</p>
        </div>
      </div>
      <h2>Sessions</h2>
      <div className="session-list">
        {sessions.map((s) => <SessionCard key={s.id} session={s} />)}
      </div>
    </>
  )
}
