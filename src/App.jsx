import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Schedule from './pages/Schedule.jsx'
import Speakers from './pages/Speakers.jsx'
import SpeakerDetail from './pages/SpeakerDetail.jsx'
import Workshops from './pages/Workshops.jsx'
import Venue from './pages/Venue.jsx'
import MySchedule from './pages/MySchedule.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="speakers" element={<Speakers />} />
