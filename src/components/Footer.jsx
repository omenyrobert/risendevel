import { Link } from 'react-router-dom'
import logoIcon from '../assets/images/logo-icon.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Partnership', to: '/get-involved/partnership' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Leadership', to: '/leadership' },
  { label: 'Career & Jobs', to: '/get-involved/careers' },
]

const whatWeDo = [
  { label: 'Water for Life Program', to: '/what-we-do/water-for-life' },
  { label: 'Risen Schools', to: '/what-we-do/risen-schools' },
  { label: 'Food Relief Program', to: '/what-we-do/food-relief' },
  { label: 'Mentorship and Scholarship Development', to: '/what-we-do/mentorship-scholarship' },
  { label: 'Innovative and Creative Programs', to: '/what-we-do/innovation-creative' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="" className="h-10 w-auto" />
              <span className="text-lg font-extrabold tracking-tight text-white">
                RISEN <span className="text-sky-400">DEVEL</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Our goal is to contribute to the transformation of women, teenagers and youths through
              economic empowerment, leadership and character development.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <div className="mb-4 h-0.5 w-10 bg-brand-blue" />
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-400 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              What We Do
            </h3>
            <div className="mb-4 h-0.5 w-10 bg-brand-blue" />
            <ul className="space-y-2.5 text-sm">
              {whatWeDo.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-400 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h3>
            <div className="mb-4 h-0.5 w-10 bg-brand-blue" />
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                Tel:{' '}
                <a href="tel:+256782006795" className="hover:text-white">
                  +256 782 006795
                </a>
              </li>
              <li>Registered Charity, Uganda No. 206704</li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Risen Sustainable Development. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
