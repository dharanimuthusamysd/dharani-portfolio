import { education, certifications } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const headRef = useReveal()
  const degreeRef = useReveal()
  const certsRef = useReveal()

  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <p className="section-tag">05 · Education &amp; Certifications</p>
          <h2 className="section-title">Stamped &amp; Verified</h2>
        </div>

        <div className="stamp-grid reveal" style={{ marginBottom: 20 }} ref={degreeRef}>
          <div className="stamp-card">
            <div className="stamp-badge">Degree</div>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
          </div>
        </div>

        <div className="stamp-grid reveal" ref={certsRef}>
          {certifications.map((cert) => (
            <div className="stamp-card" key={cert.title}>
              <div className="stamp-badge">Certified</div>
              <h3>{cert.title}</h3>
              <p>{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
