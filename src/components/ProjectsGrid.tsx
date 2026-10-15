import { Fragment, useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, CursorClick } from '@/components/slab'
import { FlowIcon, GlobeIcon, SparkIcon } from './ProjectIcons'
import { BarrelPanel, AIWindow } from './ProjectPanels'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { useIsPhone } from '@/hooks/useMediaQuery'

type Project = {
  id: string
  index: string
  title: string
  desc: string
  Icon: ComponentType<{ size?: number }>
  eyebrow: string
  Section: ComponentType
  span?: 2
  logos?: string[]
  Preview: ComponentType
  cat: Cat
}

type Cat = 'work' | 'sites' | 'apps' | 'ai'
const FILTERS: { key: Cat | 'all'; label: string }[] = [
  { key: 'all',   label: 'All'   },
  { key: 'work',  label: 'Work'  },
  { key: 'ai',    label: 'Stack' },
]

const INKLUSI_SHOTS  = ['/projects/inklusijobs-1.png', '/projects/inklusijobs-2.png']
const LASTMOON_SHOTS = ['/projects/last-moon-1.png',   '/projects/last-moon-2.png'  ]

const leaves = (n: StackNode): StackNode[] => (n.children?.length ? n.children.flatMap(leaves) : [n])
const AI_LEAVES = leaves(aiStack)

function InklusiPreview() {
  return (
    <div className="bento__media bento__reel" aria-hidden="true">
      <div className="bento__reel-track">
        {[...INKLUSI_SHOTS, ...INKLUSI_SHOTS].map((src, i) => (
          <span key={i} className="bento__shot">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </span>
        ))}
      </div>
    </div>
  )
}

function LastMoonPreview() {
  return (
    <div className="bento__media bento__reel" aria-hidden="true">
      <div className="bento__reel-track">
        {[...LASTMOON_SHOTS, ...LASTMOON_SHOTS].map((src, i) => (
          <span key={i} className="bento__shot">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </span>
        ))}
      </div>
    </div>
  )
}

function AyaSibPreview() {
  return (
    <div className="bento__media bento__doc" aria-hidden="true">
      <span className="bento__doc-eyebrow">Hacktoberfest 2026</span>
      <span className="bento__doc-title">AyaSib — Bisaya Gov Assistant</span>
      <span className="bento__doc-flow">
        <i>Ask</i>
        <i>Retrieve</i>
        <i>Verify</i>
        <i className="is-on">Answer</i>
      </span>
      <span className="bento__doc-line" />
      <span className="bento__doc-line bento__doc-line--short" />
    </div>
  )
}

function AIPreview() {
  const half = Math.ceil(AI_LEAVES.length / 2)
  const rows  = [AI_LEAVES.slice(0, half), AI_LEAVES.slice(half)]
  return (
    <div className="bento__media bento__chips" aria-hidden="true">
      {rows.map((row, r) => (
        <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
          <div className="bento__chip-track">
            {[...row, ...row].map((n, i) => (
              <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                <n.Icon size={15} weight="duotone" />
                {n.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const REACT_LOGO = '/icons/react.svg'
const FIGMA_LOGO = '/icons/figma.svg'
const GODOT_LOGO = '/icons/godotengine.svg'

const PROJECTS: Project[] = [
  {
    id: 'inklusijobs',
    cat: 'work',
    index: '01',
    title: 'InklusiJobs',
    desc: 'PWD employment platform built for Innovation Cup 2026. Led front-end development and Figma wireframes. Top 15 of 50+ teams.',
    Icon: FlowIcon,
    logos: [REACT_LOGO, FIGMA_LOGO],
    eyebrow: 'Hackathon — Top 15 of 50+',
    Section: BarrelPanel,
    span: 2,
    Preview: InklusiPreview,
  },
  {
    id: 'lastmoon',
    cat: 'work',
    index: '02',
    title: 'Last Moon',
    desc: 'Networked 1v1 strategy game for DOST 7 Esports Game Dev Challenge. Led visual and audio design, sprites, UI, and promotional assets.',
    Icon: FlowIcon,
    logos: [GODOT_LOGO],
    eyebrow: 'DOST 7 Game Dev Challenge',
    Section: BarrelPanel,
    span: 2,
    Preview: LastMoonPreview,
  },
  {
    id: 'ayasib',
    cat: 'work',
    index: '03',
    title: 'AyaSib',
    desc: 'Cebuano-first government services assistant. Ask about permits, clearances, and local procedures in Bisaya and get a verified, step-by-step answer. Built for Hacktoberfest 2026.',
    Icon: GlobeIcon,
    logos: [REACT_LOGO],
    eyebrow: 'Current project — Hacktoberfest 2026',
    Section: BarrelPanel,
    span: 2,
    Preview: AyaSibPreview,
  },
  {
    id: 'ai',
    cat: 'ai',
    index: '04',
    title: 'My Stack',
    desc: 'The tools, frameworks, and technologies I work with across front-end, design, and game development.',
    Icon: SparkIcon,
    logos: [REACT_LOGO, FIGMA_LOGO, GODOT_LOGO],
    eyebrow: 'Tools & technologies',
    Section: AIWindow,
    Preview: AIPreview,
  },
]

function Marks({ p, size = 22 }: { p: Project; size?: number }) {
  if (!p.logos?.length) {
    return (
      <span className="bento__icon">
        <p.Icon size={size} />
      </span>
    )
  }
  return (
    <span className="bento__logos" aria-hidden="true">
      {p.logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

function ProjectModal({ project, onClose, children }: { project: Project; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

export default function ProjectsGrid() {
  const [open, setOpen]   = useState<Project | null>(null)
  const phone             = useIsPhone()
  const [cat, setCat]     = useState<Cat | 'all'>('all')
  const keep              = (p: Project) => !phone || cat === 'all' || p.cat === cat
  const projects          = PROJECTS.filter(keep)
  const triggerRef        = useRef<HTMLElement | null>(null)

  const show  = useCallback((p: Project, el: HTMLElement) => { triggerRef.current = el; setOpen(p) }, [])
  const close = useCallback(() => { setOpen(null); requestAnimationFrame(() => triggerRef.current?.focus()) }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">Things I have built and designed.</h1>
        <p className="pgrid__lede">
          From a hackathon platform to a multiplayer game: what I built, and the part I played. Open a card to see it full size.
        </p>
      </header>

      {phone && (
        <div className="pfilter" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button key={f.key} type="button" className="pfilter__btn" aria-pressed={cat === f.key} onClick={() => setCat(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {projects.map((p) => (
            <Fragment key={p.id}>
              <button
                type="button"
                className={`bento__card bento__card--btn${p.span === 2 ? ' bento__card--wide' : ''}`}
                data-id={p.id}
                onClick={(e) => show(p, e.currentTarget)}
                aria-haspopup="dialog"
              >
                <span className="bento__head">
                  <Marks p={p} />
                  <span className="bento__title">{p.title}</span>
                  <span className="bento__desc">{p.desc}</span>
                  <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
                </span>
                <p.Preview />
              </button>
            </Fragment>
          ))}
        </div>
      </div>

      {open && (
        <ProjectModal project={open} onClose={close}>
          <open.Section />
        </ProjectModal>
      )}
    </section>
  )
}
