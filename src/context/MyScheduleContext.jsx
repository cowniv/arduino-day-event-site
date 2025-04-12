import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const MyScheduleContext = createContext(null)

export function MyScheduleProvider({ children }) {
  const [saved, setSaved] = useLocalStorage('arduino-day:my-schedule', [])

