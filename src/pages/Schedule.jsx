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
