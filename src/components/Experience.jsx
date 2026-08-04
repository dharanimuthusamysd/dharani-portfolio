import { experience } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const headRef = useReveal()
  const lineRef = useReveal()

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <p className="section-tag">03 · Experience</p>
          <h2 className="section-title">The Route So Far</h2>
        </div>
        <div className="route-line reveal" ref={lineRef}>
          <div className="route-stop">
            <div className="route-meta">
              {experience.period.replace(`— ${experience.status}`, '—')}{' '}
              <span className="status">{experience.status}</span>
            </div>
            <h3 className="route-title">{experience.role}</h3>
            <p className="route-org">{experience.org}</p>
            <ul className="route-list">
              {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
