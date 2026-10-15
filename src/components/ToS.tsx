import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 15, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>
            This site is the personal portfolio of Methuselah Noreen Presbitero,
            hosted at mnpresbitero.vercel.app. By visiting this site you agree to
            these terms. If you do not agree, please do not use the site. This site
            is intended for informational purposes — to showcase work, skills, and
            provide a way to get in touch.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content on this site — including text, project descriptions, design,
            and code — is the property of Methuselah Noreen Presbitero unless otherwise
            noted. You may not reproduce, distribute, or use any content from this
            site without prior written permission. Project work completed collaboratively
            (such as InklusIJobs) remains the shared property of the respective team
            members.
          </p>

          <h2>No warranties</h2>
          <p>
            This site is provided as-is. While every effort is made to keep content
            accurate and up to date, no warranties are made regarding the completeness,
            accuracy, or availability of any information on this site.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            Methuselah Noreen Presbitero is not liable for any damages arising from
            your use of or inability to use this site, including but not limited to
            direct, indirect, or consequential damages. Use of this site is entirely
            at your own risk.
          </p>

          <h2>External links</h2>
          <p>
            This site may contain links to external sites such as GitHub or LinkedIn.
            These are provided for convenience only. No responsibility is taken for
            the content or privacy practices of any external site.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            These terms may be updated from time to time. The date at the top of
            this page reflects the most recent revision. Continued use of the site
            after any changes constitutes acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
