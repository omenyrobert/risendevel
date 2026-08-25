import { Link } from 'react-router-dom'

export default function ProgramCard({ program }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-brand-navy">{program.short}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{program.summary}</p>
        <Link
          to={`/what-we-do/${program.slug}`}
          className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
        >
          Read More
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
}
