import { Link, useParams } from 'react-router-dom'
import speakers from '../data/speakers.json'
import schedule from '../data/schedule.json'
import Avatar from '../components/Avatar.jsx'
import SessionCard from '../components/SessionCard.jsx'
import NotFound from './NotFound.jsx'

export default function SpeakerDetail() {
  const { id } = useParams()
  const speaker = speakers.find((s) => s.id === id)

