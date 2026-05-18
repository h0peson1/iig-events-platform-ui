'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { 
  Compass, Gavel, CheckCircle2, FileText, PieChart, Users2, 
  CalendarDays, LineChart, MessageSquare, Trophy, Landmark, 
  Menu, X, MapPin, Mail, Phone, ExternalLink, Globe, Shield, 
  TrendingUp, Search, Handshake, MonitorSmartphone, Settings, 
  Building2, Building, ChevronDown
} from 'lucide-react'
import { useGoogleFont } from '../utils/fonts'
import { Link } from '@/lib'

const BOARDROOM_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/2660da6e-f252-4893-bd3d-27559e162319'
const CHART_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/a2f7c320-f55f-4a34-8c88-299f1d4f241a'
import IIG_LOGO from '../../Images/IIG_logo_v2_gold_rgb-1-scaled-e1769107661106.png'
const NEW_YORK_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/c5e28f09-39fb-4054-9c2b-4d9748d0d1f7'

const RIYADH_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/a5f2cdb1-c225-4722-957e-89551667a452'

const PHASE02_IMG = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600'
const PHASE03_IMG1 = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
const PHASE03_IMG2 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
const PHASE03_IMG3 = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800'
const PHASE04_IMG = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'

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

const REGIONS = [
  {
    id: 'saudi', name: 'Saudi Arabia', bg: RIYADH_IMG,
    overview: 'Aligned with Vision 2030, our Riyadh headquarters acts as the definitive gateway for international investors seeking to capitalize on the Kingdom’s booming market, while empowering local developers.',
    services: [
      { title: 'IIG Events & Marketing', desc: 'Organizing high-impact exhibitions and exclusive roadshows to showcase Saudi projects globally.' },
      { title: 'Shariah Debt Advisory', desc: 'Leveraging strong relationships with Saudi banks to arrange Shariah-compliant funding.' },
      { title: 'Foreign Investment', desc: 'Full-spectrum advisory for international investors in Saudi property. We identify prime opportunities and handle legal frameworks.' },
      { title: 'Direct Sales Execution', desc: 'Dedicated sales professionals managing the entire cycle from inquiry to contract.' },
    ]
  },
  {
    id: 'uk', name: 'United Kingdom', bg: BOARDROOM_IMG,
    overview: 'The UK represents our operational core. With a comprehensive footprint across prime markets, we handle every aspect of the investment lifecycle: sourcing, funding, management, and sales.',
    services: [
      { title: 'IIG Estates & Concierge', desc: 'Full-service luxury agency experience handling sales and letting of prime residential properties in London.' },
      { title: 'Shariah Debt Advisory', desc: 'Your strategic "Financial Architect." Structuring bespoke solutions with over £200M arranged from UK Islamic banks.' },
      { title: 'Strategic Acquisition', desc: 'Sourcing "off-market" opportunities below replacement cost, ensuring instant equity.' },
      { title: 'Asset Management', desc: 'In-house management to proactively reduce costs and boost NOI, with optimal wealth protection.' },
    ]
  },
  {
    id: 'us', name: 'United States', bg: NEW_YORK_IMG,
    overview: 'The US offers the world’s deepest real estate market. Our strategy focuses on providing access to institutional-grade opportunities typically reserved for major funds, prioritizing stability and USD returns.',
    services: [
      { title: 'Commercial Financing Advisory', desc: 'Arranging Shariah-compliant leverage for commercial real estate acquisitions.' },
      { title: 'Institutional Assets', desc: 'Identifying and syndicating large-scale commercial acquisitions in major US economic hubs.' },
    ]
  }
]

export default function IIGServices() {
  const displayFont = useGoogleFont('Cormorant Garamond')
  const bodyFont = useGoogleFont('DM Sans')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeRegion, setActiveRegion] = useState(REGIONS[0].id)
  
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

  const activeRegionData = REGIONS.find(r => r.id === activeRegion)!

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
            item.to.startsWith('/') ? (
              <Link key={item.label} to={item.to}
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'Our Services' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'Our Services' ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ background: '#FF7119' }} />
              </Link>
            ) : (
              <a key={item.label} href={item.to}
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'Our Services' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'Our Services' ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ background: '#FF7119' }} />
              </a>
            )
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
      <section ref={heroRef} className="relative w-full flex items-center justify-center" style={{ minHeight: '85vh' }}>
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={NEW_YORK_IMG} alt="IIG Global Services" className="w-full h-full object-cover" style={{ filter: 'brightness(0.2) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(255,113,25,0.05) 100%)' }} />
        </motion.div>
        
        <motion.div className="relative z-10 px-6 max-w-6xl mx-auto w-full text-center" style={{ opacity: heroOpacity as any }}>
          <motion.div custom={0} variants={fadeUp as any} initial="hidden" animate="visible" className="flex items-center justify-center gap-4 mb-8">
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
            <span style={{ fontSize: 10, letterSpacing: 6, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our Services</span>
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontFamily: displayFont, fontSize: 'clamp(44px, 7vw, 90px)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: 24 }}>
            Tailored Real Estate <br />
            <span style={{ color: '#F0E2BC', fontStyle: 'italic' }}>& Financial Solutions</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontSize: 18, color: 'rgba(240,226,188,0.65)', letterSpacing: 0.5, maxWidth: 660, lineHeight: 1.75, fontWeight: 300, margin: '0 auto' }}>
            From inbound investment strategies in Saudi Arabia to full-cycle asset management in the UK and institutional leverage in the US, select a region to explore our expertise.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, rgba(255,113,25,0.8), transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* REGIONAL EXPERTISE - TABBED VIEW */}
      <section className="relative w-full py-32 px-6" style={{ background: '#0B0B0B' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center">
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
              Explore By <span style={{ fontStyle: 'italic', color: '#FF7119' }}>Region</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                style={{ 
                  background: activeRegion === region.id ? '#FF7119' : 'rgba(255,255,255,0.03)', 
                  color: activeRegion === region.id ? '#000' : 'rgba(255,255,255,0.5)',
                  border: `1px solid ${activeRegion === region.id ? '#FF7119' : 'rgba(255,255,255,0.1)'}`
                }}
              >
                {region.name}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden" style={{ borderRadius: 4, border: '1px solid rgba(255,113,25,0.15)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-2 bg-black"
              >
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe size={18} color="#FF7119" />
                    <span style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>{activeRegionData.name} Focus</span>
                  </div>
                  <h3 style={{ fontFamily: displayFont, fontSize: 36, fontWeight: 700, color: '#fff', marginBottom: 20 }}>
                    Strategic Solutions in <br /> <span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>{activeRegionData.name}</span>
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300, marginBottom: 40 }}>
                    {activeRegionData.overview}
                  </p>
                  
                  <div className="flex flex-col gap-6">
                    {activeRegionData.services.map((svc, i) => (
                      <motion.div key={svc.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}>
                        <h4 style={{ fontFamily: displayFont, fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{svc.title}</h4>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{svc.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative hidden lg:block" style={{ minHeight: 400 }}>
                  <img src={activeRegionData.bg} alt={activeRegionData.name} className="w-full h-full object-cover absolute inset-0" style={{ filter: 'brightness(0.4) saturate(0.8)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #000 0%, transparent 100%)' }} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FULL-BLEED DETAILED LIFECYCLE SECTIONS */}

      {/* LIFECYCLE INTRO */}
      <section className="w-full py-24 px-6 text-center bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            Complete Investment <span style={{ fontStyle: 'italic', color: '#FF7119' }}>Lifecycle</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300 }}>
            Every service we provide is underpinned by institutional-grade processes, transparent communication, and an unwavering commitment to maximizing value for our clients. Our integrated approach ensures seamless execution across the entire investment lifecycle.
          </p>
        </div>
      </section>

      {/* PHASE 01: ASSET IDENTIFICATION (DARK MODE) */}
      <section className="relative w-full py-32 px-6" style={{ background: 'linear-gradient(180deg, #050a11 0%, #0a1320 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/20" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Phase 01</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
              Asset Identification
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: 800, fontWeight: 300 }}>
              Leveraging our extensive global network and proprietary market intelligence to uncover exceptional investment opportunities before they reach the open market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Compass size={28} />, title: 'Sourcing On and Off Market Opportunities', desc: 'Access to exclusive deal flow through our established relationships with property owners, developers, and institutional sellers. Our team identifies high-potential assets through both public channels and private networks.', bullet: 'Proprietary deal pipeline' },
              { icon: <PieChart size={28} />, title: 'Assessing and Analyzing Market Opportunities', desc: 'Comprehensive due diligence and market analysis utilizing advanced financial modeling, comparative market studies, and risk assessment frameworks. We evaluate location dynamics and competitive positioning.', bullet: 'Data-driven investment decisions' },
              { icon: <Gavel size={28} />, title: 'Assigning Bids to Acquire Off Market Opportunities', desc: 'Strategic bid structuring and negotiation to secure premium assets at optimal valuations. We craft competitive offers that balance client objectives with market realities, ensuring successful acquisition.', bullet: 'Expert negotiation strategies' }
            ].map((card, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-10 flex flex-col justify-between backdrop-blur-md bg-white/5 border border-white/10 shadow-xl"
                style={{ borderRadius: 12 }}>
                <div>
                  <div style={{ color: '#FF7119', marginBottom: 24 }}>{card.icon}</div>
                  <h3 style={{ fontFamily: displayFont, fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 16 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontWeight: 300, marginBottom: 30 }}>{card.desc}</p>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                  <CheckCircle2 size={16} color="#FF7119" />
                  <span style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{card.bullet}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <ChevronDown size={24} color="#FF7119" className="animate-bounce" />
        </div>
      </section>

      {/* PHASE 02: ASSET ACQUISITION (LIGHT MODE) */}
      <section className="relative w-full py-32 px-6" style={{ background: '#f7f9fb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-block px-4 py-1 mb-6 rounded-full border border-black/10" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Phase 02</span>
              </div>
              <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#0a1320', lineHeight: 1.1, marginBottom: 24 }}>
                Asset Acquisition
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(10,19,32,0.7)', lineHeight: 1.8, fontWeight: 300, marginBottom: 40 }}>
                Orchestrating seamless transactions from initial negotiations through final closing, with meticulous attention to legal, financial, and operational details.
              </p>
              
              <div className="flex flex-col gap-6">
                {[
                  { title: 'Shariah-Compliant Structuring', desc: 'Specialized expertise in Islamic finance frameworks' },
                  { title: 'Comprehensive Coordination', desc: 'Managing all parties throughout the transaction lifecycle' },
                  { title: 'Efficient Completion', desc: 'Streamlined processes ensuring timely closings' },
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1" style={{ color: '#FF7119' }}><CheckCircle2 size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0a1320', marginBottom: 4 }}>{pt.title}</h4>
                      <p style={{ fontSize: 14, color: 'rgba(10,19,32,0.6)', fontWeight: 300 }}>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src={PHASE02_IMG} alt="Asset Acquisition" className="w-full h-full object-cover shadow-2xl" style={{ borderRadius: 12, minHeight: 400 }} />
            </motion.div>
          </div>

          {/* 5-Column Horizontal Process Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <FileText size={20} />, title: 'Sourcing Quotations', desc: 'Obtaining competitive quotes from all stakeholders.' },
              { icon: <Building2 size={20} />, title: 'Ownership Structuring', desc: 'Designing optimal ownership structures for tax efficiency.' },
              { icon: <Landmark size={20} />, title: 'Shariah Finance', desc: 'Facilitating Shariah-compliant financing solutions.' },
              { icon: <Users2 size={20} />, title: 'Stakeholder Liaison', desc: 'Coordinating communication between sellers, buyers, and lenders.' },
              { icon: <Handshake size={20} />, title: 'Transaction Management', desc: 'Overseeing details through successful completion.' },
            ].map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 border border-black/5" style={{ borderRadius: 8 }}>
                <div style={{ color: '#FF7119', marginBottom: 16 }}>{step.icon}</div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0a1320', marginBottom: 8, lineHeight: 1.4 }}>{step.title}</h4>
                <p style={{ fontSize: 12, color: 'rgba(10,19,32,0.6)', fontWeight: 300, lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <ChevronDown size={24} color="#FF7119" className="animate-bounce" />
        </div>
      </section>

      {/* PHASE 03: ASSET MANAGEMENT (DARK MODE - GOLD/CHARCOAL) */}
      <section className="relative w-full py-32 px-6" style={{ background: 'linear-gradient(180deg, #16130e 0%, #0a0a0a 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/20" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Phase 03</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#F0E2BC', lineHeight: 1.1, marginBottom: 24 }}>
              Asset Management
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 800, fontWeight: 300, margin: '0 auto' }}>
              Proactive portfolio stewardship focused on value enhancement, operational excellence, and consistent performance across your real estate holdings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { img: PHASE03_IMG1, icon: <Building size={24} />, title: 'Asset Management Services', desc: 'Comprehensive day-to-day property oversight including tenant relations, lease administration, maintenance coordination, and strategic planning.', bullets: ['Tenant acquisition and retention', 'Lease negotiation and renewal', 'Capital improvement planning'] },
              { img: PHASE03_IMG2, icon: <Users2 size={24} />, title: 'Third Party Service Provider', desc: 'Rigorous vetting, contracting, and oversight of specialized service providers to ensure quality standards, cost efficiency, and seamless operations.', bullets: ['Vendor selection and qualification', 'Contract negotiation', 'Performance monitoring'] },
              { img: PHASE03_IMG3, icon: <PieChart size={24} />, title: 'Quarterly and Yearly Reporting', desc: 'Transparent, detailed performance reporting providing investors with comprehensive insights into asset performance, financial metrics, and market conditions.', bullets: ['Financial statements & variance', 'Market trend analysis', 'Strategic recommendations'] }
            ].map((card, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col bg-black border border-white/10 overflow-hidden shadow-2xl"
                style={{ borderRadius: 12 }}>
                <div className="h-48 w-full overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" style={{ filter: 'brightness(0.7)' }} />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(255,113,25,0.1)', color: '#FF7119' }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', fontWeight: 300, marginBottom: 24, flex: 1 }}>{card.desc}</p>
                  <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                    {card.bullets.map((b, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="mt-1" style={{ color: '#FF7119' }}><CheckCircle2 size={14} /></div>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Performance Block (Teal/Blue) */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            style={{ background: 'linear-gradient(135deg, #0f2b35 0%, #081a20 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="p-12 flex flex-col justify-center">
              <h3 style={{ fontFamily: displayFont, fontSize: 36, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Performance-Driven Management</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
                Our asset management philosophy centers on proactive value creation through strategic planning, operational optimization, and continuous market analysis. We treat every property as a dynamic investment requiring constant attention and refinement.
              </p>
            </div>
            <div className="p-12 grid grid-cols-2 gap-8 bg-black/20">
              {[
                { val: '98.5%', label: 'Average Occupancy Rate' },
                { val: '12%', label: 'Value Increase YoY' },
                { val: '70+', label: 'Properties Managed' },
                { val: '24/7', label: 'Support Available' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: displayFont, fontSize: 48, fontWeight: 700, color: '#FF7119', marginBottom: 4 }}>{stat.val}</div>
                  <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <ChevronDown size={24} color="#FF7119" className="animate-bounce" />
        </div>
      </section>

      {/* PHASE 04: ASSET DISPOSAL (LIGHT MODE) */}
      <section className="relative w-full py-32 px-6" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Photo */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full">
              <img src={PHASE04_IMG} alt="Asset Disposal" className="w-full h-full object-cover shadow-2xl" style={{ borderRadius: 12, minHeight: 600 }} />
            </motion.div>

            {/* Right Content */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col">
              <div className="inline-block px-4 py-1 mb-6 rounded-full border border-black/10 self-start" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <span style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Phase 04</span>
              </div>
              <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#0a1320', lineHeight: 1.1, marginBottom: 24 }}>
                Asset Disposal
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(10,19,32,0.7)', lineHeight: 1.8, fontWeight: 300, marginBottom: 40 }}>
                Strategic exit planning and execution to maximize returns through optimal timing, market positioning, and expert negotiation.
              </p>

              <div className="bg-white p-8 border border-black/10 shadow-lg mb-8" style={{ borderRadius: 12 }}>
                <div className="flex items-center gap-4 mb-4">
                  <CalendarDays size={24} color="#FF7119" />
                  <h3 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#0a1320' }}>Advise and Assist in Asset Timing</h3>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(10,19,32,0.6)', lineHeight: 1.7, fontWeight: 300 }}>
                  Our disposal strategy combines market intelligence, financial analysis, and buyer psychology to identify the optimal exit window. We manage every aspect of the sale process from initial valuation through final closing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <LineChart size={20}/>, title: 'Market Timing Analysis', desc: 'Identifying peak market conditions for maximum value realization' },
                  { icon: <Users2 size={20}/>, title: 'Buyer Identification', desc: 'Targeting qualified buyers through our global network' },
                  { icon: <MessageSquare size={20}/>, title: 'Negotiation Strategy', desc: 'Expert deal structuring to optimize sale terms' },
                  { icon: <FileText size={20}/>, title: 'Transaction Execution', desc: 'Seamless closing with comprehensive legal support' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <div style={{ color: '#FF7119', marginBottom: 12 }}>{item.icon}</div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0a1320', marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: 'rgba(10,19,32,0.5)', fontWeight: 300, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 flex items-center gap-6 border border-yellow-500/30" style={{ borderRadius: 12, background: 'linear-gradient(to right, rgba(255,113,25,0.05), rgba(240,226,188,0.2))' }}>
                <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0" style={{ color: '#FF7119' }}>
                  <Trophy size={24} />
                </div>
                <div>
                  <h4 style={{ fontFamily: displayFont, fontSize: 28, fontWeight: 700, color: '#0a1320' }}>22.5% Average Premium</h4>
                  <p style={{ fontSize: 14, color: 'rgba(10,19,32,0.6)', fontWeight: 500 }}>Above market value on successful disposals</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE ADVANTAGES STRIP */}
      <section className="w-full py-20 px-6 border-y border-white/5" style={{ background: '#000' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { icon: <Globe size={32} />, title: 'Global Expertise, Local Knowledge', desc: 'International reach combined with deep market understanding.' },
            { icon: <Shield size={32} />, title: 'Shariah-Compliant Solutions', desc: 'Specialized expertise in Islamic finance structures.' },
            { icon: <MonitorSmartphone size={32} />, title: 'Technology-Enabled Service', desc: 'Cutting-edge platforms for transparency and efficiency.' }
          ].map((adv, i) => (
            <motion.div key={adv.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center">
              <div style={{ color: '#FF7119', marginBottom: 16 }}>{adv.icon}</div>
              <h3 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{adv.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{adv.desc}</p>
            </motion.div>
          ))}
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
                  { label: 'Home', to: '/' },
                  { label: 'About Us', to: '/IIGAbout' },
                  { label: 'Track Record', to: '#track-record' },
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
