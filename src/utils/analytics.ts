declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function trackPageEvent(pageName: string) {
  window.gtag?.('event', 'page', {
    event_category: 'engagement',
    event_label: pageName,
  })
}

export function trackClickEvent(type: string) {
  window.gtag?.('event', 'click', {
    event_category: 'engagement',
    event_label: type,
  })
}


