import { Link } from 'react-router-dom'

type Props = {
  id: string
  iconClass: string
  date: string
  read: string
  title: string
  desc: string
  tags: string[]
  href: string
  blobSrc: string
}

export default function BlogCard({ id, iconClass, date, read, title, desc, tags, href, blobSrc }: Props) {
  const isExternal = href && href.startsWith('http');

  return (
    <article className="blog-card rounded-xl overflow-hidden" role="listitem">
      <div className="h-48 bg-slate-800 relative overflow-hidden">
        <img src={blobSrc} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full opacity-20" />
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
            <span className="bg-sky-400/10 text-sky-400 px-3 py-1 rounded-full text-sm border border-sky-400/20 hover:bg-sky-400/20 transition-colors cursor-default" key={t} role="listitem">{t}</span>
          ))}
        </div>

        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded"
            aria-label={`Read more about ${title} on external site`}
          >
            Read Article <i className="fas fa-external-link-alt ml-2" aria-hidden="true"></i>
          </a>
        ) : (
          <Link
            to={`/blog/${id}`}
            className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded"
            aria-label={`Read more about ${title}`}
          >
            Read More <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </Link>
        )}
      </div>
    </article>
  )
}


