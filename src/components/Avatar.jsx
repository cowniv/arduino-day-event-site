export default function Avatar({ name, size = 80 }) {
  const initials = name.split(' ').map((n) => n[0]).join('')
  return (
    <div className="avatar" style={{ width: size, height: size, fontSize: size / 2.8 }}>
      {initials}
    </div>
  )
}
