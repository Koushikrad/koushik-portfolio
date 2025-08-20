import { useEffect } from 'react'
import { trackPageEvent } from '../utils/analytics'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Blogs() {
  useEffect(() => { trackPageEvent('blogs') }, [])
  useRevealOnScroll()
  const posts = [
    {
      icon: 'fas fa-code',
      date: 'Jul 18, 2020',
      read: '7 min read',
      title: 'Code Reviews — Best Practices',
      desc: 'A practical guide to making code reviews more effective, respectful, and valuable for both the reviewer and the author. I share lessons learned from real-world team collaboration and how to turn code reviews into a tool for growth.',
      tags: ['Coding', 'Code Review', 'Best practices'],
      href: 'https://medium.com/@koushikrad/code-reviews-best-practices-686a365b79a8',
      blobPath: "M47.7,-57.2C59,-47.3,63.6,-29.7,65.3,-12.2C67,5.3,65.8,22.7,57.6,35.8C49.3,48.9,34.1,57.6,17.4,63.5C0.7,69.3,-17.5,72.3,-32.4,66.3C-47.3,60.3,-58.9,45.4,-65.5,28.7C-72.1,11.9,-73.7,-6.6,-67.7,-21.9C-61.8,-37.2,-48.3,-49.3,-34.2,-58.1C-20.1,-66.9,-5.3,-72.4,8.2,-81.1C21.7,-89.8,36.3,-67.1,47.7,-57.2Z",
    },
    {
      icon: 'fa-brands fa-flutter',
      date: 'Aug 20, 2023',
      read: '6 min read',
      title: 'Exploring Flutter for Business Apps: Weighing Advantages and Drawbacks',
      desc: 'An honest look at the pros and cons of using Flutter for building business applications. I discuss real-world challenges, benefits, and when Flutter makes (or doesn’t make) sense for enterprise-grade solutions.',
      tags: ['Flutter', 'Apps', 'Responsive Design'],
      href: 'https://medium.com/@koushikrad/exploring-flutter-for-business-apps-weighing-advantages-and-drawbacks-ba530e5a61e2',
      blobPath: "M39.9,-65.7C51.1,-58.5,59.2,-46.3,65.8,-33C72.4,-19.7,77.5,-5.3,76.8,9.2C76.1,23.7,69.6,38.3,58.9,48.4C48.2,58.5,33.3,64.1,18.3,68.5C3.2,72.9,-12,76.1,-25.6,72.6C-39.2,69.1,-51.1,58.9,-60.3,46.2C-69.5,33.5,-76,18.3,-77.1,2.5C-78.3,-13.3,-74.1,-29.7,-64.8,-41.9C-55.5,-54.1,-41.1,-62.1,-27.4,-67.5C-13.7,-72.9,-0.7,-75.7,11.9,-73.3C24.5,-70.9,28.7,-72.9,39.9,-65.7Z",
    },
    {
      icon: 'fas fa-fire',
      date: 'Jul 26, 2020',
      read: '5 min read',
      title: 'Detecting Ember.js Components Entering or Leaving the Viewport',
      desc: 'A technical walkthrough on leveraging an Ember CLI addon to detect when components enter or leave the viewport. Ideal for adding scroll-based interactions or lazy loading in Ember.js apps.',
      tags: ['Ember JS', 'Web Development', 'Performance'],
      href: 'https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf',
      blobPath: "M45.3,-75.3C58.3,-67.3,68.3,-53.9,75.2,-39C82.1,-24.1,85.9,-7.7,83.1,7.5C80.3,22.7,71,36.7,59.4,47.4C47.9,58.1,34.1,65.5,19.2,70.7C4.3,75.9,-11.7,79,-27.1,76.2C-42.5,73.5,-57.3,65,-68.3,52.3C-79.3,39.7,-86.5,22.8,-87.8,5.5C-89.1,-11.9,-84.5,-29.7,-74.6,-43.7C-64.7,-57.7,-49.5,-67.9,-34.5,-74.7C-19.5,-81.5,-4.9,-84.9,9.2,-81.1C23.3,-77.3,32.3,-83.3,45.3,-75.3Z",
    },
  ]

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Blog</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">I regularly write about software development, tech sharing, and the latest web technologies. Check out my featured articles below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <div className="blog-card rounded-xl overflow-hidden" key={p.title}>
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#38BDF8" fillOpacity="0.2" d={p.blobPath} transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${p.icon} text-4xl text-white`}></i>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs text-sky-400">{p.date}</span>
                  <span className="mx-2 text-slate-500">•</span>
                  <span className="text-xs text-slate-400">{p.read}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-400 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span className="blog-tag text-xs px-3 py-1 rounded-full" key={t}>{t}</span>
                  ))}
                </div>
                <a href={p.href} className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center" target="_blank" rel="noreferrer">
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://medium.com/@koushikrad" className="btn-outline px-8 py-3 rounded-full font-medium inline-block" target="_blank" rel="noreferrer">
            View All Articles <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  )
}


