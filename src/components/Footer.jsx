import { profile } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Footer() {
  const passRef = useReveal()

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="pass reveal" ref={passRef}>
          <div className="pass-main">
            <p className="pass-eyebrow">Final Call</p>
            <h2>Let&apos;s Build Something</h2>
            <p>
              Open to full-time roles, freelance projects, and anything in between. Reach
              out — usually reply within a day.
            </p>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email Me
            </a>
          </div>
          <div className="pass-stub">
            <a className="contact-link" href={`tel:${profile.phone}`}>
              <span className="k">Phone</span> {profile.phone}
            </a>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <span className="k">Email</span> {profile.email}
            </a>
            <a
              className="contact-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="k">LinkedIn</span> /dharani-muthusamysd
            </a>
            <a
              className="contact-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="k">GitHub</span> /dharanimuthusamysd
            </a>
          </div>
        </div>
        <p className="foot-note">
          © {new Date().getFullYear()} Dharani M · Built &amp; boarded with React — one flap
          at a time.
        </p>
      </div>
    </footer>
  )
}
