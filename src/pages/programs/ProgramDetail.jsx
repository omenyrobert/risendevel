import { Link, Navigate, useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import DonateBanner from '../../components/DonateBanner'
import { getProgramBySlug, programs } from '../../data/programs'

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = getProgramBySlug(slug)

  if (!program) return <Navigate to="/what-we-do" replace />

  const otherPrograms = programs.filter((p) => p.slug !== slug)

  return (
    <div>
      <PageHeader title={program.title} crumb={program.short} image={program.image} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img
              src={program.image}
              alt={program.title}
              className="aspect-video w-full rounded-2xl object-cover shadow-lg"
            />
            <p className="mt-8 text-lg font-medium leading-relaxed text-brand-navy">
              {program.summary}
            </p>
            <div className="mt-6 space-y-5 text-slate-600">
              {program.body.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {program.feature && (
              <div className="mt-10 overflow-hidden rounded-2xl bg-brand-navy shadow-xl sm:flex">
                <img
                  src={program.feature.image}
                  alt={program.feature.title}
                  className="h-56 w-full object-cover sm:h-auto sm:w-64"
                />
                <div className="p-8">
                  <h3 className="text-lg font-bold text-white">{program.feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {program.feature.text}
                  </p>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-brand-blue p-8 text-white shadow-xl">
              <h3 className="text-lg font-bold">Support This Program</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-100">
                Your donation or partnership directly funds this work in communities across
                Uganda and beyond.
              </p>
              <Link
                to="/donate"
                className="mt-5 inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-blue"
              >
                Donate Now <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-100">
              <h3 className="text-lg font-bold text-brand-navy">Other Programs</h3>
              <ul className="mt-4 space-y-3">
                {otherPrograms.slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/what-we-do/${p.slug}`}
                      className="text-sm font-medium text-slate-600 hover:text-brand-blue"
                    >
                      {p.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <DonateBanner />
    </div>
  )
}
