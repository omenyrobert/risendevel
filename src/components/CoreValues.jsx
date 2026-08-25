const values = [
  {
    title: 'Integrity',
    text: 'We do what is right even when no one is watching, holding ourselves accountable to the highest ethical standards.',
    icon: '🤝',
  },
  {
    title: 'Accountability',
    text: 'We take ownership of our commitments to donors, partners and the communities we serve.',
    icon: '📊',
  },
  {
    title: 'Putting God at the Centre of Our Work',
    text: 'Our Christ-centred approach shapes every program, decision and relationship at Risen Sustainable Development.',
    icon: '✝️',
  },
  {
    title: 'Good Stewardship',
    text: 'We are careful, transparent stewards of every resource entrusted to us.',
    icon: '🌱',
  },
]

export default function CoreValues() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-8">
      <h3 className="text-xl font-extrabold text-brand-navy">
        Core <span className="text-brand-blue">Values</span>
      </h3>
      <ol className="mt-5 space-y-4">
        {values.map((v, i) => (
          <li key={v.title} className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-brand-navy">{v.title}</p>
              <p className="mt-0.5 text-sm text-slate-500">{v.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
