import { Link } from 'react-router-dom'

export default function DonateBanner() {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div>
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
            Help us transform more lives today
          </h3>
          <p className="mt-2 max-w-xl text-slate-200">
            Your partnership funds micro-credit loans, scholarships, clean water and character
            development for women, teenagers and youths across Uganda.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Link
            to="/donate"
            className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy shadow-lg transition hover:brightness-95"
          >
            Donate Now
          </Link>
          <Link
            to="/get-involved/partnership"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  )
}
