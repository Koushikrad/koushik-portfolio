import { useEffect } from 'react'
import { trackClickEvent, trackPageEvent } from '../utils/analytics'

export default function Experience() {
  useEffect(() => { trackPageEvent('experience') }, [])
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">My professional journey in the world of frontend development over the past 10 years.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="timeline-item pl-16 pb-12 relative">
            <div className="timeline-dot w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center absolute left-0 top-0" style={{ borderRadius: '9999px' }}>
              <i className="fas fa-briefcase text-white"></i>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                <span className="text-sky-400 font-medium">2022 - Present</span>
              </div>
              <h4 className="text-lg text-slate-300 mb-4">Recruit Express (Working for SGX Group)</h4>
              <p className="text-slate-400">Worked on high-impact projects like the SGX Investor Portal and internal tools using HTML, SCSS, JavaScript, and Flutter. Built reusable UI components, contributed to design system development, and optimized performance using techniques like service workers and caching. Played a key role in unifying mobile/web platforms and integrating Flutter in production apps.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Flutter', 'HTML', 'Javascript', 'CSS'].map((t) => (
                  <span key={t} className="text-xs bg-sky-400/20 text-sky-400 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item pl-16 pb-12 relative">
            <div className="timeline-dot w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center absolute left-0 top-0" style={{ borderRadius: '9999px' }}>
              <i className="fas fa-briefcase text-white"></i>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Lead Software Engineer - Front end</h3>
                <span className="text-sky-400 font-medium">2018 - 2022</span>
              </div>
              <h4 className="text-lg text-slate-300 mb-4">Freshworks</h4>
              <p className="text-slate-400">Led frontend efforts for the Freshteam HRMS product using Ember.js, SCSS, and Rails. As a squad lead, managed a team of 8 and owned full lifecycle delivery. Focused on performance improvements, security fixes, and feature innovation like offline smart candidate suggestions. Known for solving 100+ deprecations and enabling lazy-loading to improve FCP.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['EmberJs', 'Scss', 'Ruby on Rails', 'Team Leadership', 'Mentor'].map((t) => (
                  <span key={t} className="text-xs bg-sky-400/20 text-sky-400 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item pl-16 relative">
            <div className="timeline-dot w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center absolute left-0 top-0" style={{ borderRadius: '9999px' }}>
              <i className="fas fa-briefcase text-white"></i>
            </div>
            <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Developer Engineer</h3>
                <span className="text-sky-400 font-medium">2015 - 2018</span>
              </div>
              <h4 className="text-lg text-slate-300 mb-4">IVTL Infoview Technologies</h4>
              <p className="text-slate-400">Started as a fresher and Contributed to building an ERP product (HUE – AI Works) using Java, Spring, Cassandra, and frontend tools like Google Closure. Led a junior team in developing customer support modules. Also worked on converting legacy ERP apps to web-based versions using HTML5, CSS3, and JavaScript.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['HTML/CSS', 'JavaScript', 'Java'].map((t) => (
                  <span key={t} className="text-xs bg-sky-400/20 text-sky-400 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/resume/Koushik_Radhakrishnan_Resume.pdf" onClick={() => trackClickEvent('download resume')} download className="btn-primary px-8 py-3 rounded-full font-medium inline-flex items-center">
            <i className="fas fa-download mr-2"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}


