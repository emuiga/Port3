 "use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { FileText, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Certificate of Excellence: Innovation Finalist",
    issuer: "KamiLimu",
    date: "2024",
    image: "", 
    pdf: "/certifications/CoE.pdf", 
  },
  {
    title: "Certificate of Completion",
    issuer: "KamiLimu",
    date: "2024",
    image: "",
    pdf: "/certifications/CoC.pdf",
  },
  {
    title: "Cybersecurity Certificate",
    issuer: "CyberTalents",
    date: "2024",
    image: "",
    pdf: "/certifications/Cybersec Cert.pdf",
  },
  {
    title: "Data Science Certificate",
    issuer: "Lux Academy & DSE Africa",
    date: "2023",
    image: "",
    pdf: "/certifications/Data Science Cert.pdf",
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          CERTIFICATIONS
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-slate-600 transition-colors"
            >
              {cert.image && (
                <div className="relative w-full h-48 bg-slate-800">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400">
                    {cert.issuer}
                  </p>
                  <p className="text-pink-500 text-sm">
                    Issued {cert.date}
                  </p>
                </div>

                <div className="flex gap-4">
                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-white text-sm transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      View PDF
                    </a>
                  )}
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-white text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Image
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}