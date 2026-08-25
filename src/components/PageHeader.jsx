import { Link } from 'react-router-dom'

export default function PageHeader({ title, crumb, image }) {
  return (
    <div className="relative overflow-hidden bg-brand-navy">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-blue/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-300">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-sky-300">{crumb || title}</span>
        </p>
      </div>
    </div>
  )
}
