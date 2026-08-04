import { projects } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

function TicketCard({ project }) {
  return (
    <div className="ticket">
      <div className="ticket-top">
        <div className="ticket-no">
          <span>{project.id}</span>
          <span>{project.tag}</span>
        </div>
        <h3 className="ticket-route">{project.title}</h3>
        <p className="ticket-desc">{project.desc}</p>
        <div className="ticket-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
      <div className="perforation" />
      <div className="ticket-bottom">
        <div className="barcode" />
        <span className="ticket-status">{project.status}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <p className="section-tag">04 · Projects</p>
          <h2 className="section-title">Boarding Passes</h2>
        </div>
        <div className="ticket-grid reveal" ref={gridRef}>
          {projects.map((p) => (
            <TicketCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
