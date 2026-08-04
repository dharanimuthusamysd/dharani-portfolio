import { skillGroups } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Skills() {
  const headRef = useReveal()
  const boardRef = useReveal()

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <p className="section-tag">02 · Skills</p>
          <h2 className="section-title">The Toolkit</h2>
        </div>
        <div className="skill-board reveal" ref={boardRef}>
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.label}>
              <div className="skill-row-label">{group.label}</div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
