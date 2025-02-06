"use client"
import { Menu, X, FileDown } from "lucide-react"
import { useState } from "react"

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="group relative h-10 w-10 cursor-pointer">
            <div className="absolute inset-0 border-2 border-pink-500 
                          transition-all duration-300 
                          group-hover:rotate-[360deg] group-hover:w-32 group-hover:border-none
                          group-hover:bg-gradient-to-r from-pink-500 to-purple-500">
            </div>
            <div className="absolute inset-0 flex items-center justify-center
                          transition-all duration-300 group-hover:opacity-0">
              <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 
                             text-transparent bg-clip-text -rotate-45">
                SM
              </span>
            </div>
            <span className="absolute inset-0 text-xl font-bold text-white opacity-0 
                           transition-all duration-300 group-hover:opacity-100
                           flex items-center justify-center whitespace-nowrap">
              MUIGA
            </span>
          </div>
          
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-pink-500 transition"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-pink-500 transition"
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-pink-500 transition"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-pink-500 transition"
            >
              Contact
            </button>
            
            <a
              href="/certifications/Stephen_Muiga_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-pink-500 transition px-2 py-1 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-pink-500 transition px-2 py-1 text-left"
            >
              Technologies
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-pink-500 transition px-2 py-1 text-left"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-pink-500 transition px-2 py-1 text-left"
            >
              Contact
            </button>
            
            <a
              href="/certifications/Stephen_Muiga_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors w-fit"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}