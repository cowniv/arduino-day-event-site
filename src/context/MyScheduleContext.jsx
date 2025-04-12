import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const MyScheduleContext = createContext(null)

export function MyScheduleProvider({ children }) {
  const [saved, setSaved] = useLocalStorage('arduino-day:my-schedule', [])

  const isSaved = (id) => saved.includes(id)
  const toggle = (id) =>
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  const clear = () => setSaved([])

  return (
    <MyScheduleContext.Provider value={{ saved, isSaved, toggle, clear }}>
      {children}
