type Props = {
  iconClass: string
  date: string
  read: string
  title: string
  desc: string
  tags: string[]
  href: string
  blobSrc: string
}

export default function BlogCard({ iconClass, date, read, title, desc, tags, href, blobSrc }: Props) {
  return (
    <div className="blog-card rounded-xl overflow-hidden">
      <div className="h-48 bg-slate-800 relative overflow-hidden">
        <img src={blobSrc} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <i className={`${iconClass} text-4xl text-white`}></i>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs text-sky-400">{date}</span>
          <span className="mx-2 text-slate-500">•</span>
          <span className="text-xs text-slate-400">{read}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t) => (
            <span className="blog-tag text-xs px-3 py-1 rounded-full" key={t}>{t}</span>
          ))}
        </div>
        <a href={href} className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center" target="_blank" rel="noreferrer">
          Read More <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  )
}


