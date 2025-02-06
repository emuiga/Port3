"use client"
import { MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { sendEmail } from "@/app/actions/sendEmail"


const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/stevemuiga",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/254768519115",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export function Contact() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(formData: FormData) {
    setSending(true)
    
    try {
      await sendEmail(formData)
      setSent(true)
      const form = document.getElementById('contactForm') as HTMLFormElement
      form.reset()
    } catch (error) {
      console.error(error)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          GET IN TOUCH
        </h2>

        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-4">
              DO YOU HAVE A PROJECT TO DISCUSS?
            </h2>
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-8">
              GET IN TOUCH <MessageSquare className="w-6 h-6" />
            </h3>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">CONTACT</h4>
              <a 
                href="mailto:muigastephen14@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                muigastephen14@gmail.com

              </a>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">HIT ME UP ON</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <form 
            id="contactForm"
            action={handleSubmit}
            className="space-y-6"
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {sent && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>

        <div className="absolute bottom-8 left-0 right-0">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Steve Muiga. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}