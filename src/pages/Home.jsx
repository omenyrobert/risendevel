import { Link } from 'react-router-dom'
import { programs } from '../data/programs'
import { heroSlides } from '../data/heroSlides'
import ProgramCard from '../components/ProgramCard'
import StatsBar from '../components/StatsBar'
import CoreValues from '../components/CoreValues'
import SectionHeading from '../components/SectionHeading'
import DonateBanner from '../components/DonateBanner'
import HeroSlider from '../components/HeroSlider'

import aboutImg from '../assets/images/skills2.jpg'
import medicalImg from '../assets/images/medical.jpg'
import waterImg from '../assets/images/water3.jpg'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSlider slides={heroSlides} className="h-[640px] sm:h-[720px]">
        <div className="flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-brand-blue px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                Registered Charity · Uganda No. 206704
              </span>
              <h1 className="mt-5 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
                Risen Sustainable Development
              </h1>
              <p className="mt-4 text-lg font-semibold uppercase tracking-wide text-sky-300 sm:text-xl">
                Contributing to the transformation of women, teenagers and youth
              </p>
              <p className="mt-4 text-slate-200">
                Through practical entrepreneurship, new innovations, leadership training,
                character development and mentorship of school directors, teachers and
                families — with a Christ-centred approach.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-brand-blue-dark"
                >
                  Donate Today <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeroSlider>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Skills training with RSD"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand-navy px-8 py-6 text-white shadow-xl sm:block">
              <p className="text-3xl font-extrabold">2014</p>
              <p className="text-xs uppercase tracking-wide text-slate-300">Founded in Uganda</p>
            </div>
          </div>
          <div>
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Who We Are
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-navy sm:text-3xl">
              An agency walking with youth and women from vulnerable communities
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              Risen Sustainable Development (RSD) is a registered charity in Uganda
              (No. 206704). Founded in 2014, we help communities work together to better
              respond to the needs of vulnerable youth and women — building stable micro
              businesses, nurturing character and leadership in schools, universities and
              community, and influencing decision makers on policy issues that affect them.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="font-bold text-brand-navy">Our Vision</p>
                <p className="mt-1 text-sm text-slate-500">
                  Create a sustainable household income and rising leaders of character in
                  schools and families for every nation.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="font-bold text-brand-navy">Our Mission</p>
                <p className="mt-1 text-sm text-slate-500">
                  Transform lives through practical entrepreneurship, innovation, leadership
                  training and mentorship, with a Christ-centred approach.
                </p>
              </div>
            </div>
            <Link
              to="/vision-mission"
              className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              More about our mission <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do preview */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Our" highlight="Programs" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/what-we-do/leadership-character"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-7 py-3 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              View All Programs <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core values + Impact stats */}
      <section className="relative">
        <img src={medicalImg} alt="RSD medical outreach" className="h-[560px] w-full object-cover" />
        <div className="absolute inset-0 bg-brand-navy/85" />
        <div className="absolute inset-0">
          <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            <CoreValues />
            <div>
              <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300">
                Our Impact
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Our <span className="text-sky-300">Impact</span> to the Community
              </h2>
              <p className="mt-3 max-w-md text-slate-200">
                Contributing to the transformation of women, teenagers and youths through
                economic empowerment, leadership and character development.
              </p>
              <div className="mt-10">
                <StatsBar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water for life feature strip */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Water for Life
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Clean water changes everything
            </h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              We envision and advocate for water provision to vulnerable communities in
              Uganda, partnering with likeminded organizations and people who can donate
              towards this cause.
            </p>
            <Link
              to="/what-we-do/water-for-life"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
            >
              Learn More <span aria-hidden>→</span>
            </Link>
          </div>
          <img src={waterImg} alt="Water for life program" className="aspect-video w-full rounded-2xl object-cover shadow-xl lg:order-first" />
        </div>
      </section>

      <DonateBanner />
    </div>
  )
}
