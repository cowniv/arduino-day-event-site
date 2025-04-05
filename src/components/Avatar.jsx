export default function Avatar({ name, size = 80 }) {
  const initials = name.split(' ').map((n) => n[0]).join('')
  return (
