import { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import headerImg from '../../assets/images/camp4.jpg'

const areas = [
  { title: 'Charity Activities', text: 'Join our teams working directly in micro-credit, mentorship and food relief programs.', icon: '💛' },
  { title: 'Events & Camps', text: 'Help run leadership camps, spiritual nurture camps and graduation ceremonies.', icon: '🎉' },
  { title: 'Administration', text: 'Support our office with administration, communications and donor relations.', icon: '🗂️' },
  { title: 'Mission Trips', text: 'Travel with a team from your church, school or institution to serve in Africa on an annual basis.', icon: '✈️' },
]

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const subject = encodeURIComponent('Volunteer Interest Form')
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nCountry: ${form.get(
        'country',
      )}\nArea of interest: ${form.get('area')}\n\nMessage:\n${form.get('message')}`,
    )
    window.location.href = `mailto:info@risendevel.org?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader title="Volunteer" image={headerImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
            RSD Wouldn't Function Without Volunteers
          </h2>
          <p className="mt-3 text-slate-500">
            Volunteers are an essential part of our organization, providing a wide range of
            help — from charity activities and events to administration and further
            developing Risen Sustainable Development.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a.title} className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-slate-100">
              <span className="text-3xl">{a.icon}</span>
              <h3 className="mt-3 font-bold text-brand-navy">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
          <h3 className="text-lg font-bold text-brand-navy">Register Your Interest</h3>
          {submitted ? (
            <div className="mt-6 rounded-xl bg-green-50 p-5 text-sm text-green-700">
              Thank you! Your email client should now be open with your details pre-filled —
              please review and send it to reach our volunteer team.
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Country</label>
                  <input
                    name="country"
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Area of Interest</label>
                  <select
                    name="area"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                  >
                    <option>Charity Activities</option>
                    <option>Events & Camps</option>
                    <option>Administration</option>
                    <option>Mission Trips</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
              >
                Register to Volunteer
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
