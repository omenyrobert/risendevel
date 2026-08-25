const stats = [
  { value: '1,092+', label: 'Schools Involved' },
  { value: '92%', label: 'Our Reviews' },
  { value: '234+', label: 'Lives Impacted' },
  { value: '34+', label: 'Completed Projects' },
]

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</div>
          <div className="mt-1 text-sm text-slate-200">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
