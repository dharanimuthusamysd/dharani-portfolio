import { useState } from 'react'
import { profile } from '../data/portfolioData'

function FlapTitle({ text }) {
  return (
    <h1 className="flap-title" aria-label={text}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="char"
          style={{ animationDelay: `${i * 0.035}s` }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </h1>
  )
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Open to work · Based in India</p>
            <FlapTitle text={profile.name} />
            <p className="hero-role">{profile.role}</p>
            <p className="hero-sub">{profile.tagline}</p>

            <div className="board-row" role="table" aria-label="Availability status">
              <div className="board-cell">
                <div className="label">Status</div>
                <div className="value green">{profile.status}</div>
              </div>
              <div className="board-cell">
                <div className="label">Stack</div>
                <div className="value">{profile.stack}</div>
              </div>
              <div className="board-cell">
                <div className="label">Experience</div>
                <div className="value">{profile.experience}</div>
              </div>
            </div>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                Get In Touch
              </a>
            </div>
          </div>

          <div className="id-card">
            <div className="id-photo">
              {imgError ? (
                <div className="fallback">Photo not found</div>
              ) : (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            <div className="id-caption">
              <span>{profile.name}</span>
              <span>FULL STACK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
