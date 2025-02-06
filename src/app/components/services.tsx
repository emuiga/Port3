'use client'
import { Code, Palette, Database, Smartphone, Layout, Layers, PenTool } from "lucide-react"
import { Card } from "@/components/ui/card"


const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications using modern technologies like React, Next.js, and Tailwind CSS to create seamless user experiences.",
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-400" />,
    title: "Fullstack Development",
    description: "End-to-end development combining frontend and backend expertise to deliver complete web solutions, from database design to user interface.",
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-400" />,
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces and experiences through user research, wireframing, and prototyping to ensure both aesthetics and functionality.",
  },
  {
    icon: <Database className="w-8 h-8 text-blue-400" />,
    title: "WordPress Development",
    description: "Creating custom WordPress themes and plugins, optimizing performance, and building content management systems tailored to your specific needs.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications using Ionic, ensuring your app works smoothly on both iOS and Android devices.",
  },
  {
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    title: "Backend Development",
    description: "Building robust server-side applications using Node.js, Python, and databases like MongoDB and PostgreSQL to power your web applications.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-blue-400" />,
    title: "Graphic Design",
    description: "Creating visually appealing designs for logos, marketing materials, and social media content that align with your brand identity.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          MY SERVICES
        </h2>

        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="p-2 w-fit rounded-lg bg-slate-800/50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-slate-400">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}