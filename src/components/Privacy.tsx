import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 15, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>
            This policy applies to mnpresbitero.vercel.app, the personal portfolio
            of Methuselah Noreen Presbitero. It describes what information is collected
            when you visit this site and how it is used.
          </p>

          <h2>What is collected</h2>
          <p>
            This site collects only the information you voluntarily provide through
            the contact form: your name, email address, and message. No account
            registration is required and no passwords are stored.
          </p>
          <p>
            This site uses Vercel Analytics, a privacy-friendly analytics tool that
            collects anonymous pageview data — including pages visited, referrer, and
            general location (country level). Vercel Analytics does not use cookies
            and does not track you across other sites.
          </p>

          <h2>How it is used</h2>
          <p>
            Information submitted through the contact form is used solely to respond
            to your message. It is not sold, shared with advertisers, or used for
            any marketing purpose. Anonymous analytics data is used only to understand
            general site traffic.
          </p>
          <p>
            Contact form submissions are processed by Formspree (formspree.io), a
            third-party form service. By submitting the contact form, your message
            is transmitted to Formspree's servers before being forwarded to this
            site's owner. Formspree's own privacy policy applies to that transmission.
          </p>

          <h2>How long it is kept</h2>
          <p>
            Contact form submissions are retained only as long as necessary to respond
            to your message. You may request deletion of your data at any time by
            emailing the address below, and it will be removed within 30 days.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of
            any personal data you have submitted through this site. To exercise any
            of these rights, contact the address below.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy:{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
