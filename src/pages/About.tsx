import { useEffect } from 'react'
import { trackPageEvent } from '../utils/analytics'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function About() {
  useEffect(() => { trackPageEvent('about') }, [])
  useRevealOnScroll()
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="photo-container relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full opacity-20 blur-3xl absolute"></div>
              <div className="photo-border"></div>
              <img id="profile-photo" src="/images/koushik.jpg" alt="Koushik Radhakrishnan — Senior Frontend Developer" width={280} height={280} loading="lazy" decoding="async" className="profile-photo" />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-1">
            <h3 className="text-2xl font-bold mb-4 mt-12">Senior Developer &amp; UI/UX Enthusiast</h3>
            <p className="text-slate-400 mb-6">I’m a passionate frontend developer with 10 years of experience creating exceptional digital experiences. My journey in web development began in 2015, and ever since, I’ve been crafting clean, efficient, and user-friendly interfaces with love (and just a bit of caffeine).</p>
            <p className="text-slate-400 mb-6">I specialize in building responsive web applications using modern JavaScript frameworks and libraries. With a mix of technical know-how and creative problem-solving, I aim to deliver solutions that don’t just meet expectations—they outshine them.</p>
            <p className="text-slate-400 mb-6">When I’m not wrangling pixels and components, I’m busy being a full-time dad to twin boys—a role that’s taught me more about multitasking and debugging (life) than any job ever could. I also unwind with a good game of football, cricket, or chess—though my twins usually win at hide-and-seek.</p>
            <a href="/#contact" className="btn-primary px-8 py-3 rounded-full font-medium inline-block">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}


