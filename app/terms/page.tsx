import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Chinook Web Co.',
  description: 'Terms of Service for Chinook Web Co. — payment terms, IP ownership, hosting subscriptions, and project policies.',
}

export default function TermsPage() {
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
            Terms of
            <br />
            Service
          </h1>
          <p className="text-sm text-text-muted-dark">
            Effective date: April 13, 2026 &nbsp;·&nbsp; Last updated: April 13, 2026
          </p>
        </div>

        {/* Body */}
        <div className="prose-legal">

          <Section title="1. Agreement">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern the relationship between Chinook Web
              Co. (&quot;we&quot;, &quot;our&quot;, or &quot;the Company&quot;), operating from
              Calgary, Alberta, Canada, and any individual or business (&quot;Client&quot;,
              &quot;you&quot;) that engages our services.
            </p>
            <p>
              By requesting a free mockup, signing a project proposal, or making any payment to
              Chinook Web Co., you agree to be bound by these Terms. If you do not agree, do not
              proceed with a project engagement.
            </p>
          </Section>

          <Section title="2. Services Overview">
            <p>
              Chinook Web Co. provides custom website design, development, and ongoing hosting and
              maintenance services for businesses primarily in Calgary and the surrounding area. Our
              current service tiers are:
            </p>
            <ul>
              <li>
                <strong>The Foundation</strong> — $2,500 build fee + $149/month hosting &amp; maintenance.
              </li>
              <li>
                <strong>The Growth Engine</strong> — $4,800 build fee + $299/month hosting &amp; maintenance.
              </li>
              <li>
                <strong>Custom Projects</strong> — E-commerce, booking systems, and complex web
                applications are quoted individually. A separate proposal governs these engagements.
              </li>
            </ul>
            <p>
              All pricing is in Canadian dollars (CAD) unless otherwise stated in writing.
            </p>
          </Section>

          <Section title="3. Free Mockup">
            <p>
              Chinook Web Co. offers a complimentary homepage mockup to prospective clients prior
              to any payment commitment. The mockup is a design concept created at our discretion
              to demonstrate our capabilities.
            </p>
            <p>
              The free mockup does not constitute a binding deliverable or finished product. It
              remains the sole intellectual property of Chinook Web Co. until a build agreement is
              formalised and the deposit described in Section 4 is received. You may not reproduce,
              distribute, or use the mockup design in whole or in part without our written permission.
            </p>
            <p>
              If you choose not to proceed after receiving the mockup, there is no charge and no
              obligation. You may simply walk away.
            </p>
          </Section>

          <Section title="4. Payment Terms">
            <h3>4.1 Build Fee — Deposit</h3>
            <p>
              To initiate a build after mockup approval, a <strong>non-refundable deposit of
              50% of the agreed build fee</strong> is required before any development work begins.
              This deposit covers design finalisation, project setup, and initial development hours
              that cannot be recovered if a project is cancelled.
            </p>
            <h3>4.2 Build Fee — Final Payment</h3>
            <p>
              The remaining <strong>50% of the build fee</strong> is due in full prior to the website
              going live. We will not launch the site to your production domain until the final
              payment has cleared. You will be notified when your site is ready for review and
              invoiced for the balance at that time.
            </p>
            <h3>4.3 Hosting &amp; Maintenance Subscription</h3>
            <p>
              Hosting and maintenance fees are billed monthly, in advance, commencing on the date
              your site goes live. Payments are processed automatically. Failure to pay within
              10 days of the due date may result in suspension of hosting services.
            </p>
            <h3>4.4 Late Payments</h3>
            <p>
              Overdue balances accrue interest at 2% per month (24% per annum) compounded monthly,
              as permitted under Alberta law. We reserve the right to suspend services on accounts
              more than 30 days past due.
            </p>
          </Section>

          <Section title="5. Cancellation &amp; Refund Policy">
            <h3>5.1 Build Project Cancellation</h3>
            <p>
              You may cancel a build project at any time by providing written notice to{' '}
              <a href="mailto:hello@chinookwebco.com" className="text-amber hover:underline">
                hello@chinookwebco.com
              </a>. The 50% deposit is non-refundable under all circumstances. If cancellation
              occurs after more than 50% of development work has been completed (as reasonably
              determined by Chinook Web Co.), additional fees may apply, not to exceed the full
              remaining build balance.
            </p>
            <h3>5.2 Hosting Subscription Cancellation</h3>
            <p>
              You may cancel your hosting subscription at any time by providing{' '}
              <strong>30 days written notice</strong> via email. You will continue to have access
              to hosting services through the end of the paid period following your notice.
              No partial-month refunds are issued.
            </p>
            <p>
              Upon cancellation, we will provide you with your complete website files and assist with
              migration to a new host at no additional charge. We retain a copy of the files for
              90 days after the cancellation date.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <h3>6.1 Client Ownership Upon Full Payment</h3>
            <p>
              Upon receipt of the full build fee (100%), all intellectual property rights in the
              completed website — including source code, design assets, written copy we authored,
              and custom graphics — transfer to you, the Client. You own the finished product outright.
            </p>
            <h3>6.2 Third-Party Licences</h3>
            <p>
              The website may incorporate third-party libraries, fonts, or stock assets distributed
              under their own licences (e.g., MIT, SIL OFL, or royalty-free commercial licences).
              These elements remain subject to their respective licence terms. We will disclose all
              material third-party components in the project handover documentation.
            </p>
            <h3>6.3 Portfolio Rights</h3>
            <p>
              We reserve the right to display your completed website as a portfolio example on our
              website, in marketing materials, and on social media. If you require confidentiality,
              please notify us in writing before the project kickoff and we will honour that request.
            </p>
          </Section>

          <Section title="7. Client Responsibilities">
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate business information, content, and branding assets in a timely manner.</li>
              <li>Review and approve mockups and development milestones within a reasonable time (typically 5 business days).</li>
              <li>Ensure that any content you provide (text, images, logos) does not infringe any third-party intellectual property rights.</li>
              <li>Maintain the confidentiality of any login credentials we provide.</li>
            </ul>
            <p>
              Delays caused by client inaction (e.g., failure to provide content or approvals) may
              affect project timelines. Chinook Web Co. is not liable for delays arising from
              client-side bottlenecks.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable Alberta and Canadian law, Chinook Web
              Co.'s total liability to you for any claim arising out of or related to our services
              shall not exceed the total fees paid by you to Chinook Web Co. in the twelve (12)
              months preceding the event giving rise to the claim.
            </p>
            <p>
              We are not liable for indirect, incidental, consequential, special, or punitive
              damages, including loss of revenue, loss of profits, or loss of data, even if we have
              been advised of the possibility of such damages.
            </p>
          </Section>

          <Section title="9. Warranties">
            <p>
              We warrant that our services will be performed in a professional and workmanlike manner
              consistent with industry standards. We do not warrant that your website will achieve
              any specific business outcome, search engine ranking, or conversion rate, as these
              depend on many factors outside our control.
            </p>
            <p>
              All other warranties, express or implied, including implied warranties of
              merchantability or fitness for a particular purpose, are disclaimed to the fullest
              extent permitted by law.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of the Province
              of Alberta and the federal laws of Canada applicable therein. Any dispute arising under
              these Terms shall be subject to the exclusive jurisdiction of the courts of Alberta.
            </p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>
              We reserve the right to update these Terms at any time. Changes take effect upon
              posting to our website. For active projects, material changes will be communicated
              to you directly. Continued engagement with our services after the effective date
              constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              Questions about these Terms may be directed to:
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
            href="/privacy"
            className="text-[11px] text-text-muted-dark hover:text-white transition-colors
                       duration-150 uppercase tracking-widest font-medium"
          >
            Privacy Policy →
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
                      [&_h3]:text-[13px] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-[0.12em]
                      [&_h3]:text-text-muted-dark [&_h3]:mt-6 [&_h3]:mb-2
                      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-text-dark">
        {children}
      </div>
    </div>
  )
}
