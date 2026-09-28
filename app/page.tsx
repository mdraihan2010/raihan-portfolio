import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Education } from '@/components/sections/education'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { CompetitiveProgramming } from '@/components/sections/competitive-programming'
import { Journey } from '@/components/sections/journey'
import { Achievements } from '@/components/sections/achievements'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Journey />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
