import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NAV_ITEMS } from '@/lib/navbarItem'
import { useNav } from '@/context/NavContext'
import NavStart from './NavStart'
import NavBetween from './NavBetween'
import NavCta from './NavCta'

gsap.registerPlugin(ScrollTrigger)

const SECTIONS = ['hero', 'metrics', 'agent-demo', 'scalability', 'contact']

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const linkEls = useRef<Map<string, HTMLAnchorElement>>(new Map())

  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const { activeMenu, setActiveMenu } = useNav()

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current)
        progressRef.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    const kills = SECTIONS.flatMap(id => {
      const el = document.getElementById(id)
      if (!el) return []
      return [
        ScrollTrigger.create({
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActive(id),
          onEnterBack: () => setActive(id)
        })
      ]
    })
    return () => kills.forEach(t => t.kill())
  }, [])

  // Navbar entrance
  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
  }, [])

  // Mobile menu
  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  const openMenu = () => {
    setMenuOpen(true)
    setActiveMenu('menu')
    gsap.set(mobileMenuRef.current, { display: 'flex' })
    gsap.fromTo(mobileMenuRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
  }

  const closeMenu = () => {
    gsap.to(mobileMenuRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(mobileMenuRef.current, { display: 'none' })
        setMenuOpen(false)
        setActiveMenu(null)
      }
    })
  }

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    if (menuOpen) closeMenu()
  }

  return (
    <>
      {/* Progress bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 z-100 h-0.5 w-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #86868b, #f5f5f7, #ffffff)',
          boxShadow: '0 0 16px rgba(245, 245, 247, 0.5)',
          transition: 'width 0.08s linear'
        }}
      />

      {/* Main navbar */}
      <nav
        ref={navRef}
        className="fixed w-full top-0 z-50 pt-4 md:pt-6 px-4 md:px-8 lg:px-12 transition-all duration-400"
        style={{
          background: scrolled ? 'linear-gradient(180deg, rgba(10,10,10,0.95), rgba(10,10,10,0.85))' : 'transparent',
          backdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,245,247,0.08)' : 'none',
          paddingTop: scrolled ? '12px' : '24px',
          paddingBottom: scrolled ? '12px' : '20px'
        }}
      >
        {/* Container */}
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-6 md:gap-8 lg:gap-12">
            {/* Logo */}
            <NavStart
              registerEl={(id, el) => linkEls.current.set(id, el)}
              scrollTo={scrollTo}
            />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
              <NavBetween
                active={active}
                registerEl={(id, el) => linkEls.current.set(id, el)}
                scrollTo={scrollTo}
              />
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden md:block">
                <NavCta />
              </div>

              {/* Mobile menu toggle */}
              <button
                ref={menuToggleRef}
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg transition-all duration-300"
                style={{
                  background: menuOpen ? 'rgba(245, 245, 247, 0.1)' : 'transparent',
                  border: menuOpen ? '1px solid rgba(245, 245, 247, 0.2)' : '1px solid transparent'
                }}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5 text-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 top-[70px] z-40 md:hidden flex flex-col bg-black/98 backdrop-blur-xl border-t border-silver/5"
        style={{
          display: 'none'
        }}
      >
        {/* Menu items */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="space-y-2">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                onClick={e => {
                  e.preventDefault()
                  scrollTo(item.href)
                }}
                className="block py-4 px-4 rounded-lg transition-all duration-300 no-underline"
                style={{
                  background: active === item.id ? 'rgba(245, 245, 247, 0.1)' : 'transparent',
                  borderLeft: active === item.id ? '3px solid rgba(245, 245, 247, 0.4)' : '3px solid transparent'
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-semibold min-w-[32px]"
                    style={{ color: 'rgba(245, 245, 247, 0.4)' }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-base font-semibold transition-colors"
                    style={{
                      color: active === item.id ? '#ffffff' : 'rgba(245, 245, 247, 0.8)'
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="border-t border-gray/10 px-6 py-6">
          <NavCta />
        </div>
      </div>
    </>
  )
}
