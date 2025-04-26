import workshops from '../data/workshops.json'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function Workshops() {
  // ids of workshops I reserved a seat in (one seat per person)
  const [reserved, setReserved] = useLocalStorage('arduino-day:workshops', [])

  const toggle = (id) =>
    setReserved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <>
      <h1>Workshops</h1>
      <p className="lead">Hands-on sessions with kits provided. Seats are limited.</p>
      <div className="grid">
        {workshops.map((w) => {
