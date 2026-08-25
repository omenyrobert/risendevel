import { useEffect, useState } from 'react'

export default function HeroSlider({ slides, interval = 6000, className = '', children }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />
      <div className="relative h-full">{children}</div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
