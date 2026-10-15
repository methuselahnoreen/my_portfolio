/**
 * The systems tree shown in the Projects "systems" pop-up (and as chips on
 * Home and in the Projects bento card). This file is the ONLY place node
 * copy lives. Keep the exported names and types stable.
 */

import { Sparkle, Browser, Robot, FilmSlate, Broadcast } from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  /** One plain sentence a non-technical client understands. */
  what: string
  /** Real stack / model / where it runs. Rendered small and muted. */
  stack?: string
  status?: StackStatus
  /** Phosphor glyph for the card's mark tile. Every node has one. */
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Front-end developer and UI/UX designer building interfaces, game visuals and audio.',
  stack: 'React · Figma · Godot',
  children: [
    {
      id: 'inklusijobs',
      Icon: Browser,
      name: 'InklusiJobs',
      what: 'Innovation Cup 2026 entry that placed Top 15 of 50+ teams.', // CHECK: add what it does and who it is for
      stack: 'React · Figma', // CHECK
      status: 'Internal', // CHECK: use 'Live' only if real people use it, 'Beta' if it is in testing
    },
    {
      id: 'last-moon',
      Icon: Robot,
      name: 'Last Moon',
      what: 'A game built in Godot.', // CHECK: add one line on the game and your role
      stack: 'Godot', // CHECK
      status: 'Internal', // CHECK
    },
    {
      id: 'toolkit',
      Icon: Sparkle,
      name: 'Toolkit',
      what: 'The tools I use to design, build and polish my work.',
      children: [
        {
          id: 'react-github',
          Icon: Browser,
          name: 'React & GitHub',
          what: 'Building and versioning interfaces for the web.',
          stack: 'React · GitHub',
          status: 'Internal',
        },
        {
          id: 'figma',
          Icon: Sparkle,
          name: 'Figma',
          what: 'Designing screens and prototypes before they are built.',
          stack: 'Figma',
          status: 'Internal',
        },
        {
          id: 'godot',
          Icon: Broadcast,
          name: 'Godot',
          what: 'Making games.',
          stack: 'Godot',
          status: 'Internal',
        },
        {
          id: 'photoshop-premiere',
          Icon: FilmSlate,
          name: 'Photoshop & Premiere Pro',
          what: 'Editing images and video.',
          stack: 'Photoshop · Premiere Pro',
          status: 'Internal',
        },
      ],
    },
  ],
}