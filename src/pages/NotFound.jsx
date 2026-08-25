import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">404</p>
      <h1 className="mt-3 text-3xl font-extrabold text-brand-navy">Page Not Found</h1>
      <p className="mt-3 text-slate-500">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
      >
        Back to Home
      </Link>
    </div>
  )
}
