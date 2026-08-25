export default function SectionHeading({ eyebrow, title, highlight, center = true, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-2xl font-extrabold sm:text-3xl ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title} {highlight && <span className="text-brand-blue">{highlight}</span>}
      </h2>
      <div className={`mt-4 h-1 w-16 rounded bg-brand-gold ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
