import { profile } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function About() {
  const headRef = useReveal()
  const plateRef = useReveal()

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <p className="section-tag">01 · About</p>
          <h2 className="section-title">Who&apos;s Building This</h2>
        </div>
        <div className="about-plate reveal" ref={plateRef}>
          <p>{profile.about}</p>
        </div>
      </div>
    </section>
  )
}
