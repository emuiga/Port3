"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Innov8Pulse",
    description: "Platform that helps hackathon participants showcase their projects, track contributions, and connect with mentors to drive project sustainability.",
    image: "/projects/Screenshot (106).png",
    tags: ["React", "Firebase", "Node.js", "Blockchain"],
    githubUrl: "https://github.com/emuiga/Innov8Pulse",
    liveUrl: "https://innov8pulse.netlify.app"


  },
  {
    title: "Library Management System",
    description: "Comprehensive system for managing library resources for both the librarians and the employees of the Nyandarua County Assembly.",
    image: "/projects/library-bg1.jpg",
    tags: ["PHP", "JS", "MySQL"],
    githubUrl: "https://github.com/emuiga/Santiago",
    liveUrl: "https://library-management.demo.com"

  },
  {
    title: "Anga Afrika IoT",
    description: "A solution for tracking conditions in warehouses, data centres, and factories using sensors, microcontrollers and a dashboard for monitoring the data.",
    image: "/projects/sensor network.jpg",
    tags: ["Node.js", "MQTT", "PostgreSQL", "Django", "Angular", "Ionic"],
    liveUrl: "https://iot.muiga.tech",
    githubUrl: "https://github.com/orgs/Anga-Afrika/repositories",
  },
  {
    title: "Adorned Family Home",
    description: "Website for a family home that showcases their services and allows potential clients to book appointments and contact them directly.",
    image: "/projects/Screenshot (203).png",
    tags: ["Wordpress"],
    liveUrl: "https://adornedafh.com/",
    githubUrl: "https://github.com/emuiga",


  },

  {
    title: "Portfolio Website v2",
    description: "My personal portfolio website built with Next.js and Tailwind CSS, featuring a modern design and smooth animations.",
    image: "/projects/Screenshot (201).png",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://muiga.netlify.app",
    githubUrl: "https://github.com/muigadev/portfolio",
  },
  {
    title: "Portfolio Website v1",
    description: "My personal portfolio website built with Next.js and Tailwind CSS, featuring a modern design and smooth animations.",
    image: "/projects/Screenshot (202).png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://muigasteve.netlify.app",
    githubUrl: "https://github.com/emuiga/Portfolio",
  },
  // Add more projects here
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          MY WORK
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 h-full flex flex-col">
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full bg-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}