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
