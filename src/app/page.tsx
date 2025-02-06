import { Hero } from "@/app/components/hero"
import { Nav } from "@/app/components/nav"
import { Services } from "@/app/components/services"
import { Experience } from "@/app/components/experience"
import { Skills } from "@/app/components/skills"
import { Portfolio } from "@/app/components/portfolio"
import { Contact } from "@/app/components/contact"
import { About } from "@/app/components/about"
import Certifications from "@/app/components/certifications" 

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Portfolio />
      <Certifications />
      <Contact />
    </main>
  )
}