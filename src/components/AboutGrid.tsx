import type { CSSProperties } from 'react'
import { MapPin, Star } from '@/components/slab'
import { profile } from '@/data/profile'

const REACT  = { src: '/icons/react.svg',        name: 'React' }
const FIGMA  = { src: '/icons/figma.svg',         name: 'Figma' }
const GODOT  = { src: '/icons/godotengine.svg',   name: 'Godot' }
const VSCODE = { src: '/icons/vscode.svg',        name: 'VS Code' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Front-end development', marks: [REACT, VSCODE] },
  { index: '02', title: 'UI/UX design',           marks: [FIGMA] },
  { index: '03', title: 'Game visuals and audio', marks: [GODOT] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I\u2019m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Front-end developer and UI/UX designer, studying Computer Science at UP Cebu.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build interfaces and shape how they look and feel.
            <span> From React screens to game art and sound, I like seeing a project through.</span>
          </p>

          <p className="agrid__note">
            <strong>3rd-year Computer Science student at UP Cebu.</strong> I led the front end of
            InklusiJobs, a PWD employment platform (top 15 of 50+ hackathon teams), and the visual
            and audio design of Last Moon, a networked 1v1 strategy game.{' '}
            <a className="agrid__link" href="https://github.com/methuselahnoreen">
              See my code on GitHub
            </a>
            .
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <Star size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">University Scholar</span>
                <span className="agrid__cell-meta">UP Cebu — A.Y. 2025–2026, 1st Sem</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <Star size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">College Scholar</span>
                <span className="agrid__cell-meta">UP Cebu — A.Y. 2025–2026, 2nd Sem</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Open to joining a team</span>
              </span>
            </span>

            <div className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">UP Computer Science Guild</span>
                <span className="agrid__cell-meta">Logistics · Secretariat · Partnerships &amp; Linkages</span>
              </span>
            </div>

            <div className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">DEVCON Cebu</span>
                <span className="agrid__cell-meta">Programs Committee</span>
              </span>
            </div>

            <div className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Hacktoberfest 2026</span>
                <span className="agrid__cell-meta">Volunteer — Logistics Committee</span>
              </span>
            </div>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={`Portrait of ${profile.name}`}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

