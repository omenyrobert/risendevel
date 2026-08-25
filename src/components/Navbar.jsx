import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { programs } from '../data/programs'
import logo from '../assets/images/logo.webp'

const leadershipLinks = [
  { label: 'Our International Board Lead Team', to: '/leadership/international-board-lead-team' },
  { label: 'International Team', to: '/leadership/international-team' },
  { label: 'Ugandan Team', to: '/leadership/uganda-team' },
  { label: 'Burundi Team', to: '/leadership/burundi-team' },
  { label: 'Congo Team', to: '/leadership/congo-team' },
  { label: 'South Sudan', to: '/leadership/south-sudan' },
]

const whoWeAreLinks = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Vision & Mission', to: '/vision-mission' },
]

const getInvolvedLinks = [
  { label: 'Partnership', to: '/get-involved/partnership' },
  { label: 'Career & Jobs', to: '/get-involved/careers' },
  { label: 'Volunteer', to: '/get-involved/volunteer' },
]

function NavItem({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 py-2 text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-brand-blue"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-30 min-w-64 rounded-lg border border-slate-100 bg-white py-2 shadow-xl">
          {children}
        </div>
      )}
    </div>
  )
}

function DropLink({ to, children, hasSub, subOpen, onEnter, onLeave }) {
  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue ${
            isActive ? 'text-brand-blue' : ''
          }`
        }
      >
        <span>{children}</span>
        {hasSub && (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </NavLink>
    </div>
  )
}

function DesktopNav() {
  const [leadershipOpen, setLeadershipOpen] = useState(false)

  return (
    <nav className="hidden items-center gap-7 lg:flex">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-brand-blue ${
            isActive ? 'text-brand-blue' : ''
          }`
        }
      >
        Home
      </NavLink>

      <NavItem label="Who We Are">
        {whoWeAreLinks.map((l) => (
          <DropLink key={l.to} to={l.to}>
            {l.label}
          </DropLink>
        ))}
        <div
          className="relative"
          onMouseEnter={() => setLeadershipOpen(true)}
          onMouseLeave={() => setLeadershipOpen(false)}
        >
          <DropLink to="/leadership" hasSub>
            Our Leadership
          </DropLink>
          {leadershipOpen && (
            <div className="absolute left-full top-0 z-40 min-w-64 rounded-lg border border-slate-100 bg-white py-2 shadow-xl">
              {leadershipLinks.map((l) => (
                <DropLink key={l.to} to={l.to}>
                  {l.label}
                </DropLink>
              ))}
            </div>
          )}
        </div>
      </NavItem>

      <NavItem label="What We Do">
        {programs.map((p) => (
          <DropLink key={p.slug} to={`/what-we-do/${p.slug}`}>
            {p.short}
          </DropLink>
        ))}
      </NavItem>

      <NavItem label="Get Involved">
        {getInvolvedLinks.map((l) => (
          <DropLink key={l.to} to={l.to}>
            {l.label}
          </DropLink>
        ))}
      </NavItem>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-brand-blue ${
            isActive ? 'text-brand-blue' : ''
          }`
        }
      >
        Contact Us
      </NavLink>

      <NavLink
        to="/edify-corner"
        className={({ isActive }) =>
          `text-sm font-semibold uppercase tracking-wide text-slate-700 hover:text-brand-blue ${
            isActive ? 'text-brand-blue' : ''
          }`
        }
      >
        Edify Corner
      </NavLink>
    </nav>
  )
}

function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide text-slate-700"
      >
        {label}
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open && <div className="pb-2 pl-3">{children}</div>}
    </div>
  )
}

function MobileNav({ onNavigate }) {
  return (
    <div className="lg:hidden">
      <Link
        to="/"
        onClick={onNavigate}
        className="block border-b border-slate-100 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700"
      >
        Home
      </Link>

      <MobileAccordion label="Who We Are">
        {whoWeAreLinks.map((l) => (
          <Link key={l.to} to={l.to} onClick={onNavigate} className="block py-2 text-sm text-slate-600">
            {l.label}
          </Link>
        ))}
        <MobileAccordion label="Our Leadership">
          {leadershipLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={onNavigate} className="block py-2 text-sm text-slate-600">
              {l.label}
            </Link>
          ))}
        </MobileAccordion>
      </MobileAccordion>

      <MobileAccordion label="What We Do">
        {programs.map((p) => (
          <Link
            key={p.slug}
            to={`/what-we-do/${p.slug}`}
            onClick={onNavigate}
            className="block py-2 text-sm text-slate-600"
          >
            {p.short}
          </Link>
        ))}
      </MobileAccordion>

      <MobileAccordion label="Get Involved">
        {getInvolvedLinks.map((l) => (
          <Link key={l.to} to={l.to} onClick={onNavigate} className="block py-2 text-sm text-slate-600">
            {l.label}
          </Link>
        ))}
      </MobileAccordion>

      <Link
        to="/contact"
        onClick={onNavigate}
        className="block border-b border-slate-100 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700"
      >
        Contact Us
      </Link>
      <Link
        to="/edify-corner"
        onClick={onNavigate}
        className="block border-b border-slate-100 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700"
      >
        Edify Corner
      </Link>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Risen Sustainable Development" className="h-14 w-auto" />
          <span className="text-3xl font-extrabold tracking-tight text-brand-navy">
            RISEN <span className="text-brand-blue">DEVEL</span>
          </span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3">
          <Link
            to="/donate"
            className="hidden rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-dark sm:inline-flex"
          >
            Donate Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="text-xl">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100svh-64px)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-6 lg:hidden">
          <MobileNav onNavigate={() => setMobileOpen(false)} />
          <Link
            to="/donate"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  )
}
