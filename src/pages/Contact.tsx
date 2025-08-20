import { useEffect } from 'react'
import { trackClickEvent, trackPageEvent } from '../utils/analytics'
import { useSectionReveal } from '../hooks/useSectionReveal'

export default function Contact() {
  useEffect(() => { trackPageEvent('contact') }, [])
  useSectionReveal('contact', '.contact-card')
  return (
    <section className="py-20 bg-slate-800/50" id="contact" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto" aria-hidden="true"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of these channels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto" role="list" aria-label="Contact methods">
          <div className="contact-card p-6 rounded-xl flex flex-col items-center text-center" role="listitem">
            <div className="w-16 h-16 rounded-full bg-sky-400/20 flex items-center justify-center mb-4">
              <i className="fas fa-envelope text-2xl text-sky-400" aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-slate-400 mb-4">Drop me an email anytime</p>
            <a href="mailto:rkoushik@outlook.com" onClick={() => trackClickEvent('Email')} className="text-sky-400 hover:text-sky-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded">rkoushik@outlook.com</a>
          </div>

          <div className="contact-card p-6 rounded-xl flex flex-col items-center text-center" role="listitem">
            <div className="w-16 h-16 rounded-full bg-sky-400/20 flex items-center justify-center mb-4">
              <i className="fab fa-linkedin-in text-2xl text-sky-400" aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-slate-400 mb-4">Let's connect professionally</p>
            <a href="https://www.linkedin.com/in/koushikradhakrishnan/" target="_blank" onClick={() => trackClickEvent('Linkedin')} className="text-sky-400 hover:text-sky-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded" rel="noreferrer" aria-label="Visit LinkedIn profile">linkedin.com/in/koushikradhakrishnan</a>
          </div>

          <div className="contact-card p-6 rounded-xl flex flex-col items-center text-center" role="listitem">
            <div className="w-16 h-16 rounded-full bg-sky-400/20 flex items-center justify-center mb-4">
              <i className="fas fa-phone text-2xl text-sky-400" aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-slate-400 mb-4">Call me during business hours</p>
            <a href="tel:+6584294487" onClick={() => trackClickEvent('phone')} className="text-sky-400 hover:text-sky-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded" aria-label="Call +65-84294487">+65-84294487</a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Follow Me On Social Media</h3>
          <div className="flex justify-center space-x-6" role="list" aria-label="Social media links">
            <a href="https://www.linkedin.com/in/koushikradhakrishnan/" onClick={() => trackClickEvent('Linkedin')} className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-sky-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile" role="listitem">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="https://x.com/koushikrad" className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-sky-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800" target="_blank" rel="noreferrer" aria-label="Visit X (Twitter) profile" role="listitem">
              <i className="fab fa-brands fa-x-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://medium.com/@koushikrad" onClick={() => trackClickEvent('medium')} className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-sky-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800" target="_blank" rel="noreferrer" aria-label="Visit Medium profile" role="listitem">
              <i className="fab fa-medium-m" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


