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
    <article className="blog-card rounded-xl overflow-hidden" role="listitem">
      <div className="h-48 bg-slate-800 relative overflow-hidden">
        <img src={blobSrc} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <i className={`${iconClass} text-4xl text-white`} aria-hidden="true"></i>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <time className="text-xs text-sky-400" dateTime={date}>{date}</time>
          <span className="mx-2 text-slate-500" aria-hidden="true">•</span>
          <span className="text-xs text-slate-400">{read}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Article tags">
          {tags.map((t) => (
            <span className="blog-tag text-xs px-3 py-1 rounded-full" key={t} role="listitem">{t}</span>
          ))}
        </div>
        <a href={href} className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded" target="_blank" rel="noreferrer" aria-label={`Read more about ${title}`}>
          Read More <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  )
}


