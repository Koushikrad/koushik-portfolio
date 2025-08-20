type Props = {
  role: string
  time: string
  company: string
  desc: string
  tags: string[]
}

export default function TimelineItem({ role, time, company, desc, tags }: Props) {
  return (
    <div className="timeline-item pl-16 pb-12 relative">
      <div className="timeline-dot w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center absolute left-0 top-0">
        <i className="fas fa-briefcase text-white"></i>
      </div>
      <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{role}</h3>
          <span className="text-sky-400 font-medium">{time}</span>
        </div>
        <h4 className="text-lg text-slate-300 mb-4">{company}</h4>
        <p className="text-slate-400">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((t) => (
            <span key={t} className="text-xs bg-sky-400/20 text-sky-400 px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}


