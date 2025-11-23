export type Blog = {
  id: string
  icon: string
  date: string
  read: string
  title: string
  desc: string
  tags: string[]
  href: string
  blob: string
  content: string
}

export const blogs: Blog[] = [
  {
    id: 'your-face-isnt-free',
    icon: 'fas fa-brain',
    date: 'Oct 07, 2025',
    read: '3 min read',
    title: 'Your Face Isn\’t Free: The Hidden Dangers of AI Image Generation',
    desc: 'AI should enhance creativity, not compromise consent. Your face is your identity, and it must remain private. When using image generators, pause before you upload. Even a celebrity\'s face, or your own, is not a free prompt. Let\'s raise awareness for digital dignity.',
    tags: ['AI', 'Image Generation', 'Awareness'],
    href: 'https://www.linkedin.com/pulse/your-face-isnt-free-hidden-dangers-ai-image-koushik-radhakrishnan-uxedc/',
    blob: '/images/blob-3.svg',
    content: `
# Your Face Isn’t Free: The Hidden Dangers of AI Image Generation

Artificial Intelligence has revolutionized the way we create and consume content. From generating realistic images to mimicking voices, the capabilities of AI are expanding at an unprecedented rate. However, with this power comes a significant responsibility—one that is often overlooked in the excitement of innovation.

## The Cost of Convenience

When you upload a photo to an AI image generator, you might be thinking about the fun result you'll get. Maybe you want to see yourself as a superhero, or in a different era. But have you stopped to consider what happens to that image once it's processed?

Your face is your most personal identifier. Unlike a password, you can't change it if it's compromised. Yet, many of us freely give away this biometric data to companies without fully understanding their privacy policies or how our data might be used in the future.

## Consent in the Digital Age

The issue of consent is central to the debate around AI image generation. When AI models are trained on vast datasets of images scraped from the internet, the individuals in those photos often haven't given their permission. This raises ethical questions about ownership and the right to control one's own likeness.

> "AI should enhance creativity, not compromise consent."

We need to demand better transparency and stricter regulations regarding how biometric data is collected, stored, and used. As users, we also need to be more mindful of the digital footprint we are creating.

## Protecting Your Digital Identity

So, what can you do?
1.  **Read the Fine Print**: Before using any AI tool, take a moment to read the terms of service. Look for sections about data usage and retention.
2.  **Limit Sharing**: Be cautious about where you upload high-resolution photos of yourself.
3.  **Advocate for Change**: Support policies and platforms that prioritize user privacy and consent.

Let's raise awareness for digital dignity. Your face is yours—keep it that way.
    `
  },
  {
    id: 'exploring-flutter-for-business-apps',
    icon: 'fa-brands fa-flutter',
    date: 'Aug 20, 2023',
    read: '6 min read',
    title: 'Exploring Flutter for Business Apps: Weighing Advantages and Drawbacks',
    desc: 'An honest look at the pros and cons of using Flutter for building business applications. I discuss real-world challenges, benefits, and when Flutter makes (or doesn’t make) sense for enterprise-grade solutions.',
    tags: ['Flutter', 'Apps', 'Responsive Design'],
    href: 'https://medium.com/@koushikrad/exploring-flutter-for-business-apps-weighing-advantages-and-drawbacks-ba530e5a61e2',
    blob: '/images/blob-2.svg',
    content: `
# Exploring Flutter for Business Apps

Flutter has taken the cross-platform development world by storm. Backed by Google, it promises a single codebase for mobile, web, and desktop. But is it the right choice for your next business application? Let's dive into the advantages and drawbacks.

## The Advantages

### 1. Single Codebase
The most obvious benefit is writing code once and running it everywhere. This significantly reduces development time and maintenance costs.

### 2. Hot Reload
Flutter's hot reload feature is a game-changer for developer productivity. You can see changes instantly without losing the application state.

### 3. Performance
Flutter compiles to native ARM code, which means it doesn't rely on a bridge like React Native. This results in near-native performance.

## The Drawbacks

### 1. Large App Size
Flutter apps tend to be larger than their native counterparts because they bundle the Flutter engine.

### 2. Limited Libraries
While the ecosystem is growing, you might still find some niche libraries missing compared to the mature ecosystems of iOS and Android.

## Conclusion

Flutter is an excellent choice for many business applications, especially startups looking to move fast. However, for apps that require deep system integration or have strict size constraints, native development might still be the way to go.
    `
  },
  {
    id: 'detecting-ember-js-components',
    icon: 'fas fa-fire',
    date: 'Jul 26, 2020',
    read: '5 min read',
    title: 'Detecting Ember.js Components Entering or Leaving the Viewport',
    desc: 'A technical walkthrough on leveraging an Ember CLI addon to detect when components enter or leave the viewport. Ideal for adding scroll-based interactions or lazy loading in Ember.js apps.',
    tags: ['Ember JS', 'Web Development', 'Performance'],
    href: 'https://medium.com/@koushikrad/using-an-ember-cli-addon-detecting-ember-js-components-entering-or-leaving-the-viewport-dda5ad9b46bf',
    blob: '/images/blob-3.svg',
    content: `
# Detecting Ember.js Components in Viewport

In modern web applications, we often need to know when a component enters or leaves the viewport. This is useful for lazy loading images, triggering animations, or infinite scrolling. In the Ember.js ecosystem, \`ember-in-viewport\` is a powerful addon that simplifies this task.

## Installation

First, install the addon:

\`\`\`bash
ember install ember-in-viewport
\`\`\`

## Usage

You can use the \`InViewportMixin\` in your components:

\`\`\`javascript
import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';

export default Component.extend(InViewportMixin, {
  didEnterViewport() {
    console.log('entered');
  },

  didExitViewport() {
    console.log('exited');
  }
});
\`\`\`

## Performance Considerations

The addon uses \`IntersectionObserver\` under the hood, which is highly performant. However, be mindful of how many components you are observing simultaneously.

This simple tool can greatly enhance the user experience by making your application feel more responsive and alive.
    `
  },
  {
    id: 'code-reviews-best-practices',
    icon: 'fas fa-code',
    date: 'Jul 18, 2020',
    read: '7 min read',
    title: 'Code Reviews — Best Practices',
    desc: 'A practical guide to making code reviews more effective, respectful, and valuable for both the reviewer and the author. I share lessons learned from real-world team collaboration and how to turn code reviews into a tool for growth.',
    tags: ['Coding', 'Code Review', 'Best practices'],
    href: 'https://medium.com/@koushikrad/code-reviews-best-practices-686a365b79a8',
    blob: '/images/blob-1.svg',
    content: `
# Code Reviews — Best Practices

Code reviews are a critical part of the software development lifecycle. When done right, they improve code quality, share knowledge, and foster team collaboration. When done wrong, they can become a bottleneck and a source of frustration.

## For the Author

1.  **Keep it Small**: Large pull requests are hard to review. Break your changes into smaller, logical chunks.
2.  **Provide Context**: Explain *why* you made the changes, not just *what* you changed. Use the PR description effectively.
3.  **Test Your Code**: Don't rely on the reviewer to catch bugs. Run your tests and verify your changes locally first.

## For the Reviewer

1.  **Be Respectful**: Remember there is a human on the other side of the screen. Critique the code, not the person.
2.  **Focus on the Important Stuff**: Don't nitpick on formatting if you have a linter. Focus on architecture, logic, and maintainability.
3.  **Ask Questions**: If you don't understand something, ask. It's a learning opportunity for both of you.

## Conclusion

Code reviews are a team effort. By following these best practices, we can make the process smoother and more enjoyable for everyone involved.
    `
  }
]


