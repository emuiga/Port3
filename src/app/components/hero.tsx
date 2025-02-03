"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const titles = [
  "Full-Stack Developer",
  "IoT Developer",
  "Software Engineer",
  "Technical Writer"
]

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const typeSpeed = isDeleting ? 50 : 100 // Faster deletion
    
    const handleTyping = () => {
      if (!isDeleting && currentText === currentTitle) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1500)
        return
      }
      
      if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        return
      }
      
      const nextText = isDeleting 
        ? currentTitle.substring(0, currentText.length - 1)
        : currentTitle.substring(0, currentText.length + 1)
        
      setCurrentText(nextText)
    }

    const timeout = setTimeout(handleTyping, typeSpeed)
    return () => clearTimeout(timeout)
  }, [currentText, currentTitleIndex, isDeleting])

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="absolute right-0 top-0 opacity-10 text-gray-500">
        <pre className="font-mono text-sm">
          {`console.log('Hello World');
npm install next@latest
<html>
  <body>
    <h1>Welcome</h1>
  </body>
</html>`}
        </pre>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-[500px] mx-auto order-1 lg:order-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl animate-pulse" />
            <Image
              src="/DSC_5819.svg"
              alt="Profile"
              fill
              priority
              className="object-cover rounded-full p-4"
            />
          </div>

          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="flex flex-col gap-3 mb-6 items-center lg:items-start">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                MUIGA STEVE
              </h1>
              <p className="text-gray-400 max-w-lg">
                Crafting immersive and engaging experiences, playing my little part in shaping the future of the web.
              </p>
            </div>
            
            <div className="flex items-center gap-2 mb-8 font-mono justify-center lg:justify-start overflow-hidden">
              <span className="text-green-500 text-2xl shrink-0">~$</span>
              <div className="overflow-hidden">
                <span 
                  className="text-purple-400 font-bold whitespace-nowrap block"
                  style={{
                    fontSize: currentText.length > 12 ? 
                      'clamp(1rem, 5vw, 3rem)' : 
                      'clamp(1.875rem, 5vw, 3rem)'
                  }}
                >
                  {currentText}
                  <span className="animate-pulse">_</span>
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <Button asChild className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600">
                <Link href="#portfolio">
                  VIEW MY WORK
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
