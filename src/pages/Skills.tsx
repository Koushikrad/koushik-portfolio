import { useEffect } from 'react'
import { trackPageEvent } from '../utils/analytics'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Skills() {
  useEffect(() => { trackPageEvent('skills') }, [])
  useRevealOnScroll()
  const skillsTop = [
    { icon: 'fab fa-html5', name: 'HTML5', pct: 95 },
    { icon: 'fab fa-css3-alt', name: 'CSS3', pct: 90 },
    { icon: 'fab fa-js', name: 'JavaScript', pct: 92 },
    { icon: 'fab fa-sass', name: 'Sass/SCSS', pct: 90 },
  ]
  const skillsMid = [
    { icon: 'fab fa-flutter fa-brands', name: 'Flutter', pct: 90 },
    { icon: 'fab fa-react', name: 'React', pct: 70 },
  ]
  const pills = ['TypeScript', 'Tailwind CSS', 'Ember JS', 'Webpack', 'Jest', 'Git', 'Figma']

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">With 10 years of experience, I've mastered a wide range of technologies and tools that enable me to build modern, responsive, and user-friendly web applications.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsTop.map((s) => (
            <div className="skill-pill p-6 rounded-xl flex flex-col items-center" key={s.name}>
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-sky-400">
                <i className={`${s.icon} text-4xl`}></i>
              </div>
              <h3 className="text-lg font-medium">{s.name}</h3>
              <div className="w-full bg-slate-700 h-2 rounded-full mt-3">
                <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-2 rounded-full" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {skillsMid.map((s) => (
            <div className="skill-pill p-6 rounded-xl flex flex-col items-center" key={s.name}>
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-sky-400">
                <i className={`${s.icon} text-4xl`}></i>
              </div>
              <h3 className="text-lg font-medium">{s.name}</h3>
              <div className="w-full bg-slate-700 h-2 rounded-full mt-3">
                <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-2 rounded-full" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {pills.map((p) => (
            <div className="skill-pill py-3 px-6 rounded-full text-center" key={p}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}


