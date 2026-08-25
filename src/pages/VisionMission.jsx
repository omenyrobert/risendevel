import PageHeader from '../components/PageHeader'
import DonateBanner from '../components/DonateBanner'
import headerImg from '../assets/images/water2.jpg'

const objectives = [
  {
    tag: 'Strategic Object 1',
    title: 'Increased proportion of women and youths with sustainable income generating enterprises',
    items: [
      'Training women in business skills and saving culture — 500 women trained over five years, 100 women per year, conducted with experienced professionals in small-scale business management.',
      'Training women and youth in social enterprises (book making, soap making, poultry, bee keeping, Vaseline/jelly making) — 30 groups trained depending on market demand.',
      'Training women groups in leadership and group dynamics to manage conflict, targeting group leaders over a three-day course.',
      'Provision of low interest, friendly loans through groups, with a three-month grace period and rates below central bank rates.',
      'Mentoring, coaching and weekly monitoring visits to saving groups to follow up on loan and business performance.',
    ],
  },
  {
    tag: 'Strategic Object 2',
    title: 'At least 2,500 teenagers and youths in schools trained in leadership and character development',
    items: [
      'Orientation meetings with school and university managers, followed by signed MOUs before training begins.',
      'Weekly leadership and character development trainings following the school calendar, with cost-sharing for private schools; out-of-school youth trained through conferences and workshops three times a year.',
      'Mentoring and coaching sessions with students, who form clubs led by a teacher-patron from their school.',
      'A yearly graduation ceremony for trainees who complete the training, mentoring and coaching program, with certificates awarded.',
    ],
  },
  {
    tag: 'Strategic Object 3',
    title: 'At least 100 churches empowered to help children and youths experience the love of God and share it with their neighbors',
    items: [
      'Training church leaders and Sunday school teachers on holistic child development and making churches child-friendly.',
      'Five-day training for Sunday school teachers in spiritual nurture for children and classroom management across age groups.',
      'Annual children and youth spiritual nurture camps in partnership with churches, residential and five days long.',
      'Provision of Sunday school teaching materials — visual aids, reading materials, children\'s Bibles and play materials — plus seasonal camps for Ugandan and refugee children.',
    ],
  },
]

export default function VisionMission() {
  return (
    <div>
      <PageHeader title="Vision & Mission" image={headerImg} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-brand-navy p-8 text-white shadow-xl">
            <h2 className="text-xl font-extrabold">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-slate-200">
              Create a sustainable household income and rising leaders of character in schools
              and family, for every nation.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-blue p-8 text-white shadow-xl">
            <h2 className="text-xl font-extrabold">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-100">
              To transform lives through practical entrepreneurship, new innovations,
              leadership training, character development and mentorship of school directors,
              teachers and families — with a Christ-centred approach.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-brand-gold/10 p-8 ring-1 ring-brand-gold/30">
          <h2 className="text-xl font-extrabold text-brand-navy">Strategical Goal</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            To contribute to the transformation of women, teenagers and youths through economic
            empowerment, leadership and character development.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">
            How We Get There
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
            Three strategic objectives guide our activities across every program we run.
          </p>

          <div className="mt-12 space-y-8">
            {objectives.map((obj) => (
              <div key={obj.tag} className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-100">
                <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  {obj.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-navy">{obj.title}</h3>
                <ul className="mt-5 space-y-3">
                  {obj.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </div>
  )
}
