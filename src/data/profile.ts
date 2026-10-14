/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline.
 */

import { Trophy, GraduationCap, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Methuselah Presbitero',
  firstName: 'Methuselah',
  handle: '@methuselahnoreen',
  role: 'Front-End Dev & UI/UX Designer',
  avatarSrc: '/headshot.png',
  verifiedLabel: 'University Scholar, UP Cebu',
  email: 'methuselahpresbitero@gmail.com',
  location: 'Cebu City, Philippines (GMT+8)',
  stats: [
    { value: 'Top 15', label: 'of 50+ hackathon teams', Icon: Trophy },
    { value: '3rd yr', label: 'BS CS, UP Cebu', Icon: GraduationCap },
    { value: 'GMT+8', label: 'Cebu, Philippines', Icon: Clock },
  ],
  displayName: { line1: 'Making pixels', line2: 'make sense.' },
  hero: {
    body: 'Front-end developer and UI/UX designer who ships, from React interfaces to game visuals and audio.',
    portraitSrc: '/headshot.png',
    portraitAlt: 'Headshot of Methuselah Presbitero',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/methuselahnoreen', iconPath: '/icons/ai/github.svg' },
  ],
}