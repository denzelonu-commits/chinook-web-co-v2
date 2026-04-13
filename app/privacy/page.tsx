import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Chinook Web Co.',
  description: 'Privacy Policy for Chinook Web Co. — how we collect, use, and protect your personal information under PIPEDA and Alberta PIPA.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-charcoal px-6 py-16 md:px-14 md:py-24">
      <div className="max-w-4xl mx-auto">

        {/* Back nav */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted-dark hover:text-white
                     text-[12px] uppercase tracking-[0.18em] font-semibold transition-colors
                     duration-150 mb-16 group"
        >
          <ArrowLeft
            size={14}
            strokeWidth={2}
            className="transition-transform duration-150 group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        {/* Page header */}
        <div className="mb-16 pb-10 border-b border-white/[0.07]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
            Legal
          </p>
          <h1
            className="text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9]
                       tracking-[-0.02em] text-white mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Privacy
            <br />
            Policy
          </h1>
          <p className="text-sm text-text-muted-dark">
            Effective date: April 13, 2026 &nbsp;·&nbsp; Last updated: April 13, 2026
          </p>
        </div>

        {/* Body */}
        <div className="prose-legal">

          <Section title="1. About This Policy">
            <p>
              Chinook Web Co. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates from Calgary, Alberta,
              Canada. This Privacy Policy describes how we collect, use, disclose, and safeguard
              personal information in accordance with Canada's federal{' '}
              <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and
              Alberta's provincial{' '}
              <em>Personal Information Protection Act</em> (PIPA, SA 2003, c P-6.5).
            </p>
            <p>
              By submitting a demo request through our website or otherwise providing personal
              information to us, you acknowledge that you have read and understood this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              When you complete the &quot;Get a Free Preview&quot; form on our website, we collect
              the following information through our form processor, Formspree (formspree.io):
            </p>
            <ul>
              <li><strong>Full name</strong> — to address you correctly in all correspondence.</li>
              <li><strong>Business name</strong> — to personalise and scope the free mockup we create for you.</li>
              <li><strong>Email address</strong> — to deliver your mockup and communicate about your project.</li>
              <li><strong>Phone number</strong> (optional) — for follow-up calls if you prefer voice communication.</li>
              <li><strong>Business type / industry</strong> — to tailor the design direction of your mockup.</li>
              <li><strong>Business goals</strong> (free text) — to understand the outcomes you are trying to achieve.</li>
            </ul>
            <p>
              We do not collect payment card information directly. Any payment processing is handled
              by a third-party payment provider whose own privacy policy governs that data.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information you provide to:</p>
            <ul>
              <li>Build and deliver your free website mockup.</li>
              <li>Communicate with you about your mockup, project scope, and pricing.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Prepare and deliver project proposals and invoices when engaged.</li>
              <li>Improve our services based on aggregate, non-identifiable feedback.</li>
            </ul>
            <p>
              We will not use your information for unsolicited marketing outside the scope of your
              demo request. If we wish to add you to a newsletter or similar list, we will request
              your explicit consent at that time.
            </p>
          </Section>

          <Section title="4. Legal Basis for Processing (Alberta PIPA)">
            <p>
              Under Alberta's PIPA, we collect and use personal information only with your
              knowledge and consent, or where permitted by law. By submitting our contact form,
              you provide your express consent to the collection and use described in this policy.
              You may withdraw consent at any time — see Section 8 for your rights.
            </p>
          </Section>

          <Section title="5. Disclosure of Your Information">
            <p>We share personal information only in limited circumstances:</p>
            <ul>
              <li>
                <strong>Formspree, Inc.</strong> — our form processor, located in the United States.
                Formspree receives form submissions on our behalf and stores them on secure servers.
                Formspree's privacy policy is available at{' '}
                <a href="https://formspree.io/legal/privacy-policy" className="text-amber hover:underline" target="_blank" rel="noopener noreferrer">
                  formspree.io/legal/privacy-policy
                </a>. By submitting our form, you consent to this cross-border transfer as permitted
                under PIPA s. 13.1.
              </li>
              <li>
                <strong>Legal requirements</strong> — if required to do so by law, court order,
                or governmental authority.
              </li>
              <li>
                <strong>Business transfers</strong> — in connection with a sale or transfer of
                our business, subject to confidentiality obligations.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to any third party.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes
              described in this policy, or as required by law. Project records are typically
              retained for seven (7) years to satisfy Alberta business and tax record requirements.
              Demo requests that do not convert to a project are deleted within twelve (12) months
              of the last communication.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We implement appropriate technical and organisational measures to protect your
              personal information against unauthorised access, disclosure, alteration, or
              destruction. Our website is served over TLS (HTTPS), and access to client data is
              restricted to authorised personnel only.
            </p>
            <p>
              While we take reasonable precautions, no method of internet transmission or
              electronic storage is 100% secure. We encourage you to contact us immediately at{' '}
              <a href="mailto:hello@chinookwebco.com" className="text-amber hover:underline">
                hello@chinookwebco.com
              </a>{' '}
              if you suspect your information has been compromised.
            </p>
          </Section>

          <Section title="8. Your Rights Under PIPEDA and Alberta PIPA">
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Withdraw consent to our use of your personal information (subject to legal or contractual restrictions).</li>
              <li>Request deletion of your personal information where we have no legal obligation to retain it.</li>
              <li>Lodge a complaint with the Office of the Information and Privacy Commissioner of Alberta (OIPC) at <a href="https://www.oipc.ab.ca" className="text-amber hover:underline" target="_blank" rel="noopener noreferrer">oipc.ab.ca</a>.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@chinookwebco.com" className="text-amber hover:underline">
                hello@chinookwebco.com
              </a>. We will respond within 30 days as required under PIPA s. 30.
            </p>
          </Section>

          <Section title="9. Cookies and Analytics">
            <p>
              Our website may use minimal, privacy-respecting analytics (e.g., Vercel Analytics)
              that collect anonymised, aggregated data about page visits. No personally identifiable
              information is collected through these analytics tools. We do not use advertising
              cookies or cross-site tracking.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              &quot;Last updated&quot; date at the top of this page. We encourage you to review this
              policy periodically. Continued use of our website after changes constitutes acceptance
              of the updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              For any questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact our Privacy Officer:
            </p>
            <address className="not-italic mt-4 space-y-1 text-text-dark">
              <p className="font-semibold text-white">Chinook Web Co.</p>
              <p>Calgary, Alberta, Canada</p>
              <p>
                Email:{' '}
                <a href="mailto:hello@chinookwebco.com" className="text-amber hover:underline">
                  hello@chinookwebco.com
                </a>
              </p>
            </address>
          </Section>

        </div>

        {/* Footer row */}
        <div className="mt-20 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row
                        justify-between items-start sm:items-center gap-4">
          <p className="text-[11px] text-text-muted-dark uppercase tracking-[0.15em] font-medium">
            © {new Date().getFullYear()} Chinook Web Co. Calgary, AB.
          </p>
          <Link
            href="/terms"
            className="text-[11px] text-text-muted-dark hover:text-white transition-colors
                       duration-150 uppercase tracking-widest font-medium"
          >
            Terms of Service →
          </Link>
        </div>

      </div>
    </div>
  )
}

// ── Local sub-component ────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <h2
        className="text-[clamp(1.4rem,3vw,2rem)] font-black uppercase tracking-[-0.01em]
                   text-white mb-5"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-[1.75] text-text-dark [&_strong]:text-white
                      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-text-dark">
        {children}
      </div>
    </div>
  )
}
