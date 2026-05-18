'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { 
  Menu, X, MapPin, Mail, Phone, ExternalLink, Building2, Building, 
  Home, Briefcase, ChevronRight, BarChart3, Users, CheckCircle, 
  LineChart, Shield, Search, PieChart, Landmark, ArrowRight
} from 'lucide-react'
import { useGoogleFont } from '../utils/fonts'
import { Link } from '@/lib'

const HERO_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/a5f2cdb1-c225-4722-957e-89551667a452'
const COMM_IMG = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600'
const RES_IMG = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600'
import IIG_LOGO from '../../Images/IIG_logo_v2_gold_rgb-1-scaled-e1769107661106.png'

const TABS = ['Development', 'Commercial', 'Residential', 'Investment Advisory']

const DEV_PROJECTS = [
  { name: 'Grays', loc: 'Swindon (76 High Street)', type: 'Residential', details: '30,594 sq ft, 1 & 2 Bedrooms', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Meadow Mill', loc: 'Stockport', type: 'Residential', details: '157,285 sq ft, 1, 2 & 3 Bedrooms', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { name: 'Brunswick Square', loc: 'Manchester', type: 'Flagship', details: '216,924 sq ft, 1, 2 & 3 Bedrooms', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
  { name: 'The Odeon Arcade', loc: 'Leicester', type: 'Commercial', details: '24,504 sq ft, 13 Units + 2 Kiosks', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800' },
]

const COMM_ASSETS = [
  { name: 'Dearne House', loc: 'Swindon', type: 'Retail', tenant: 'Robert Dyas', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800' },
  { name: 'Etrop Court', loc: 'Glasgow', type: 'Office', tenant: 'Keppie Design Ltd', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { name: '8/10 Cross Street', loc: 'Portsmouth', type: 'Retail', tenant: 'Vodafone & Costa', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { name: '34 Regent Street', loc: 'Swindon', type: 'Retail', tenant: 'Robert Dyas', img: 'https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?auto=format&fit=crop&q=80&w=800' },
  { name: '150 West Regent', loc: 'Glasgow', type: 'Office', tenant: 'Keppie Design Ltd', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' },
  { name: '146 Commercial Rd', loc: 'Portsmouth', type: 'Retail', tenant: 'Vodafone & Costa', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800' },
]

export default function IIGTrackRecord() {
  const displayFont = useGoogleFont('Cormorant Garamond')
  const bodyFont = useGoogleFont('DM Sans')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState(TABS[0])

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
    <div style={{ fontFamily: bodyFont, backgroundColor: '#0B0B0B', color: '#fff', overflowX: 'hidden' }}>

      {/* NAVBAR */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500"
        style={{ background: scrolled ? 'rgba(11,11,11,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(18px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,113,25,0.12)' : 'none' }}
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
              style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'Track Record' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
              className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'Track Record' ? 'w-full' : 'w-0 group-hover:w-full'}`}
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
      <section ref={heroRef} className="relative w-full flex items-center justify-center pt-32 pb-16" style={{ minHeight: '65vh' }}>
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={HERO_IMG} alt="Track Record" className="w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,11,11,0.8) 0%, rgba(11,11,11,1) 100%)' }} />
        </motion.div>
        
        <motion.div className="relative z-10 px-6 max-w-5xl mx-auto w-full text-center" style={{ opacity: heroOpacity as any }}>
          <motion.div custom={0} variants={fadeUp as any} initial="hidden" animate="visible" className="flex items-center justify-center gap-4 mb-8">
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
            <span style={{ fontSize: 10, letterSpacing: 6, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Portfolio</span>
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontFamily: displayFont, fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: 40 }}>
            Your Gateway to <br />
            <span style={{ color: '#F0E2BC', fontStyle: 'italic' }}>Global Prosperity</span>
          </motion.h1>

          {/* TABS */}
          <motion.div custom={2} variants={fadeUp as any} initial="hidden" animate="visible" 
            className="flex flex-wrap justify-center gap-3 p-2 rounded-full border border-white/10 backdrop-blur-md"
            style={{ background: 'rgba(255,255,255,0.03)', maxWidth: 'fit-content', margin: '0 auto' }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full"
                style={{ color: activeTab === tab ? '#0B0B0B' : 'rgba(255,255,255,0.6)' }}
              >
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-full" style={{ zIndex: -1 }} />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* DYNAMIC TAB CONTENT */}
      <div className="w-full relative bg-[#0B0B0B] min-h-[800px] pb-32">
        <AnimatePresence mode="wait">
          
          {/* ============================================================== */}
          {/* TAB 1: DEVELOPMENT                                             */}
          {/* ============================================================== */}
          {activeTab === 'Development' && (
            <motion.div key="Development" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full">
              <div className="max-w-7xl mx-auto px-6 pt-16">
                <div className="flex flex-col md:flex-row gap-16 mb-24 items-end">
                  <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#F0E2BC', lineHeight: 1.1, flex: 1 }}>
                    Visionary <br />Real Estate <br /><span className="italic">Development</span>
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300, flex: 1, paddingBottom: 10 }}>
                    Our track record encompasses landmark residential and commercial projects across key strategic locations. We transform ambitious blueprints into tangible, high-yielding realities, prioritizing sustainable design and community impact.
                  </p>
                </div>

                {/* Projects Alternating Rows */}
                <div className="flex flex-col gap-10 mb-32">
                  {DEV_PROJECTS.map((proj, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                      className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 overflow-hidden rounded-2xl bg-black border border-white/10`}>
                      <div className="flex-1 min-h-[400px] relative">
                        <img src={proj.img} alt={proj.name} className="w-full h-full object-cover absolute inset-0" style={{ filter: 'brightness(0.8)' }} />
                      </div>
                      <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center relative">
                        <div className="absolute top-0 left-0 w-1 h-full" style={{ background: i % 2 === 0 ? 'linear-gradient(to bottom, #FF7119, transparent)' : 'linear-gradient(to bottom, #F0E2BC, transparent)' }} />
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-yellow-500/30 w-fit" style={{ background: 'rgba(240,226,188,0.1)' }}>
                          <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#F0E2BC', fontWeight: 700 }}>{proj.type}</span>
                        </div>
                        <h3 style={{ fontFamily: displayFont, fontSize: 40, fontWeight: 700, color: '#fff', mb: 4 }}>{proj.name}</h3>
                        <p className="flex items-center gap-2 mb-8" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
                          <MapPin size={16} color="#FF7119" /> {proj.loc}
                        </p>
                        <div className="pt-8 border-t border-white/10">
                          <p style={{ fontSize: 16, color: '#fff', fontWeight: 500, letterSpacing: 1 }}>{proj.details}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Block */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="rounded-3xl p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
                  style={{ background: 'linear-gradient(135deg, #0f2b35 0%, #081a20 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <h3 style={{ fontFamily: displayFont, fontSize: 40, fontWeight: 700, color: '#fff', mb: 4 }}>Development Excellence <br /><span className="italic text-[#FF7119]">by the Numbers</span></h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                      { val: '42,930', label: 'Total sq ft Developed' },
                      { val: '4', label: 'Major Projects' },
                      { val: '15', label: 'Commercial Spaces' },
                    ].map((s, i) => (
                      <div key={i}>
                        <div style={{ fontFamily: displayFont, fontSize: 48, fontWeight: 700, color: '#F0E2BC', mb: 2 }}>{s.val}</div>
                        <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Approach Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[
                    { icon: <Search size={28}/>, title: 'Strategic Vision', desc: 'Identifying off-market land and underutilized assets with immense potential for value creation.' },
                    { icon: <Building2 size={28}/>, title: 'Design Excellence', desc: 'Partnering with world-class architects to construct iconic, sustainable, and high-demand structures.' },
                    { icon: <Users size={28}/>, title: 'Community Focus', desc: 'Developing properties that integrate seamlessly into local environments, fostering thriving communities.' },
                  ].map((p, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                      className="p-8 border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors">
                      <div style={{ color: '#F0E2BC', marginBottom: 20 }}>{p.icon}</div>
                      <h4 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', mb: 10 }}>{p.title}</h4>
                      <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: COMMERCIAL                                              */}
          {/* ============================================================== */}
          {activeTab === 'Commercial' && (
            <motion.div key="Commercial" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full">
              <div className="max-w-7xl mx-auto px-6 pt-16">
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                    Commercial <span className="italic text-[#FF7119]">Portfolio</span>
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
                    Explore our curated selection of lucrative, sharia-compliant commercial properties tailored for success. Featuring premium retail and office spaces with blue-chip tenants.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {COMM_ASSETS.map((asset, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="group flex flex-col bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                      <div className="h-64 relative overflow-hidden">
                        <img src={asset.img} alt={asset.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.7)' }} />
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                          <span style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', fontWeight: 700 }}>{asset.type}</span>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <h3 style={{ fontFamily: displayFont, fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 12 }} className="group-hover:text-[#FF7119] transition-colors">{asset.name}</h3>
                        <p className="flex items-center gap-2 mb-6" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                          <MapPin size={14} /> {asset.loc}
                        </p>
                        <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-3">
                          <Briefcase size={16} color="#F0E2BC" />
                          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Tenant: <span className="text-white">{asset.tenant}</span></span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: RESIDENTIAL                                             */}
          {/* ============================================================== */}
          {activeTab === 'Residential' && (
            <motion.div key="Residential" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full">
              <div className="max-w-7xl mx-auto px-6 pt-16">
                <div className="text-center max-w-3xl mx-auto mb-24">
                  <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                    Premier <span className="italic text-[#F0E2BC]">Residential</span>
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
                    We provide exceptional residential asset management and lifestyle support solutions, ensuring maximum yield for investors and an unparalleled living experience for residents.
                  </p>
                </div>

                <div className="flex flex-col gap-32 mb-32">
                  {[
                    { title: 'Portfolio Management', stat: '400+', statLabel: 'Units Managed', lists: ['Strategic Asset Oversight', 'Risk Mitigation', 'Tenant Relations'], img: RES_IMG },
                    { title: 'Concierge Services', stat: '24/7', statLabel: 'Concierge Support', lists: ['Premium Lifestyle Management', 'Property Maintenance', 'Always Available'], img: HERO_IMG, reverse: true },
                    { title: 'Sales Services', stat: '98%', statLabel: 'Satisfaction Rate', lists: ['Strategic Marketing', 'Comprehensive Reporting', 'Exit Strategy Planning'], img: COMM_IMG },
                  ].map((row, i) => (
                    <div key={i} className={`flex flex-col ${row.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                      <div className="flex-1 relative flex justify-center">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                          className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/5 relative">
                          <img src={row.img} alt={row.title} className="w-full h-full object-cover" />
                        </motion.div>
                        {/* Floating Stat Card */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                          className={`absolute ${row.reverse ? 'left-0' : 'right-0'} bottom-10 bg-white p-6 rounded-2xl shadow-2xl z-10 border border-black/10`}>
                          <div style={{ fontFamily: displayFont, fontSize: 36, fontWeight: 700, color: '#FF7119' }}>{row.stat}</div>
                          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: '#000', fontWeight: 700 }}>{row.statLabel}</div>
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h3 style={{ fontFamily: displayFont, fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 24 }}>{row.title}</h3>
                        <div className="flex flex-col gap-4">
                          {row.lists.map((l, j) => (
                            <div key={j} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                              <CheckCircle size={18} color="#F0E2BC" />
                              <span style={{ fontSize: 15, color: '#fff' }}>{l}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { stat: '400+', label: 'Units Managed' },
                    { stat: '15+', label: 'Years Experience' },
                    { stat: '98%', label: 'Satisfaction' },
                    { stat: '24/7', label: 'Relationship Management' },
                  ].map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                      className="p-8 text-center bg-white/5 border border-white/10 rounded-2xl">
                      <div style={{ fontFamily: displayFont, fontSize: 48, fontWeight: 700, color: '#FF7119', mb: 8 }}>{s.stat}</div>
                      <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* TAB 4: INVESTMENT ADVISORY                                     */}
          {/* ============================================================== */}
          {activeTab === 'Investment Advisory' && (
            <motion.div key="Advisory" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full">
              <div className="max-w-7xl mx-auto px-6 pt-16">
                <div className="text-center max-w-4xl mx-auto mb-20">
                  <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
                    Strategic <span className="italic text-[#FF7119]">Investment Advisory</span>
                  </h2>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
                    Within our realm of services, we offer a full transaction cycle service, advising on Acquisition, Structuring, Debt Facilitation, Asset Management and Investment Disposals.
                  </p>
                </div>

                {/* Grid 1: Strategic Investment Funds */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                  {[
                    { icon: <PieChart size={32}/>, title: 'Strategic Structuring', desc: 'Crafting robust Shariah-compliant frameworks that protect capital and optimize tax efficiency.' },
                    { icon: <Globe size={32}/>, title: 'Market Focus', desc: 'Identifying macro-economic trends across UK, US, and Saudi markets to target resilient sectors.' },
                    { icon: <LineChart size={32}/>, title: 'Consistent Returns', desc: 'Disciplined underwriting and rigorous asset selection targeting double-digit IRRs.' },
                  ].map((b, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                      className="p-10 border border-[#F0E2BC]/30 rounded-2xl bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full border border-[#F0E2BC] flex items-center justify-center mb-6" style={{ color: '#F0E2BC' }}>{b.icon}</div>
                      <h4 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', mb: 12 }}>{b.title}</h4>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>{b.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* 5-Step Transaction Cycle */}
                <div className="mb-24">
                  <h3 style={{ fontFamily: displayFont, fontSize: 32, fontWeight: 700, color: '#fff', mb: 12, textAlign: 'center' }}>Full Transaction Cycle</h3>
                  <div className="flex flex-col lg:flex-row gap-4 mt-12">
                    {['Acquisition', 'Structuring', 'Debt Facilitation', 'Asset Management', 'Disposals'].map((step, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                        className="flex-1 bg-[#111] border border-white/5 rounded-xl p-6 relative group hover:border-[#FF7119]/50 transition-colors">
                        <div style={{ fontFamily: displayFont, fontSize: 40, fontWeight: 700, color: 'rgba(255,113,25,0.1)', position: 'absolute', top: 10, right: 16 }}>0{i+1}</div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff', mt: 4, position: 'relative', zIndex: 10 }}>{step}</h4>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Comprehensive Guidance Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden mb-24">
                  {[
                    { icon: <Briefcase size={24}/>, title: 'Portfolio Management', desc: 'Holistic oversight of diversified asset classes to balance risk and reward.' },
                    { icon: <BarChart3 size={24}/>, title: 'Market Analysis', desc: 'Proprietary research utilizing institutional data to forecast market movements.' },
                    { icon: <Shield size={24}/>, title: 'Risk Assessment', desc: 'Stringent stress-testing models to ensure capital preservation in all climates.' },
                    { icon: <Users size={24}/>, title: 'Personalized Guidance', desc: 'Dedicated advisory tailored to your unique wealth generation objectives.' },
                  ].map((g, i) => (
                    <div key={i} className="p-12 bg-[#0B0B0B] hover:bg-[#111] transition-colors flex items-start gap-6">
                      <div style={{ color: '#F0E2BC' }}>{g.icon}</div>
                      <div>
                        <h4 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', mb: 8 }}>{g.title}</h4>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{g.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Quote Block */}
                <div className="p-12 md:p-20 text-center rounded-3xl" style={{ background: '#F0E2BC', color: '#0B0B0B' }}>
                  <p style={{ fontFamily: displayFont, fontSize: 'clamp(24px, 4vw, 36px)', fontStyle: 'italic', lineHeight: 1.4, mb: 20 }}>
                    "Our objective is not merely to execute transactions, but to act as your strategic partner in building generational wealth through institutional-grade real estate."
                  </p>
                  <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700, opacity: 0.7, mb: 10 }}>
                    — International Investment Gate Advisory Team
                  </p>
                  <button className="mt-8 px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#FF7119] transition-colors">
                    Get in Touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* FOOTER */}
      <footer className="w-full px-6 py-20" style={{ background: '#000', borderTop: '1px solid rgba(255,113,25,0.15)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-3">
              <img src={IIG_LOGO} alt="IIG" className="h-10 object-contain" />
              <span style={{ width: 1, height: 24, background: '#FF7119', display: 'inline-block' }} />
              <span style={{ fontSize: 10, letterSpacing: 4, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>Investments</span>
            </div>
            <div className="flex gap-8">
              <a href="mailto:investments@iig.sa" className="text-sm text-white/50 hover:text-white transition-colors">investments@iig.sa</a>
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
