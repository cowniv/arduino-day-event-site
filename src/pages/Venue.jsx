const tips = [
  { title: 'By LRT-2', text: 'Get off at Pureza Station, then a short walk or jeep ride.' },
  { title: 'By jeepney', text: 'Take any Sta. Mesa-bound route and drop off near the campus gate.' },
  { title: 'Bring', text: 'Valid ID, your laptop with Arduino IDE installed, and a USB cable if you have one.' },
]

export default function Venue() {
  return (
    <>
      <h1>Venue</h1>
      <p className="lead">University campus, Sta. Mesa, Manila (placeholder venue for this rebuild).</p>
      <div className="venue">
        <iframe
          title="Venue map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=121.005%2C14.594%2C121.018%2C14.603&layer=mapnik"
          loading="lazy"
        />
        <div className="venue-info">
          {tips.map((t) => (
            <div key={t.title} className="card">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
