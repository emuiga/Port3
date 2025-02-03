"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/useLanguage"
import { useState } from "react"

const languages = [
  { code: 'en', name: 'English' },
  { code: 'sw', name: 'Kiswahili' },
]

export function Nav() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="group relative h-10 w-10 cursor-pointer">
            {/* Rotating Square */}
            <div className="absolute inset-0 border-2 border-pink-500 
                          transition-all duration-300 
                          group-hover:rotate-[360deg] group-hover:w-32 group-hover:border-none
                          group-hover:bg-gradient-to-r from-pink-500 to-purple-500">
            </div>
            {/* Initials */}
            <div className="absolute inset-0 flex items-center justify-center
                          transition-all duration-300 group-hover:opacity-0">
              <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 
                             text-transparent bg-clip-text -rotate-45">
                SM
              </span>
            </div>
            {/* Full name that appears on hover */}
            <span className="absolute inset-0 text-xl font-bold text-white opacity-0 
                           transition-all duration-300 group-hover:opacity-100
                           flex items-center justify-center whitespace-nowrap">
              MUIGA
            </span>
          </div>
          
          {/* Mobile menu button */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="#services" className="hover:text-pink-500 transition">
              {t('nav.services')}
            </Link>
            <Link href="#technologies" className="hover:text-pink-500 transition">
              {t('nav.technologies')}
            </Link>
            <Link href="#portfolio" className="hover:text-pink-500 transition">
              {t('nav.portfolio')}
            </Link>
            <Link href="#contact" className="hover:text-pink-500 transition">
              {t('nav.contact')}
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost">
                  <Globe className="mr-2 h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-slate-900 border-slate-800">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    className="hover:bg-slate-800 cursor-pointer"
                    onClick={() => setLanguage(lang.code as 'en' | 'sw')}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 flex flex-col gap-4">
            <Link 
              href="#services" 
              className="hover:text-pink-500 transition px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link 
              href="#technologies" 
              className="hover:text-pink-500 transition px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.technologies')}
            </Link>
            <Link 
              href="#portfolio" 
              className="hover:text-pink-500 transition px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.portfolio')}
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-pink-500 transition px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="w-fit">
                  <Globe className="mr-2 h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-slate-900 border-slate-800">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    className="hover:bg-slate-800 cursor-pointer"
                    onClick={() => setLanguage(lang.code as 'en' | 'sw')}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  )
}