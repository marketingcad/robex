import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </>
  )
}
