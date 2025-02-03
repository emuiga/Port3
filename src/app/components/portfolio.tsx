"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Muiga Blog",
    description: "A technical blog built with Next.js and MDX where I share my insights and experiences in software development.",
    image: "/projects/blog.png",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "https://blog.muiga.tech",
    githubUrl: "https://github.com/muigadev/blog",
  },
  {
    title: "IoT Dashboard",
    description: "A real-time dashboard for monitoring IoT devices and sensors, featuring data visualization and device management.",
    image: "/projects/iot-dashboard.png",
    tags: ["React", "Node.js", "MQTT", "MongoDB"],
    liveUrl: "https://iot.muiga.tech",
    githubUrl: "https://github.com/muigadev/iot-dashboard",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS, featuring a modern design and smooth animations.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://muiga.tech",
    githubUrl: "https://github.com/muigadev/portfolio",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          MY PROJECTS
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-sm rounded-md bg-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
            <Link href="https://github.com/muigadev" target="_blank">
              See More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}