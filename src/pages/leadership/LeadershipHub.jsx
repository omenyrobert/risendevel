import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import headerImg from '../../assets/images/camp2.jpg'
import boardImg from '../../assets/team/board/tom-and-zan.jpeg'
import internationalImg from '../../assets/team/international/noor-ainne-garcia.webp'
import ugandaImg from '../../assets/team/uganda/christine-mutesi.jpeg'
import burundiImg from '../../assets/team/burundi/edward-mukalazi.webp'
import congoImg from '../../assets/team/congo/sibo-muhire-faustin.webp'

const teams = [
  {
    label: 'Our International Board Lead Team',
    to: '/leadership/international-board-lead-team',
    image: boardImg,
    desc: 'Strategic oversight and governance for RSD across the nations we serve.',
  },
  {
    label: 'International Team',
    to: '/leadership/international-team',
    image: internationalImg,
    desc: 'Our global support team behind administration, coordination and communications.',
  },
  {
    label: 'Ugandan Team',
    to: '/leadership/uganda-team',
    image: ugandaImg,
    desc: 'The team leading programs and operations from our base in Uganda.',
  },
  {
    label: 'Burundi Team',
    to: '/leadership/burundi-team',
    image: burundiImg,
    desc: 'Extending our reach and partnerships into Burundi.',
  },
  {
    label: 'Congo Team',
    to: '/leadership/congo-team',
    image: congoImg,
    desc: 'Community development and finance expertise in DR Congo.',
  },
  {
    label: 'South Sudan',
    to: '/leadership/south-sudan',
    image: null,
    desc: 'Growing our presence and partnerships in South Sudan.',
  },
]

export default function LeadershipHub() {
  return (
    <div>
      <PageHeader title="Our Leadership" crumb="Our Leadership" image={headerImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Meet the People Behind Risen Sustainable Development
          </h2>
          <p className="mt-3 text-slate-500">
            Our leadership spans continents — united by one mission of transforming lives
            through economic empowerment, leadership and character development.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-52 items-center justify-center overflow-hidden bg-slate-100">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-5xl">🌍</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-navy">{t.label}</h3>
                <p className="mt-2 text-sm text-slate-500">{t.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                  Meet the team <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
