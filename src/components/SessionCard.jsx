import { Link } from 'react-router-dom'
import speakers from '../data/speakers.json'
import { useMySchedule } from '../context/MyScheduleContext.jsx'

export default function SessionCard({ session }) {
  const { isSaved, toggle } = useMySchedule()
  const speaker = speakers.find((s) => s.id === session.speakerId)
  const saved = isSaved(session.id)

