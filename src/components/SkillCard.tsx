type Props = { iconClass: string; name: string; pct: number }

export default function SkillCard({ iconClass, name, pct }: Props) {
  return (
    <div className="skill-pill p-6 rounded-xl flex flex-col items-center">
      <div className="w-16 h-16 flex items-center justify-center mb-4 text-sky-400">
        <i className={`${iconClass} text-4xl`}></i>
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
      <div className="w-full bg-slate-700 h-2 rounded-full mt-3">
        <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-2 rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}


