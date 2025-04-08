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
