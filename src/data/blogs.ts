export type Blog = {
  icon: string
  date: string
  read: string
  title: string
  desc: string
  tags: string[]
  href: string
  blob: string
}

export const blogs: Blog[] = [
  {
    icon: 'fas fa-brain',
    date: 'Oct 07, 2025',
    read: '3 min read',
    title: 'Your Face Isn\’t Free: The Hidden Dangers of AI Image Generation',
    desc: 'AI should enhance creativity, not compromise consent. Your face is your identity, and it must remain private. When using image generators, pause before you upload. Even a celebrity\'s face, or your own, is not a free prompt. Let\'s raise awareness for digital dignity.',
    tags: ['AI', 'Image Generation', 'Awareness'],
    href: 'https://www.linkedin.com/pulse/your-face-isnt-free-hidden-dangers-ai-image-koushik-radhakrishnan-uxedc/',
    blob: '/images/blob-3.svg',
  },
  {
    icon: 'fa-brands fa-flutter',
    date: 'Aug 20, 2023',
    read: '6 min read',
    title: 'Exploring Flutter for Business Apps: Weighing Advantages and Drawbacks',
    desc: 'An honest look at the pros and cons of using Flutter for building business applications. I discuss real-world challenges, benefits, and when Flutter makes (or doesn’t make) sense for enterprise-grade solutions.',
    tags: ['Flutter', 'Apps', 'Responsive Design'],
    href: 'https://medium.com/@koushikrad/exploring-flutter-for-business-apps-weighing-advantages-and-drawbacks-ba530e5a61e2',
    blob: '/images/blob-2.svg',
  },
  {
    icon: 'fas fa-fire',
    date: 'Jul 26, 2020',
    read: '5 min read',
    title: 'Detecting Ember.js Components Entering or Leaving the Viewport',
    desc: 'A technical walkthrough on leveraging an Ember CLI addon to detect when components enter or leave the viewport. Ideal for adding scroll-based interactions or lazy loading in Ember.js apps.',
    tags: ['Ember JS', 'Web Development', 'Performance'],
    href: 'https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf',
    blob: '/images/blob-3.svg',
  },
  {
    icon: 'fas fa-code',
    date: 'Jul 18, 2020',
    read: '7 min read',
    title: 'Code Reviews — Best Practices',
    desc: 'A practical guide to making code reviews more effective, respectful, and valuable for both the reviewer and the author. I share lessons learned from real-world team collaboration and how to turn code reviews into a tool for growth.',
    tags: ['Coding', 'Code Review', 'Best practices'],
    href: 'https://medium.com/@koushikrad/code-reviews-best-practices-686a365b79a8',
    blob: '/images/blob-1.svg',
  }
]


