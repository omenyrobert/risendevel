import PageHeader from './PageHeader'
import TeamCard from './TeamCard'
import DonateBanner from './DonateBanner'

export default function TeamPage({ title, intro, members, image, comingSoon }) {
  return (
    <div>
      <PageHeader title={title} crumb={title} image={image} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {intro && <p className="mx-auto max-w-2xl text-center text-slate-500">{intro}</p>}

        {comingSoon ? (
          <div className="mx-auto mt-12 max-w-lg rounded-2xl bg-slate-50 p-10 text-center ring-1 ring-slate-100">
            <span className="text-4xl">🌱</span>
            <h3 className="mt-4 text-lg font-bold text-brand-navy">Team Page Coming Soon</h3>
            <p className="mt-2 text-sm text-slate-500">
              We're growing our presence here. Check back soon to meet the team, or reach out
              if you'd like to partner with us in this region.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        )}
      </section>

      <DonateBanner />
    </div>
  )
}
