import { tickerItems } from '../data/portfolioData'

function Item({ item }) {
  if (typeof item === 'string') {
    return <span className="ticker-item">{item}</span>
  }
  return (
    <span className="ticker-item">
      <strong>{item.bold}</strong> {item.rest}
    </span>
  )
}

export default function Ticker() {
  // Render the list twice back-to-back for a seamless infinite scroll loop
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  )
}
