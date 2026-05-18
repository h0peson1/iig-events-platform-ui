'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { 
  Menu, X, MapPin, Mail, Phone, ExternalLink, Briefcase, 
  Globe, TrendingUp, Users, ArrowRight, ArrowUpRight
} from 'lucide-react'
import { useGoogleFont } from '../utils/fonts'
import { Link } from '@/lib'

const HERO_IMG = 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80&w=1600'
const HALL_IMG = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600'
import IIG_LOGO from '../../Images/IIG_logo_v2_gold_rgb-1-scaled-e1769107661106.png'

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

export default function IIGCareers() {
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
    <div style={{ fontFamily: bodyFont, backgroundColor: '#ffffff', color: '#0b2545', overflowX: 'hidden' }}>

      {/* NAVBAR */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500"
        style={{ background: scrolled ? 'rgba(11,37,69,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(18px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
      >
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img src={IIG_LOGO} alt="IIG" className="h-10 object-contain" />
          <span style={{ width: 1, height: 22, background: '#FF7119', display: 'inline-block', opacity: 0.7 }} />
          <span style={{ fontSize: 11, letterSpacing: 4, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', fontWeight: 500 }}>Investments</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', to: '/' },
            { label: 'About Us', to: '/IIGAbout' },
            { label: 'Our Services', to: '/IIGServices' },
            { label: 'Track Record', to: '/IIGTrackRecord' },
            { label: 'IIG Events', to: '/IigEvents' },
            { label: 'Careers', to: '/IIGCareers' },
          ].map(item => (
            <Link key={item.label} to={item.to}
              style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'Careers' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
              className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'Careers' ? 'w-full' : 'w-0 group-hover:w-full'}`}
                style={{ background: '#FF7119' }} />
            </Link>
          ))}
          <a href="#contact"
            className="cursor-pointer px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
            style={{ border: '1px solid #FF7119', color: '#FF7119', background: 'rgba(255,113,25,0.07)' }}
          >Contact Us</a>
        </div>
        <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(v => !v)} style={{ color: '#fff' }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative w-full flex items-center justify-start pt-32 pb-24 px-6 md:px-16" style={{ minHeight: '75vh' }}>
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={HERO_IMG} alt="Careers at IIG" className="w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(11,37,69,0.9) 0%, rgba(11,37,69,0.3) 100%)' }} />
        </motion.div>
        
        <motion.div className="relative z-10 max-w-3xl w-full" style={{ opacity: heroOpacity as any }}>
          <motion.div custom={0} variants={fadeUp as any} initial="hidden" animate="visible" className="flex items-center gap-4 mb-6">
            <div style={{ width: 40, height: 1, background: '#FF7119' }} />
            <span style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Careers</span>
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontFamily: displayFont, fontSize: 'clamp(50px, 8vw, 90px)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: 24 }}>
            Careers
          </motion.h1>
          <motion.p custom={2} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontWeight: 300 }}>
            Join a global team shaping the future of real estate investment.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="w-full py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#0b2545', marginBottom: 24 }}>
            Build Your Future with IIG
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 18, color: '#4a5568', lineHeight: 1.8, fontWeight: 300, maxWidth: 800, margin: '0 auto' }}>
            We seek exceptional talent to drive innovation and excellence in global real estate investment. Discover opportunities that align with your ambitions and expertise.
          </motion.p>
        </div>
      </section>

      {/* EMPLOYMENT PROMO CARD */}
      <section className="w-full pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden flex flex-col shadow-2xl relative"
            style={{ background: 'linear-gradient(135deg, #074C5E 0%, #0A3742 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            
            <div className="h-64 sm:h-80 w-full relative">
              <img src={HALL_IMG} alt="Corporate Event" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, #074C5E)' }} />
            </div>

            <div className="p-10 md:p-16 text-center -mt-20 relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 backdrop-blur-md"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                <Briefcase size={32} />
              </div>
              <h3 style={{ fontFamily: displayFont, fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Employment</h3>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 40px auto', fontWeight: 300 }}>
                Dedicated, driven, and collaborative professionals excel within our organization. Submit your profile to determine if IIG is the perfect fit for your career aspirations.
              </p>
              
              <a href="#apply" className="group inline-flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm border-b border-white pb-1 hover:text-[#C49B55] hover:border-[#C49B55] transition-all duration-300">
                Apply Here <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN IIG GRID */}
      <section className="w-full py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#0b2545', marginBottom: 16 }}>
              Why Join IIG
            </h2>
            <p style={{ fontSize: 16, color: '#4a5568', fontWeight: 300 }}>Experience a culture of excellence, innovation, and global impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Globe size={32}/>, title: 'Global Reach', desc: 'Work on international projects spanning multiple continents and markets.', bg: '#e2e8f0', color: '#0b2545' },
              { icon: <TrendingUp size={32}/>, title: 'Career Growth', desc: 'Accelerate your professional development with structured mentorship.', bg: '#fef3c7', color: '#b45309' },
              { icon: <Users size={32}/>, title: 'Expert Team', desc: 'Collaborate with industry leaders and experienced professionals.', bg: '#e2e8f0', color: '#0b2545' },
            ].map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8" style={{ background: perk.bg, color: perk.color }}>
                  {perk.icon}
                </div>
                <h3 style={{ fontFamily: displayFont, fontSize: 28, fontWeight: 700, color: '#0b2545', marginBottom: 16 }}>{perk.title}</h3>
                <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.7 }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCELLENCE THROUGH COLLABORATION */}
      <section className="w-full py-32 px-6" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #0a1320 100%)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 30 }}>
              Excellence Through <br /><span className="italic">Collaboration</span>
            </h2>
            <div className="flex flex-col gap-6">
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, fontWeight: 300 }}>
                At IIG, we believe that true excellence is achieved when diverse minds come together. Our culture is built on a foundation of trust, mutual respect, and a shared passion for delivering outstanding results in the global real estate market.
              </p>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontWeight: 300 }}>
                We empower our team members to take ownership of their work, encouraging innovative thinking and bold solutions. When you join us, you become part of a supportive network that celebrates success and fosters continuous learning.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4">
            {[
              { val: '15+', label: 'Countries' },
              { val: '£500M+', label: 'Assets Under Management' },
              { val: '50+', label: 'Team Members' },
              { val: '10+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="p-10 rounded-2xl backdrop-blur-md text-center flex flex-col justify-center items-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontFamily: displayFont, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{stat.val}</div>
                <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="w-full py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#0b2545', marginBottom: 16 }}>
              Application Process
            </h2>
            <p style={{ fontSize: 16, color: '#4a5568', fontWeight: 300 }}>A transparent and efficient journey from application to onboarding.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, title: 'Submit Application', desc: 'Send your CV and cover letter outlining your expertise and career goals.' },
              { num: 2, title: 'Initial Review', desc: 'Our talent team evaluates your profile against our current opportunities.' },
              { num: 3, title: 'Interview Process', desc: 'Engage with our leadership team to discuss your potential fit at IIG.' },
              { num: 4, title: 'Welcome Aboard', desc: 'Receive your offer and begin your comprehensive onboarding journey.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#f0f4f8] p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0b2545] text-white font-bold mb-6 text-xl">
                  {step.num}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: '#0b2545', marginBottom: 12 }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-24 px-6" style={{ background: '#074C5E' }} id="apply">
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#fff', marginBottom: 20 }}>
            Ready to Shape Your Future?
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', fontWeight: 300, marginBottom: 40 }}>
            Take the first step towards a rewarding career in global real estate investment.
          </p>
          <button className="px-10 py-5 bg-[#C49B55] hover:bg-[#b08b4c] text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
            Apply Here
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-6 py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-3">
              <img src={IIG_LOGO} alt="IIG" className="h-10 object-contain" />
              <span style={{ width: 1, height: 24, background: '#FF7119', display: 'inline-block' }} />
              <span style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>Investments</span>
            </div>
            <div className="flex gap-8">
              <a href="mailto:careers@iig.sa" className="text-sm text-white/50 hover:text-white transition-colors">careers@iig.sa</a>
              <span className="text-sm text-white/50">Riyadh · London · New York</span>
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
