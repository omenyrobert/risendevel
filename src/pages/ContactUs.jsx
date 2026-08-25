import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import headerImg from '../assets/images/refugee3.jpg'

const info = [
  { label: 'Phone', value: '+256 782 006795', href: 'tel:+256782006795', icon: '📞' },
  { label: 'WhatsApp', value: 'Chat with our team', href: 'https://wa.me/256782006795', icon: '💬' },
  { label: 'Location', value: 'Kampala, Uganda', icon: '📍' },
  { label: 'Registration', value: 'Registered Charity, Uganda No. 206704', icon: '🪪' },
]

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const subject = encodeURIComponent(`Website Contact: ${form.get('subject') || 'General Inquiry'}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\nMessage:\n${form.get('message')}`,
    )
    window.location.href = `mailto:info@risendevel.org?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader title="Contact Us" image={headerImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {info.map((i) => (
              <div key={i.label} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100">
                <span className="text-2xl">{i.icon}</span>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
                  {i.label}
                </p>
                {i.href ? (
                  <a
                    href={i.href}
                    target={i.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="mt-1 block font-bold text-brand-navy hover:text-brand-blue"
                  >
                    {i.value}
                  </a>
                ) : (
                  <p className="mt-1 font-bold text-brand-navy">{i.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100 lg:col-span-2">
            <h2 className="text-xl font-extrabold text-brand-navy">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-500">
              Have a question about our programs, partnership or volunteering? Fill out the
              form and we'll get back to you.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-xl bg-green-50 p-5 text-sm text-green-700">
                Thank you! Your email client should now be open with your message pre-filled —
                please review and send it to reach our team.
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-brand-blue px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
