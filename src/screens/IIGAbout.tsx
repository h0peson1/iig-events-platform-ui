'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { Menu, X, ArrowRight, MapPin, Mail, Phone, ExternalLink, Globe, Shield, Users, Star, CheckCircle, TrendingUp, BarChart } from 'lucide-react'
import { useGoogleFont } from '../utils/fonts'
import { Link } from '@/lib'

const BOARDROOM_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/2660da6e-f252-4893-bd3d-27559e162319'
const RIYADH_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/a5f2cdb1-c225-4722-957e-89551667a452'
import IIG_LOGO from '../../Images/IIG_logo_v2_gold_rgb-1-scaled-e1769107661106.png'
const HANDSHAKE_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/1e8d9188-fa43-4c75-bb29-da86457ad2c6'
const NETWORKING_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/3b0d0976-70dd-44c8-ba3c-47a0b89b5b92'
const NEW_YORK_IMG = 'https://uxcanvas.ai/api/generated-images/517030df-44f4-4ce0-922f-6c66f5c4b9f7/c5e28f09-39fb-4054-9c2b-4d9748d0d1f7'

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

export default function IIGAbout() {
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

  const VALUES = [
    { icon: <Shield size={22} />, title: 'Shariah Compliance', desc: 'The foundation of our integrity; we never compromise on ethical standards and ensure your wealth grows with complete transparency.' },
    { icon: <Globe size={22} />, title: 'Transparency', desc: 'We build trust through honesty, clarity, and accountability in every transaction, offering full visibility into our processes.' },
    { icon: <TrendingUp size={22} />, title: 'Efficiency', desc: 'We deliver results with speed and precision, respecting the immense value of your time and your capital.' },
    { icon: <Users size={22} />, title: 'Trust', desc: 'We foster long-term partnerships based on mutual success, reliability, and an unwavering commitment to your financial ambitions.' },
  ]

  const APPROACH = [
    { step: '01', title: 'Sourcing & Structuring', desc: 'In the acquisition phase, we identify high-potential, off-market opportunities and handle all legal and tax structuring to ensure instant equity and strict compliance.' },
    { step: '02', title: 'Financial Advisory', desc: 'We unlock liquidity by arranging bespoke Shariah-compliant debt solutions, having successfully secured over £200M in financing for our clients.' },
    { step: '03', title: 'Active Management', desc: 'Our operational experts take over to optimize tenant relations, significantly reduce costs, and enhance asset quality to drive consistent income growth.' },
    { step: '04', title: 'Strategic Exit', desc: 'We don’t just hold; we monetize. We carefully plan and execute the sale of assets at the optimal time to maximize your total return on investment.' },
  ]

  const ADVANTAGES = [
    { title: 'Secure Investments', desc: 'Bank-grade security protocols and comprehensive insurance coverage protecting your investments at every stage.' },
    { title: 'High Returns', desc: 'Consistently outperforming market benchmarks with average annual returns exceeding 18% across our portfolio.' },
    { title: 'Expert Team', desc: 'Access to a global network of seasoned professionals with decades of combined real estate expertise.' },
    { title: '24/7 Support', desc: 'Round-the-clock dedicated support from our client success team across all time zones worldwide.' },
    { title: 'Diversified Portfolio', desc: 'Spread risk across multiple asset classes, geographic regions, and market sectors for optimal stability.' },
    { title: 'Transparent Reporting', desc: 'Detailed, accessible, and regular reporting keeping you informed of your portfolio’s performance.' },
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
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'About Us' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'About Us' ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ background: '#FF7119' }} />
              </Link>
            ) : (
              <a key={item.label} href={item.to}
                style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: item.label === 'About Us' ? '#FF7119' : 'rgba(255,255,255,0.65)', fontWeight: 500 }}
                className="hover:text-white transition-colors duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${item.label === 'About Us' ? 'w-full' : 'w-0 group-hover:w-full'}`}
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
          <img src={BOARDROOM_IMG} alt="IIG corporate boardroom London" className="w-full h-full object-cover" style={{ filter: 'brightness(0.28) saturate(0.75)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(255,113,25,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 80%, rgba(255,113,25,0.08) 0%, transparent 70%)' }} />
        </motion.div>
        {[...Array(14)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2, background: i % 4 === 0 ? '#FF7119' : 'rgba(255,255,255,0.35)', left: `${(i * 6.7 + 5) % 95}%`, top: `${(i * 8.1 + 8) % 85}%` }}
            animate={{ y: [-8, 8, -8], opacity: [0.3, 0.75, 0.3] }}
            transition={{ duration: 3.5 + i * 0.35, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
          />
        ))}
        <motion.div className="relative z-10 px-6 max-w-6xl mx-auto w-full text-center" style={{ opacity: heroOpacity as any }}>
          <motion.div custom={0} variants={fadeUp as any} initial="hidden" animate="visible" className="flex items-center justify-center gap-4 mb-8">
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
            <span style={{ fontSize: 10, letterSpacing: 6, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>About Us</span>
            <div style={{ width: 32, height: 1, background: '#FF7119' }} />
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontFamily: displayFont, fontSize: 'clamp(44px, 7vw, 90px)', fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: 24 }}>
            Bridging Ethical Principles <br />
            <span style={{ color: '#F0E2BC', fontStyle: 'italic' }}>& Global Growth</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp as any} initial="hidden" animate="visible"
            style={{ fontSize: 18, color: 'rgba(240,226,188,0.65)', letterSpacing: 0.5, maxWidth: 660, lineHeight: 1.75, fontWeight: 300, margin: '0 auto' }}>
            We are a team focused on quality, trust, and customer satisfaction, working tirelessly to deliver the best investment solutions for your wealth ambitions.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, rgba(255,113,25,0.8), transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative w-full py-32 px-6" style={{ background: '#F0E2BC' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.1, color: '#0B0B0B', marginBottom: 32 }}>
              Your Strategic Partners in <br />
              <span style={{ fontStyle: 'italic', color: '#FF7119' }}>Wealth Creation</span>
            </h2>
            <div className="flex flex-col gap-6">
              <p style={{ fontSize: 17, lineHeight: 1.9, color: 'rgba(11,11,11,0.65)', fontWeight: 300 }}>
                International Investment Gate (IIG) was founded to redefine the landscape of global real estate investment. We are not just advisors; we are your strategic partners in wealth creation.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.9, color: 'rgba(11,11,11,0.65)', fontWeight: 300 }}>
                Managing over £500 million in assets, we leverage deep local insights from Riyadh and combine them with the financial dynamism of London. Our story is one of commitment—commitment to Shariah-compliant excellence, transparency, and the relentless pursuit of value for our partners. 
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.9, color: 'rgba(11,11,11,0.65)', fontWeight: 300 }}>
                We design investment journeys that resonate with your values and achieve your financial ambitions.
              </p>
            </div>
          </motion.div>
          <div className="flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <img src={HANDSHAKE_IMG} alt="Strategic Partners" className="w-full h-full object-cover" style={{ filter: 'saturate(0.9) brightness(0.95)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,113,25,0.06) 0%, transparent 50%)' }} />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '£500M+', label: 'Assets Managed' },
                { num: '100%', label: 'Shariah Compliant' },
              ].map((stat, i) => (
                <motion.div key={stat.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 text-center"
                  style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,113,25,0.15)', borderBottom: '2px solid #FF7119' }}>
                  <div style={{ fontFamily: displayFont, fontSize: 42, fontWeight: 700, color: '#FF7119', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: 11, color: 'rgba(11,11,11,0.5)', letterSpacing: 1, marginTop: 6, textTransform: 'uppercase', fontWeight: 600 }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative w-full py-32 px-6 overflow-hidden" style={{ background: '#0B0B0B' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,113,25,0.04) 0%, transparent 70%)', borderRadius: '50%' }} />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-8">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our Vision</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 24 }}>
              To be the world’s most trusted gateway for <span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>Shariah-compliant real estate wealth.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
              Pioneering a strategic bridge that connects local investors to global markets, and international investors to prime opportunities within Saudi Arabia.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="flex items-center gap-4 mb-8">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our Mission</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 24 }}>
              To deliver superior, <span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>risk-adjusted returns.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
              By providing a comprehensive “One-Stop Shop” experience—from acquisition to exit—grounded in ethical integrity and expert execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="w-full py-32 px-6" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our Values</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#0B0B0B', lineHeight: 1.1 }}>
              The Four Pillars That<br /><span style={{ fontStyle: 'italic' }}>Guide Every Decision</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(255,113,25,0.1)' }}
                className="p-8 cursor-pointer group"
                style={{ background: 'rgba(240,226,188,0.25)', border: '1px solid rgba(11,11,11,0.07)', borderTop: '2px solid #FF7119', transition: 'all 0.35s ease' }}>
                <div style={{ color: '#FF7119', marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#0B0B0B', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(11,11,11,0.55)', fontWeight: 300 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="w-full py-32 px-6" style={{ background: '#0B0B0B' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our Approach</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
              Designed for Clarity <br /><span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>and Maximum Impact</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', marginTop: 16, maxWidth: 600 }}>
              Just as we meticulously structure our investments, our process is designed for clarity. We handle the complexities so you can focus on the rewards.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-20 top-0 bottom-0 w-px" style={{ background: 'rgba(255,113,25,0.2)' }} />
            <div className="flex flex-col gap-0">
              {APPROACH.map((m, i) => (
                <motion.div key={m.step}
                  initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative flex items-start gap-10 py-10 group cursor-pointer"
                  style={{ borderBottom: i < APPROACH.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div className="relative flex-shrink-0" style={{ width: 80, textAlign: 'right' }}>
                    <span style={{ fontFamily: displayFont, fontSize: 18, fontWeight: 700, color: '#FF7119', letterSpacing: 1 }}>{m.step}</span>
                  </div>
                  <div className="absolute left-20 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <motion.div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF7119', border: '2px solid #0B0B0B', boxShadow: '0 0 0 3px rgba(255,113,25,0.2)' }}
                      whileInView={{ boxShadow: '0 0 0 6px rgba(255,113,25,0.15)' }} viewport={{ once: true }} />
                  </div>
                  <div className="flex-1">
                    <h3 style={{ fontFamily: displayFont, fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.2 }}
                      className="group-hover:text-orange-300 transition-colors duration-300">{m.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="relative w-full py-32 px-6 overflow-hidden" style={{ background: '#000' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Unparalleled Advantages</span>
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
              Why Choose IIG
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, i) => (
              <motion.div key={adv.title}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-8"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <CheckCircle size={20} color="#FF7119" style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{adv.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL LEADERSHIP TEAM */}
      <section className="w-full py-32 px-6" style={{ background: '#0B0B0B' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Our People</span>
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
              Global Leadership <span style={{ fontStyle: 'italic', color: '#F0E2BC' }}>Team</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: 'Chief Investment Officer', desc: 'Previously led REIT portfolios at BlackRock, Harvard MBA' },
              { role: 'Managing Director, EMEA', desc: '15 years at JP Morgan, specialized in European markets' },
              { role: 'Managing Director, APAC', desc: 'Former Cushman & Wakefield executive, 18 years in Asia-Pacific' },
              { role: 'Head of Asset Management', desc: 'CBRE veteran with expertise in portfolio optimization' },
              { role: 'General Counsel', desc: 'International law specialist, Stanford Law graduate' },
              { role: 'Head of Research', desc: 'PhD Economics, former World Bank senior analyst' },
            ].map((member, i) => (
              <motion.div key={member.role}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 border border-white/10"
                style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ width: 40, height: 40, background: 'rgba(255,113,25,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Users size={20} color="#FF7119" />
                </div>
                <h3 style={{ fontFamily: displayFont, fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{member.role}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontWeight: 300 }}>{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="w-full py-32 px-6" style={{ background: '#F0E2BC' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: 24, height: 1, background: '#FF7119' }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: '#FF7119', fontWeight: 700 }}>Global Presence</span>
            </div>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: '#0B0B0B', lineHeight: 1.1 }}>
              Expertise Without Borders.<br /><span style={{ fontStyle: 'italic' }}>Global Real Estate Insight.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                region: 'Saudi Arabia', cities: 'Riyadh, Makkah & Madinah',
                desc: 'Our Saudi presence positions IIG at the heart of Gulf capital formation, aligned with Saudi Vision 2030 and the extraordinary outbound investment appetite emerging from the Kingdom.',
                img: RIYADH_IMG
              },
              {
                region: 'United Kingdom', cities: 'London & Manchester',
                desc: 'Our UK operations serve as the gateway for Gulf capital. Operating from London and Manchester, we source premium real estate and infrastructure opportunities across the nation.',
                img: BOARDROOM_IMG
              },
              {
                region: 'United States', cities: 'New York',
                desc: 'Our presence in New York expands our global footprint, giving clients direct access to prime US commercial and residential assets through our Shariah-compliant frameworks.',
                img: NEW_YORK_IMG
              }
            ].map((office, i) => (
              <motion.div key={office.region}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,113,25,0.15)' }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img src={office.img} alt={`IIG ${office.region} office`} className="w-full h-full object-cover" style={{ filter: 'brightness(0.65) saturate(0.8)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-6 left-6">
                    <div style={{ fontFamily: displayFont, fontSize: 30, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{office.region}</div>
                    <div style={{ fontSize: 11, color: '#FF7119', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>{office.cities}</div>
                  </div>
                </div>
                <div className="p-8">
                  <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(11,11,11,0.6)', fontWeight: 300 }}>{office.desc}</p>
                </div>
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
                  { label: 'Home', to: '/' },
                  { label: 'Services', to: '/IIGServices' },
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
