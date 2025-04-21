import { Link } from 'react-router-dom'
import schedule from '../data/schedule.json'
import { useMySchedule } from '../context/MyScheduleContext.jsx'
import SessionCard from '../components/SessionCard.jsx'

export default function MySchedule() {
  const { saved, clear } = useMySchedule()
  const mine = schedule.filter((s) => saved.includes(s.id))

  if (!mine.length) {
    return (
      <div className="empty">
        <h1>My Schedule</h1>
        <p>You haven't added any sessions yet.</p>
        <Link to="/schedule" className="btn">Browse the schedule</Link>
      </div>
    )
  }

  return (
    <>
      <div className="section-head">
        <h1>My Schedule</h1>
        <button className="btn btn-outline" onClick={clear}>Clear all</button>
      </div>
      {[1, 2].map((day) => {
        const daySessions = mine.filter((s) => s.day === day).sort((a, b) => a.time.localeCompare(b.time))
