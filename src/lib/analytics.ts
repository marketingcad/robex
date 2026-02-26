export function trackScrollDepth(depth: number) {
  if (typeof window !== 'undefined' && 'va' in window) {
    try {
      // @ts-expect-error Vercel Analytics global
      window.va('event', { name: 'scroll_depth', data: { depth } })
    } catch {}
  }
}

export function trackProductInteraction(product: string) {
  if (typeof window !== 'undefined' && 'va' in window) {
    try {
      // @ts-expect-error Vercel Analytics global
      window.va('event', { name: 'product_interacted', data: { product } })
    } catch {}
  }
}

export function trackFormSubmission() {
  if (typeof window !== 'undefined' && 'va' in window) {
    try {
      // @ts-expect-error Vercel Analytics global
      window.va('event', { name: 'form_submitted' })
    } catch {}
  }
}
