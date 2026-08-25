function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function TeamCard({ member }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center overflow-hidden bg-slate-100">
        {member.image ? (
          <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-blue/10 text-2xl font-bold text-brand-blue">
            {initials(member.name)}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-brand-navy">{member.name}</h3>
        <p className="text-sm font-semibold text-brand-blue">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{member.bio}</p>
      </div>
    </div>
  )
}
