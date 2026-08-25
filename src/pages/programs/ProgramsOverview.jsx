import PageHeader from '../../components/PageHeader'
import ProgramCard from '../../components/ProgramCard'
import DonateBanner from '../../components/DonateBanner'
import { programs } from '../../data/programs'
import headerImg from '../../assets/images/water4.jpg'

export default function ProgramsOverview() {
  return (
    <div>
      <PageHeader title="What We Do" image={headerImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Nine Programs, One Mission
          </h2>
          <p className="mt-3 text-slate-500">
            From micro-credit to medical care, every program we run works toward the same
            goal — sustainable transformation for women, teenagers and youth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <DonateBanner />
    </div>
  )
}
