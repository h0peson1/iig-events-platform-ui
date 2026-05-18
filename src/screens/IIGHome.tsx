'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { Menu, X, ArrowRight, MapPin, Mail, Phone, ExternalLink, Globe, Shield, Building2, TrendingUp, Users, CheckCircle, ChevronRight, BarChart } from 'lucide-react'
import { useGoogleFont } from '../utils/fonts'
import { Link } from '@/lib'

const HERO_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/c5e28f09-39fb-4054-9c2b-4d9748d0d1f7'
const LONDON_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/2660da6e-f252-4893-bd3d-27559e162319'
import IIG_LOGO from '../../Images/IIG_logo_v2_gold_rgb-1-scaled-e1769107661106.png'
const RIYADH_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/a5f2cdb1-c225-4722-957e-89551667a452'
const HANDSHAKE_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/1e8d9188-fa43-4c75-bb29-da86457ad2c6'

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

export default function IIGHome() {
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

  const SERVICES = [
    { title: 'Global Real Estate Funds', desc: 'Diversified portfolios designed for consistent returns within Shariah principles.', icon: <Globe size={24} /> },
    { title: 'Asset & Property Management', desc: 'Active management to minimize vacancies and drive long-term capital appreciation.', icon: <Building2 size={24} /> },
    { title: 'Shariah Debt Advisory', desc: 'Bespoke financial structuring and competitive profit rates with over £200M arranged.', icon: <BarChart size={24} /> },
    { title: 'Strategic Acquisition', desc: 'Off-market deal sourcing for assets significantly below replacement cost.', icon: <TrendingUp size={24} /> },
  ]

  const STATS = [
    { num: '£500M+', label: 'Assets Under Management' },
    { num: '3,200+', label: 'Global Investors' },
    { num: '150+', label: 'Premium Properties' },
    { num: '45', label: 'Countries Worldwide' },
  ]

  const PROJECTS = [
    { title: 'UK Portfolio Restructuring', desc: 'A portfolio of 39 properties where active management significantly boosted efficiency and reduced costs.', img: LONDON_IMG, tag: 'Residential' },
    { title: 'Meadow Mill, Manchester', desc: 'Successful off-plan acquisition and sales strategy, securing assets below replacement cost.', img: HERO_IMG, tag: 'Development' },
    { title: 'Global Green 8 Fund', desc: 'A Shariah-compliant UK commercial real estate fund focusing on sustainable, income-producing assets.', img: RIYADH_IMG, tag: 'Fund' },
  ]

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
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'Home' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ background: '#FF7119' }} />
              </Link>
            ) : (
              <a key={item.label} href={item.to}
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'Home' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ background: '#FF7119' }} />
              </a>
            )
          ))}
          <Link to="/IigEvents"
            className="cursor-pointer px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
            style={{ border: '1px solid #FF7119', color: '#FF7119', background: 'rgba(255,113,25,0.07)' }}
          >Register</Link>
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
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}>
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

      {/* HERO */}
      <section ref={heroRef} className="relative w-full flex items-center justify-center" style={{ minHeight: '100vh' }}>
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={LONDON_IMG} alt="London Skyline Luxury Investment" className="w-full h-full object-cover" style={{ filter: 'brightness(0.25) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(255,113,25,0.08) 100%)' }} />
        </motion.div>
        
        <motion.div className="relative z-10 px-6 max-w-6xl mx-auto w-full text-center" style={{ opacity: heroOpacity as any }}>
          <motion.div custom={0} variants={fadeUp as any} initial="hidden" animate="visible" className="flex items-center justify-center gap-4 mb-8">
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
            <span style={{ fontSize: 10, letterSpacing: 6, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Shariah-Compliant Real Estate Investment Excellence</span>
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontFamily: displayFont, fontSize: 'clamp(44px, 7vw, 92px)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: 28 }}>
            Your Gateway to<br />
            <span style={{ color: '#F0E2BC', fontStyle: 'italic' }}>Global Prosperity</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontSize: 18, color: 'rgba(240,226,188,0.7)', letterSpacing: 0.5, maxWidth: 640, lineHeight: 1.8, fontWeight: 300, margin: '0 auto 40px auto' }}>
            Managing over £500M in assets with a bespoke, one-stop-shop approach. From acquisition to exit, our experts in Saudi Arabia, the UK, and the US ensure your capital works harder.
          </motion.p>
          <motion.div custom={3} variants={fadeUp as any} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/IIGServices"
              className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300"
              style={{ background: '#FF7119', color: '#000' }}
            >
              Our Services <ArrowRight size={14} />
            </Link>
            <a href="#contact"
              className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#fff', background: 'rgba(255,255,255,0.04)' }}
            >
              Schedule Consultation
            </a>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, rgba(255,113,25,0.8), transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative w-full py-32 px-6" style={{ background: '#F0E2BC' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.1, color: '#0B0B0B', marginBottom: 32 }}>
              Bridging Local Values with<br />
              <span style={{ fontStyle: 'italic', color: '#FF7119' }}>Global Real Estate Opportunities</span>
            </h2>
            <div className="flex flex-col gap-6 mb-10">
              <p style={{ fontSize: 17, lineHeight: 1.9, color: 'rgba(11,11,11,0.65)', fontWeight: 300 }}>
                International Investment Gate (IIG) is a premier Shariah-compliant advisory firm. Managed by seasoned experts in Saudi Arabia, the United Kingdom, and the United States, we operate a growing portfolio of over £500M, offering a seamless “One-Stop Shop” experience for wealth preservation and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Shariah Compliance', desc: 'Investment structures compatible with Shariah principles, ensuring your wealth grows with transparency.' },
                { title: 'One-Stop Shop', desc: 'We handle everything from acquisition, structuring, financing, management, to exit so you enjoy the returns without the burden.' }
              ].map(item => (
                <div key={item.title}>
                  <div className="flex items-center gap-3 mb-3">
                    <Shield size={18} color="#FF7119" />
                    <h3 style={{ fontFamily: displayFont, fontSize: 22, fontWeight: 700, color: '#0B0B0B' }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(11,11,11,0.6)', fontWeight: 300 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: 2 }}>
              <img src={HANDSHAKE_IMG} alt="Investment Meeting" className="w-full h-full object-cover" style={{ filter: 'saturate(0.9) brightness(0.95)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,113,25,0.08) 0%, transparent 60%)' }} />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -left-10 p-8 hidden md:block"
              style={{ background: '#0B0B0B', border: '1px solid rgba(255,113,25,0.3)' }}>
              <div style={{ fontFamily: displayFont, fontSize: 48, fontWeight: 700, color: '#FF7119', lineHeight: 1, marginBottom: 8 }}>30%</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>Superior Returns</div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 8, maxWidth: 200 }}>Delivered through deep market insight and expert alliances.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full py-20 px-6 border-y border-white/5" style={{ background: '#000' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center">
              <div style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, color: '#FF7119', lineHeight: 1, marginBottom: 12 }}>{stat.num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="w-full py-32 px-6" style={{ background: '#0B0B0B' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 text-center flex flex-col items-center">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>What We Do</span>
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: 800 }}>
              End-to-end services tailored to maximize your <span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>investment potential</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6, background: 'rgba(255,255,255,0.05)' }}
                className="p-8 cursor-pointer group"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderTop: '2px solid rgba(255,113,25,0.5)', transition: 'all 0.35s ease' }}>
                <div style={{ color: '#FF7119', marginBottom: 20 }} className="group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', fontWeight: 300, marginBottom: 24 }}>{s.desc}</p>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ChevronRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="w-full py-32 px-6" style={{ background: '#000' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-5">
                <div style={{ width: 24, height: 1, background: '#FF7119' }} />
                <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our Track Record</span>
              </div>
              <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                Featured Investment <span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>Projects</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Link to="/IigEvents" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-white transition-colors duration-300 pb-2 border-b border-orange-400/30 hover:border-white">
                View All Projects <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, i) => (
              <motion.div key={proj.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '4/3' }}>
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" style={{ filter: 'brightness(0.7)' }} />
                  <div className="absolute top-4 left-4">
                    <span style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: '#fff', background: '#FF7119', padding: '4px 10px', fontWeight: 700 }}>{proj.tag}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: displayFont, fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 12 }} className="group-hover:text-orange-400 transition-colors duration-300">{proj.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-6 py-20" style={{ background: '#0B0B0B', borderTop: '1px solid rgba(255,113,25,0.15)' }} id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={IIG_LOGO} alt="IIG" className="h-10 object-contain" />
                <span style={{ width: 1, height: 24, background: '#FF7119', display: 'inline-block' }} />
                <span style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>Investments</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.4)', maxWidth: 260 }}>Bridging Gulf and British capital markets through world-class investment strategies since 2018.</p>
            </div>
            <div>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 700, marginBottom: 20 }}>Contact</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Mail size={14} />, text: 'investments@iig.sa' },
                  { icon: <Phone size={14} />, text: '+44 20 7946 0000' },
                  { icon: <MapPin size={14} />, text: 'Riyadh · London · New York' }
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
                {[
                  { label: 'About IIG', to: '/IIGAbout' },
                  { label: 'Services', to: '/IIGServices' },
                  { label: 'Track Record', to: '/IIGTrackRecord' },
                ].map(nav => (
                  <Link key={nav.label} to={nav.to}
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: 1 }}
                    className="hover:text-white cursor-pointer transition-colors duration-300">{nav.label}</Link>
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
