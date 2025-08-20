import { useEffect } from 'react'
import { trackClickEvent, trackPageEvent } from '../utils/analytics'
import TimelineItem from '../components/TimelineItem'
import { experience } from '../data/experience'
import { useSectionReveal } from '../hooks/useSectionReveal'

export default function Experience() {
  useEffect(() => { trackPageEvent('experience') }, [])
  useSectionReveal('experience', '.timeline-item')
  return (
    <section className="py-20 bg-slate-900 experience-section" id="experience" aria-labelledby="experience-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">My professional journey in the world of frontend development over the past 10 years.</p>
        </div>

        <div className="max-w-3xl mx-auto" role="list" aria-label="Work experience timeline">
          {experience.map((e) => (
            <TimelineItem key={e.role} role={e.role} time={e.time} company={e.company} desc={e.desc} tags={e.tags} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/resume/Koushik_Radhakrishnan_Resume.pdf" onClick={() => trackClickEvent('download resume')} download className="btn-primary px-8 py-3 rounded-full font-medium inline-flex items-center focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Download resume as PDF">
            <i className="fas fa-download mr-2" aria-hidden="true"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}


