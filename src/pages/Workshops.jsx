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
          const mine = reserved.includes(w.id)
          const taken = w.taken + (mine ? 1 : 0)
          const left = Math.max(0, w.seats - taken)
          const full = left === 0 && !mine
          const percent = Math.min(100, (taken / w.seats) * 100)

          return (
            <article key={w.id} className="card workshop">
              <img src={w.image} alt="" loading="lazy" />
              <div className="workshop-body">
                <span className="tag">{w.level}</span>
                <h3>{w.title}</h3>
                <small>Day {w.day} · {w.time}</small>
                <p>{w.description}</p>
                <div className="seats">
                  <div className="bar"><div style={{ width: `${percent}%` }} /></div>
