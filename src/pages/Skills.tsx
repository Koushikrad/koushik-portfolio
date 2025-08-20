import { useEffect } from 'react'
import { trackPageEvent } from '../utils/analytics'
import { useSectionReveal } from '../hooks/useSectionReveal'
import SkillCard from '../components/SkillCard'
import { skillsTop, skillsMid, skillPills } from '../data/skills'

export default function Skills() {
  useEffect(() => { trackPageEvent('skills') }, [])
  useSectionReveal('skills', '.skill-pill')
  const skillPillData = skillPills

  return (
    <section className="py-20 bg-slate-800/50 skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto" aria-hidden="true"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">With 10+ years of experience, I've mastered a wide range of technologies and tools that enable me to build modern, responsive, and user-friendly web applications. From React and Flutter to TypeScript and SCSS, I bring expertise in the latest frontend technologies.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" role="list" aria-label="Primary skills">
          {skillsTop.map((s) => (
            <SkillCard key={s.name} iconClass={s.icon} name={s.name} pct={s.pct} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6" role="list" aria-label="Secondary skills">
          {skillsMid.map((s) => (
            <SkillCard key={s.name} iconClass={s.icon} name={s.name} pct={s.pct} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Additional skills">
          {skillPillData.map((p) => (
            <div className="skill-pill py-3 px-6 rounded-full text-center" key={p} role="listitem">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}


