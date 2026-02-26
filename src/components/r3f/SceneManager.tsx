'use client'

import CameraRig from './CameraRig'
import Lighting from './Lighting'
import FloatingParticles from '../objects/FloatingParticles'
import SectionHero from './SectionHero'
import SectionAbout from './SectionAbout'
import SectionProducts from './SectionProducts'
import SectionContact from './SectionContact'

export default function SceneManager() {
  return (
    <>
      <CameraRig />
      <Lighting />
      <FloatingParticles />
      <SectionHero />
      <SectionAbout />
      <SectionProducts />
      <SectionContact />
    </>
  )
}
