export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I am a front-end developer and UI/UX designer. I build responsive interfaces in React, design in Figma, and have done the visual and audio design for a multiplayer game in Godot. With InklusiJobs, my team placed Top 15 of 50+ teams at Innovation Cup 2026.',
  },
  {
    q: 'How fast can you start?',
    a: 'I am a student, so my availability depends on my class schedule. Tell me your timeline and I will say honestly what I can fit.',
  },
  {
    q: 'What are you looking for?',
    a: 'Voluntary internships and teams where building interfaces and shaping how they look and feel are both useful. If that sounds like yours, write to me.',
  },
  {
    q: 'Where are you based?',
    a: 'I am in Cebu City, Philippines (GMT+8). Tell me where your team is and we can work out overlapping hours.',
  },
  {
    q: 'What happens after I write?',
    a: 'I read every message and reply by email, and we can take it from there.',
  },
]