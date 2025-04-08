import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { useMySchedule } from '../context/MyScheduleContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/schedule', label: 'Schedule' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/workshops', label: 'Workshops' },
  { to: '/venue', label: 'Venue' },
]

export default function Layout() {
  const { saved } = useMySchedule()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-mark">∞</span> Arduino Day PH
          </Link>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
          <nav className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/my-schedule" className={({ isActive }) => (isActive ? 'pill active' : 'pill')}>
              My Schedule <span className="count">{saved.length}</span>
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="container page">
        <Outlet />
      </main>
      <footer className="footer">
        <p>Arduino Day Philippines 2025 · practice rebuild by Ivy</p>
      </footer>
    </>
  )
}
