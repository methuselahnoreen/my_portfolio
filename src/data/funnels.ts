export type FunnelTag = 'Lead Capture' | 'Booking' | 'Checkout' | 'Website' | 'Case Study'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  /** Public subfolder the HTML + thumbnail live under. Default 'funnels'. */
  dir?: 'funnels' | 'samples'
}

/**
 * Your pages for the 3D carousel on the Projects view and the Home reel.
 *
 * Each entry is a self-contained HTML page in public/samples/ (shown 3:4),
 * with two thumbnails: public/samples/thumbs/<name>.jpeg and
 * public/home/samples-<name>.jpeg.
 *
 * To add another page: copy public/samples/inklusijobs.html, edit the text,
 * add an entry to websiteFunnel below, then render its thumbnails.
 */

const study = (file: string, label: string, desc: string): Funnel => ({
  file,
  label,
  tag: 'Case Study',
  desc,
  dir: 'samples',
})

/** The single-page funnels reel. Not used in this portfolio, so it is empty. */
export const gymFunnel: Funnel[] = []

/** The booking funnels reel. Not used in this portfolio, so it is empty. */
export const bookingFunnel: Funnel[] = []

/** The carousel. Add your own pages here. */
export const websiteFunnel: Funnel[] = [
  study(
    'inklusijobs.html',
    'InklusiJobs',
    'Employment platform for persons with disabilities. I led the front end and the Figma wireframes. Top 15 of 50+ teams.',
  ),
  study(
    'last-moon.html',
    'Last Moon',
    'A 1v1 networked strategy game for the DOST 7 Esports Game Dev Challenge. I led the visual and audio design.',
  ),
]

/**
 * Tag -> color map. Brand-external colors that identify the page type, passed
 * to CSS via an inline --tag-color custom property.
 */
export const tagColors: Record<FunnelTag, string> = {
  'Lead Capture': '#8b5cf6',
  Booking: '#ec4899',
  Checkout: '#f59e0b',
  Website: '#FF7A1A',
  'Case Study': '#FF7A1A',
}