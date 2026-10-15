/**
 * YOUR IDENTITY - start here.
 */

import { Trophy, GraduationCap, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
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
  firstName: 'Methuselah Noreen',
  handle: '@methuselahnoreen',
  role: 'Front-End Dev & UI/UX Designer',
  avatarSrc: '/headshot.svg',
  verifiedLabel: 'University Scholar, UP Cebu',
  email: 'methuselahpresbitero@gmail.com',
  location: 'Cebu City, Philippines (GMT+8)',
  stats: [
    { value: 'Top 15', label: 'of 50+ hackathon teams', Icon: Trophy },
    { value: '3rd yr',  label: 'BS CS, UP Cebu',         Icon: GraduationCap },
    { value: 'GMT+8',   label: 'Cebu, Philippines',       Icon: Clock },
  ],
  displayName: { line1: 'Making pixels', line2: 'make sense.' },
  hero: {
    body: 'Front-end developer and UI/UX designer who ships, from React interfaces to game visuals and audio.',
    portraitSrc: '/headshot.svg',
    portraitAlt: 'Headshot of Methuselah Presbitero',
  },
  socials: [
    { label: 'GitHub profile',   href: 'https://github.com/methuselahnoreen',                                    iconPath: '/icons/ai/github.svg'  },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/methuselah-noreen-presbitero-3b197138a',     iconPath: '/icons/linkedin.svg'   },
    { label: 'Facebook profile', href: 'https://www.facebook.com/methuselah.arnejopresbitero',                   iconPath: '/icons/facebook.svg'   },
  ],
}
