import { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import headerImg from '../../assets/images/computer-skills.jpg'

const values = [
  'A heart to serve vulnerable women, teenagers and youth',
  'Integrity and accountability in everything you do',
  'A Christ-centred approach to work and community',
  'A drive to see communities become self-sustaining',
]

export default function Careers() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const subject = encodeURIComponent(`Job Application: ${form.get('role') || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nRole of interest: ${form.get(
        'role',
      )}\n\nMessage:\n${form.get('message')}`,
    )
    window.location.href = `mailto:info@risendevel.org?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader title="Career & Jobs" image={headerImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Join Our Team
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Build Your Career With Purpose
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              Risen Sustainable Development is a growing team of directors, project managers,
              engineers, developers and program leads working across Uganda, Burundi, DR
              Congo and South Sudan. We don't always have open positions listed, but we're
              always glad to hear from people who share our mission.
            </p>

            <h3 className="mt-8 font-bold text-brand-navy">What We Look For</h3>
            <ul className="mt-4 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex gap-3 text-sm text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {v}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
              <p className="text-sm text-slate-600">
                <strong className="text-brand-navy">Current openings:</strong> There are no
                open positions listed right now. Submit a general application below and we'll
                reach out when a role matching your skills opens up.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
            <h3 className="text-lg font-bold text-brand-navy">Submit Your Application</h3>
            {submitted ? (
              <div className="mt-6 rounded-xl bg-green-50 p-5 text-sm text-green-700">
                Thank you! Your email client should now be open with your application details
                pre-filled — please review and send it to reach our team.
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Role of Interest</label>
                  <input
                    name="role"
                    type="text"
                    placeholder="e.g. Project Manager, Volunteer Coordinator"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                >
                  Send Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
