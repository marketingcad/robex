import { create } from 'zustand'

interface GlobalState {
  currentSection: number
  scrollProgress: number
  isLoading: boolean
  isMobile: boolean
  prefersReducedMotion: boolean
  activeProduct: string | null
  setCurrentSection: (section: number) => void
  setScrollProgress: (progress: number) => void
  setIsLoading: (loading: boolean) => void
  setIsMobile: (mobile: boolean) => void
  setPrefersReducedMotion: (reduced: boolean) => void
  setActiveProduct: (product: string | null) => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  currentSection: 0,
  scrollProgress: 0,
  isLoading: true,
  isMobile: false,
  prefersReducedMotion: false,
  activeProduct: null,
  setCurrentSection: (section) => set({ currentSection: section }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsMobile: (mobile) => set({ isMobile: mobile }),
  setPrefersReducedMotion: (reduced) => set({ prefersReducedMotion: reduced }),
  setActiveProduct: (product) => set({ activeProduct: product }),
}))
