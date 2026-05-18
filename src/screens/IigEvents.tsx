'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { Menu, X, ChevronRight, ArrowRight, MapPin, Calendar, Users, Building2, Globe, Mail, Phone, ExternalLink } from 'lucide-react'
import { useGoogleFont } from '../utils/fonts'
import { Link } from '@/lib'

import HERO_IMG from '../../Images/1.jpg.jpeg'
const ROSEWOOD_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/ddf14f93-059d-4fb4-a766-e3c1c2681254'
const APEX_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/0bea2ffb-2f3d-4768-8324-cdc370c6d467'
const LORDS_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/c5e873ee-e94e-427c-a6f1-e9fa7c3b1874'
import TARIQ_IMG from '../../Images/Tariq Rezaei.jpg'
import MAHMOUD_IMG from '../../Images/Mahmoud Nahas.jpeg'
const TAXI_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/d8984922-a63d-40e4-aa58-bd7c5867753b'
import IIG_LOGO from '../../Images/IIG_logo_v2_gold_rgb-1-scaled-e1769107661106.png'

const PARTNERS = ['Rosewood Hotels', 'CBRE', 'Knight Frank', 'JLL', 'Savills', 'Deloitte', 'KPMG', 'PwC', 'Investcorp', 'Gulf Capital', 'Lazard', 'Colliers']

const LinkedInIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const TwitterIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

export default function IIGEvents() {
  const displayFont = useGoogleFont('Cormorant Garamond')
  const bodyFont = useGoogleFont('DM Sans')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 48 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } })
  }

  return (
    <div style={{ fontFamily: bodyFont, backgroundColor: '#000', color: '#fff', overflowX: 'hidden' }}>

      {/* NAVBAR */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500"
        style={{ background: scrolled ? 'rgba(0,0,0,0.82)' : 'transparent', backdropFilter: scrolled ? 'blur(18px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,113,25,0.12)' : 'none' }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3">
          <img src={IIG_LOGO} alt="IIG" className="h-10 object-contain" />
          <span style={{ width: 1, height: 22, background: '#FF7119', display: 'inline-block', opacity: 0.7 }} />
          <span style={{ fontSize: 11, letterSpacing: 4, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', fontWeight: 500 }}>Events & Marketing</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', to: '/' },
            { label: 'About Us', to: '/IIGAbout' },
            { label: 'Our Services', to: '/IIGServices' },
            { label: 'Track Record', to: '/IIGTrackRecord' },
            { label: 'IIG Events', to: '/IigEvents' },
            { label: 'Careers', to: '/IIGCareers' },
          ].map(item => (
            item.to.startsWith('/') ? (
              <Link key={item.label} to={item.to}
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'IIG Events' ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ background: '#FF7119' }} />
              </Link>
            ) : (
              <a key={item.label} href={item.to}
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'IIG Events' ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ background: '#FF7119' }} />
              </a>
            )
          ))}
          <a href="#contact" className="cursor-pointer px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300" style={{ border: '1px solid #FF7119', color: '#FF7119', background: 'rgba(255,113,25,0.07)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FF7119'; (e.currentTarget as HTMLElement).style.color = '#000' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,113,25,0.07)'; (e.currentTarget as HTMLElement).style.color = '#FF7119' }}
          >Register</a>
        </div>
        <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(v => !v)} style={{ color: '#fff' }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ background: 'rgba(0,0,0,0.97)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/IIGAbout' },
              { label: 'Our Services', to: '/IIGServices' },
              { label: 'Track Record', to: '/IIGTrackRecord' },
              { label: 'IIG Events', to: '/IigEvents' },
              { label: 'Careers', to: '/IIGCareers' },
            ].map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: i * 0.07 } }}>
                {item.to.startsWith('/') ? (
                  <Link to={item.to} onClick={() => setMenuOpen(false)}
                    style={{ fontFamily: displayFont, fontSize: 44, color: '#fff', fontWeight: 700, letterSpacing: 2, display: 'block' }}
                    className="cursor-pointer hover:text-orange-400 transition-colors duration-300">
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.to} onClick={() => setMenuOpen(false)}
                    style={{ fontFamily: displayFont, fontSize: 44, color: '#fff', fontWeight: 700, letterSpacing: 2, display: 'block' }}
                    className="cursor-pointer hover:text-orange-400 transition-colors duration-300">
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1 — HERO */}
      <section ref={heroRef} className="relative w-full flex items-center justify-center" style={{ minHeight: '100vh' }} id="about">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={HERO_IMG} alt="IIG luxury investment summit" className="w-full h-full object-cover" style={{ filter: 'brightness(0.35) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.7) 0%, rgba(11,11,11,0.4) 50%, rgba(255,113,25,0.06) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 70%, rgba(255,113,25,0.07) 0%, transparent 70%)' }} />
        </motion.div>
        {[...Array(18)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2, background: i % 4 === 0 ? '#FF7119' : 'rgba(255,255,255,0.4)', left: `${(i * 5.5 + 8) % 95}%`, top: `${(i * 7.3 + 10) % 85}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
        <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ opacity: heroOpacity as any }}>
          <motion.p custom={0} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontSize: 11, letterSpacing: 6, textTransform: 'uppercase', color: '#FF7119', fontWeight: 600, marginBottom: 28 }}>
            IIG Events & Marketing — Est. London · Riyadh
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontFamily: displayFont, fontSize: 'clamp(52px, 8vw, 100px)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: 28 }}>
            Where Strategy<br />
            <span style={{ color: '#F0E2BC', fontStyle: 'italic' }}>Meets Exposure</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontSize: 18, color: 'rgba(240,226,188,0.75)', letterSpacing: 1, marginBottom: 52, fontWeight: 300 }}>
            IIG Events & Marketing — London · Riyadh
          </motion.p>
          <motion.div custom={3} variants={fadeUp as any} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
              style={{ background: '#FF7119', color: '#000' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#ff8a3d'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#FF7119'}>
              View Upcoming Events <ArrowRight size={16} />
            </a>
            <a href="#contact" className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', background: 'rgba(255,255,255,0.04)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#FF7119'; (e.currentTarget as HTMLElement).style.color = '#FF7119' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}>
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, rgba(255,113,25,0.8), transparent)' }} />
          </motion.div>
          <span style={{ fontSize: 9, letterSpacing: 4, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </section>

      {/* SECTION 2 — ABOUT */}
      <section className="relative w-full py-32 px-6" style={{ background: '#F0E2BC' }} id="about-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, marginBottom: 20 }}>About IIG Events</p>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 700, lineHeight: 1.1, color: '#0B0B0B', marginBottom: 28 }}>
              A Bilateral Events Platform for Gulf and<br />
              <span style={{ fontStyle: 'italic', color: '#FF7119' }}>British Capital</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(11,11,11,0.65)', fontWeight: 300, marginBottom: 20 }}>
              IIG Events & Marketing bridges the Gulf and British capital markets through exclusive, invitation-only investment events. With offices in London and Riyadh, we curate cross-border experiences that connect high-net-worth investors, sovereign wealth representatives, and premier real estate principals.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(11,11,11,0.65)', fontWeight: 300 }}>
              Our philosophy is simple: quality over quantity. Each event is meticulously produced to foster genuine bilateral investment relationships in environments befitting the world's most discerning capital.
            </p>
          </motion.div>
          <div className="flex flex-col gap-5">
            {[
              { num: '2', label: 'Global Offices', sub: 'London & Riyadh' },
              { num: '2:1', label: 'Investor to Service Provider Ratio', sub: 'Guaranteed exclusivity' },
              { num: '100', label: 'Maximum Attendees', sub: 'Per flagship event' }
            ].map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(255,113,25,0.18)' }}
                className="flex items-center gap-8 p-8 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,113,25,0.15)', borderLeft: '3px solid #FF7119', transition: 'all 0.35s ease' }}>
                <div style={{ fontFamily: displayFont, fontSize: 56, fontWeight: 700, color: '#FF7119', lineHeight: 1, minWidth: 80 }}>{stat.num}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0B0B0B', fontSize: 16, letterSpacing: 0.5 }}>{stat.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(11,11,11,0.5)', marginTop: 4 }}>{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TEAM */}
      <section className="relative w-full py-32 px-6" style={{ background: '#0B0B0B' }} id="team">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, marginBottom: 16 }}>Our Team</p>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 700, color: '#fff' }}>
              The People Behind<br /><span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>The Platform</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { name: 'Tariq Rezaei', title: 'Head of Business Relations & Development', img: TARIQ_IMG },
              { name: 'Mahmoud Nahas', title: 'Events & Marketing Lead', img: MAHMOUD_IMG }
            ].map((member, i) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.4s ease' }}>
                <div className="relative overflow-hidden w-full" style={{ aspectRatio: '3/4' }}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.8) saturate(0.85)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }} />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,113,25,0.12) 0%, transparent 60%)' }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 style={{ fontFamily: displayFont, fontSize: 30, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{member.name}</h3>
                  <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#FF7119', fontWeight: 600 }}>{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PARTNERS */}
      <section className="w-full py-24 overflow-hidden" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-6 mb-14 text-center">
          <p style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, marginBottom: 14 }}>Partners & Sponsors</p>
          <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#0B0B0B' }}>
            Trusted by the World's<br /><span style={{ fontStyle: 'italic' }}>Premier Institutions</span>
          </h2>
        </div>
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #fff, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #fff, transparent)' }} />
          <motion.div className="flex gap-16 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={`${p}-${i}`} className="flex items-center gap-4 flex-shrink-0">
                <div style={{ width: 8, height: 8, background: '#FF7119', borderRadius: '50%', flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(11,11,11,0.4)' }}>{p}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — MARKETING SERVICES */}
      <section className="w-full py-32 px-6" style={{ background: '#F0E2BC' }} id="services">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <p style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, marginBottom: 20 }}>Marketing Services</p>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.1, color: '#0B0B0B', marginBottom: 28 }}>
              Driving Investor<br /><span style={{ fontStyle: 'italic', color: '#FF7119' }}>Connections Globally</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: 'rgba(11,11,11,0.65)', fontWeight: 300, marginBottom: 24 }}>
              From black London taxis wrapped in client branding navigating the capital's most prestigious postcodes, to commanding digital screens at Heathrow Terminal 5 — IIG delivers unrivalled campaign presence across the UK's most influential media environments.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {['London Black Taxi Campaigns', 'Heathrow Terminal Screens', 'Outdoor Premium Advertising', 'Digital & Social Amplification', 'Event Production & Branding'].map((svc, i) => (
                <motion.div key={svc} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4">
                  <div style={{ width: 20, height: 1, background: '#FF7119' }} />
                  <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: 1, color: '#0B0B0B' }}>{svc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative">
            <div className="relative overflow-hidden" style={{ borderRadius: 2 }}>
              <img src={TAXI_IMG} alt="IIG London taxi advertising campaign" className="w-full object-cover" style={{ aspectRatio: '4/3', filter: 'saturate(0.9) brightness(0.95)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,113,25,0.08) 0%, transparent 50%)' }} />
            </div>
            <motion.div className="absolute -bottom-6 -left-6 p-6"
              style={{ background: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,113,25,0.3)', backdropFilter: 'blur(12px)', minWidth: 210 }}
              whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#FF7119', fontFamily: displayFont }}>500+</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, marginTop: 4 }}>Outdoor impressions per campaign</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — FLAGSHIP EVENTS */}
      <section className="w-full" style={{ background: '#000' }} id="events">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-8 text-center">
          <p style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, marginBottom: 16 }}>Flagship Events 2026</p>
          <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(38px, 5vw, 68px)', fontWeight: 700, color: '#fff', marginBottom: 0 }}>
            Landmark Moments<br /><span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>In Global Investment</span>
          </h2>
        </div>
        {[
          {
            date: '2–4 Aug 2026', name: 'IIG Real Estate Exhibition', venue: 'Grand Ballroom, The Chancery Rosewood, Grosvenor Square', city: 'London', img: ROSEWOOD_IMG,
            tag: 'Real Estate'
          },
          {
            date: '11 Jun 2026', name: 'UK–KSA Apex Summit', venue: 'Queen Elizabeth II Centre, Westminster', city: 'London', img: APEX_IMG,
            tag: 'Investment Summit'
          },
          {
            date: '9 Jul 2026', name: 'Real Estate Reception', venue: 'House of Lords, Palace of Westminster', city: 'London', img: LORDS_IMG,
            tag: 'Exclusive Reception'
          }
        ].map((event, i) => (
          <motion.div key={event.name} className="relative w-full overflow-hidden"
            style={{ minHeight: 520 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1 }}>
            <img src={event.img} alt={event.name} className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.7)', transition: 'filter 0.5s ease' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(255,113,25,0.05) 100%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,113,25,0.06) 0%, transparent 70%)' }} />
            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 py-20">
              <div className="max-w-3xl">
                <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, background: 'rgba(255,113,25,0.12)', padding: '5px 14px', border: '1px solid rgba(255,113,25,0.25)', display: 'inline-block', marginBottom: 20 }}>
                  {event.tag}
                </motion.span>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                  style={{ fontFamily: displayFont, fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 800, color: '#FF7119', lineHeight: 1, marginBottom: 14, letterSpacing: -1 }}>
                  {event.date}
                </motion.div>
                <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                  style={{ fontFamily: displayFont, fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
                  {event.name}
                </motion.h3>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-2 mb-10">
                  <MapPin size={14} style={{ color: '#FF7119' }} />
                  <span style={{ fontSize: 14, color: 'rgba(240,226,188,0.75)', letterSpacing: 0.5 }}>{event.venue} · {event.city}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4">
                  <button className="cursor-pointer inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                    style={{ background: '#FF7119', color: '#000' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#ff8a3d'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#FF7119'}>
                    Register Interest <ArrowRight size={14} />
                  </button>
                  <button className="cursor-pointer inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                    style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#fff', background: 'rgba(255,255,255,0.04)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#FF7119'; (e.currentTarget as HTMLElement).style.color = '#FF7119' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}>
                    Register Attendance
                  </button>
                </motion.div>
              </div>
            </div>
            {i < 2 && <div className="absolute bottom-0 left-0 right-0" style={{ height: 1, background: 'linear-gradient(90deg, transparent 0%, rgba(255,113,25,0.4) 50%, transparent 100%)' }} />}
          </motion.div>
        ))}
      </section>

      {/* SECTION 7 — UPCOMING EVENTS */}
      <section className="w-full py-32 px-6" style={{ background: '#F8F4EC' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
            <p style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, marginBottom: 14 }}>Upcoming Events</p>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#0B0B0B' }}>
              On the Horizon
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { tag: 'Investment Networking', date: 'Autumn 2026', venue: 'Leeds, Northern England', name: 'The Northern Investment Table', desc: 'An exclusive northern infrastructure and real estate investment gathering.' },
              { tag: 'Regional Roadshow', date: 'Summer 2026', venue: 'Blackburn, Lancashire', name: 'Haramain Roadshow: Blackburn', desc: 'A targeted regional investor engagement roadshow connecting Gulf capital with northern UK opportunities.' }
            ].map((ev, i) => (
              <motion.div key={ev.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(255,113,25,0.1)' }}
                className="p-10 cursor-pointer group"
                style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(20px)', border: '1px solid rgba(11,11,11,0.08)', borderTop: '2px solid #FF7119', transition: 'all 0.35s ease' }}>
                <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', fontWeight: 700, color: '#FF7119', background: 'rgba(255,113,25,0.1)', padding: '4px 12px', display: 'inline-block', marginBottom: 20 }}>
                  {ev.tag}
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={13} style={{ color: '#FF7119' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#FF7119', letterSpacing: 1 }}>{ev.date}</span>
                </div>
                <h3 style={{ fontFamily: displayFont, fontSize: 30, fontWeight: 700, color: '#0B0B0B', lineHeight: 1.2, marginBottom: 10 }}>{ev.name}</h3>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={12} style={{ color: 'rgba(11,11,11,0.4)' }} />
                  <span style={{ fontSize: 12, color: 'rgba(11,11,11,0.45)', letterSpacing: 0.5 }}>{ev.venue}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(11,11,11,0.55)' }}>{ev.desc}</p>
                <div className="mt-8 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#FF7119' }}>Express Interest</span>
                  <ArrowRight size={13} style={{ color: '#FF7119' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — PAST EVENTS */}
      <section className="w-full py-32 px-6" style={{ background: '#0B0B0B' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <p style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700, marginBottom: 14 }}>Legacy</p>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#fff' }}>
              Past Events
            </h2>
          </motion.div>
          <div className="flex flex-col">
            {[
              { name: 'IIG London Real Estate Summit', date: 'Sept 2024', venue: 'One Whitehall Place, London' },
              { name: 'Gulf Capital Forum', date: 'March 2024', venue: 'Savoy Hotel, London' },
              { name: 'UK–KSA Investor Dinner', date: 'Nov 2023', venue: 'Carlton Club, London' },
              { name: 'IIG Real Estate Reception', date: 'June 2023', venue: 'Reform Club, Pall Mall' },
              { name: 'Bilateral Investment Roundtable', date: 'Feb 2023', venue: 'Corinthia Hotel, London' },
              { name: 'Northern Opportunity Summit', date: 'Oct 2022', venue: 'Midland Hotel, Manchester' },
            ].map((ev, i) => (
              <motion.div key={ev.name}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b group cursor-pointer"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,113,25,0.2)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'}>
                <div className="flex items-start gap-6">
                  <span style={{ fontFamily: displayFont, fontSize: 13, fontWeight: 700, color: '#FF7119', letterSpacing: 1, minWidth: 80, paddingTop: 2 }}>{ev.date}</span>
                  <h3 style={{ fontFamily: displayFont, fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.3 }} className="group-hover:text-orange-300 transition-colors duration-300">{ev.name}</h3>
                </div>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: 0.5, marginTop: 8, paddingLeft: 86 }} className="sm:pl-0 sm:mt-0">{ev.venue}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-6 py-20" style={{ background: '#000', borderTop: '1px solid rgba(255,113,25,0.15)' }} id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={IIG_LOGO} alt="IIG" className="h-10 object-contain" />
                <span style={{ width: 1, height: 24, background: '#FF7119', display: 'inline-block' }} />
                <span style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>Events</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.4)', maxWidth: 260 }}>Bridging Gulf and British capital markets through world-class investment events since 2018.</p>
            </div>
            <div>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 700, marginBottom: 20 }}>Contact</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Mail size={14} />, text: 'events@iig.sa' },
                  { icon: <Phone size={14} />, text: '+44 20 7946 0000' },
                  { icon: <MapPin size={14} />, text: 'London · Riyadh' }
                ].map(c => (
                  <div key={c.text} className="flex items-center gap-3 cursor-pointer group">
                    <span style={{ color: '#FF7119' }}>{c.icon}</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }} className="group-hover:text-white transition-colors duration-300">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 700, marginBottom: 20 }}>Follow</p>
              <div className="flex gap-5">
                {[LinkedInIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                  <motion.a key={i} href="#" className="cursor-pointer flex items-center justify-center"
                    style={{ width: 42, height: 42, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.45)' }}
                    whileHover={{ borderColor: '#FF7119', color: '#FF7119', y: -2 }}
                    transition={{ duration: 0.2 }}>
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3">
                {['About IIG', 'Flagship Events', 'Services', 'Register'].map(nav => (
                  <a key={nav} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: 1 }}
                    className="hover:text-white cursor-pointer transition-colors duration-300">{nav}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28 }} className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: 1 }}>© 2026 IIG Saudi Arabia. All rights reserved.</span>
            <a href="https://iig.sa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer"
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF7119'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)'}>
              iig.sa <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
