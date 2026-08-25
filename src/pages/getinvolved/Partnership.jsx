import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import DonateBanner from '../../components/DonateBanner'
import headerImg from '../../assets/images/coffee2.png'

const ways = [
  {
    title: 'Church & School Partnerships',
    text: 'We sign memoranda of understanding with schools, universities and churches that appreciate our character and leadership programs, integrating training into the school calendar.',
    icon: '🏫',
  },
  {
    title: 'International Network Affiliation',
    text: 'RSD seeks affiliation with an international network of agencies working with youth and women, sharing our mission of household income, character and leadership development.',
    icon: '🌍',
  },
  {
    title: 'Fund & Resource Partners',
    text: 'Partner with us to fund micro-credit loans, scholarships, water provision, medical care and Sunday school teaching materials for the communities we serve.',
    icon: '🤝',
  },
  {
    title: 'Corporate & Group Partners',
    text: 'We invite groups from university fraternities, churches and organizations to raise funds and come alongside our beneficiaries for sustainable businesses and events.',
    icon: '🏢',
  },
]

export default function Partnership() {
  return (
    <div>
      <PageHeader title="Partnership" image={headerImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Partner With Risen Sustainable Development
          </h2>
          <p className="mt-3 text-slate-500">
            We believe transformation happens best in partnership — with churches, schools,
            organizations and individuals who share our vision for vulnerable women and
            youth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {ways.map((w) => (
            <div key={w.title} className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-100">
              <span className="text-3xl">{w.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-navy p-10 text-center text-white shadow-xl">
          <h3 className="text-xl font-extrabold">Ready to explore a partnership?</h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Reach out to our team and let's discuss how your organization or church can
            partner with RSD on programs that matter most to you.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
          >
            Get in Touch <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <DonateBanner />
    </div>
  )
}
