import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Medal,
  Wrench,
  SealCheck,
  Atom,
  FileJs,
  FileHtml,
  PenNib,
  GameController,
  Image as ImageIcon,
  FilmStrip,
  Palette,
  Terminal,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { websiteFunnel, type Funnel } from '@/data/funnels'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const thumbSrc = (f: Funnel) =>
  `/home/${f.dir ?? 'funnels'}-${f.file.replace('.html', '.jpeg')}`

const PROJECT_SHOTS = websiteFunnel.slice(0, 4)

// One photo of you. Add more paths here and they fan out behind it.
const PHOTOS = [profile.avatarSrc]

/** Tools you actually use, shown as chips. Icons come from phosphoricons.com. */
const SKILLS: { name: string; Icon: Icon }[] = [
  { name: 'React', Icon: Atom },
  { name: 'JavaScript', Icon: FileJs },
  { name: 'HTML/CSS', Icon: FileHtml },
  { name: 'Figma', Icon: PenNib },
  { name: 'Godot 4', Icon: GameController },
  { name: 'Photoshop', Icon: ImageIcon },
  { name: 'Premiere Pro', Icon: FilmStrip },
  { name: 'Canva', Icon: Palette },
  { name: 'C / C++', Icon: Terminal },
]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(SKILLS.length / 2)
  const toolRows = [SKILLS.slice(0, half), SKILLS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the case-study thumbnails drift upward on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="InklusiJobs and Last Moon, as case studies." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((f, i) => (
              <span key={i} className="bento__shot">
                <img src={thumbSrc(f)} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: your photo. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Front-end developer and UI/UX designer at UP Cebu." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* Skills: two chip rows scrolling against each other. */}
      <Link to="/about" className="bento__card bento__card--ai">
        <CardHead Icon={Wrench} title="Skills" desc="Tools I use for code, design, and sound." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.name}-${i}`} className="bento__chip">
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials: the badge that matters, on its plate. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="University Scholar, UP Cebu." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/placeholders/badge.svg" alt="" width={72} height={72} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            University Scholar
          </span>
        </div>
      </Link>
    </nav>
  )
}
