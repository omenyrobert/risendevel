import PageHeader from '../components/PageHeader'
import headerImg from '../assets/images/food-program.jpg'

const causes = [
  { title: 'Micro-Credit Loans', text: 'Fund low-interest loans that help women and youth start sustainable businesses.' },
  { title: 'Scholarships & Mentorship', text: 'Sponsor a scholar-student and give them access to mentorship and education.' },
  { title: 'Water for Life', text: 'Help provide clean water access to vulnerable communities in Uganda.' },
  { title: 'Risen Bwimba Medical Centre', text: 'Support the construction of our medical centre serving refugees and the vulnerable.' },
]

export default function Donate() {
  return (
    <div>
      <PageHeader title="Donate Now" image={headerImg} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Your Generosity Changes Lives
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Every donation — big or small — helps us contribute to the transformation of
            women, teenagers and youths through economic empowerment, leadership and
            character development.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {causes.map((c) => (
            <div key={c.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
              <h3 className="font-bold text-brand-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-navy p-10 text-white shadow-xl">
          <h3 className="text-xl font-extrabold">Ways to Give</h3>
          <p className="mt-3 max-w-2xl text-slate-300">
            To make a donation or set up a recurring gift, please reach out to our team directly
            — we'll share the most convenient option for your location, whether by mobile
            money, bank transfer or another method.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:+256782006795"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
            >
              Call +256 782 006795
            </a>
            <a
              href="https://wa.me/256782006795"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
