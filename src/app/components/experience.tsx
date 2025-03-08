"use client"
import { motion } from "framer-motion"

interface Experience {
    role: string
    company: string
    duration: string
    description: string[]
    technologies: string[]
  } 

const experiences: Experience[] = [
    {
        role: "Full Stack Developer",
        company: "KIFWA",
        duration: "Dec 2024 - Present",
        description: [
            "Focusing on building secure, scalable, and maintainable solutions"
          ],
        technologies: ["Next.js", "Shadcn", "Keycloak", "React"]
      },



    {
        role: "Freelance Software Developer",
        company: "Self-Employed",
        duration: "April 2024 - Nov 2024",
        description: [

            "Built and maintained custom WordPress websites for small businesses, focusing on responsive design and user experience",
            "Developed cross-platform mobile applications using Ionic framework for clients",
            "Provided ongoing maintenance, updates, and technical support for client websites",
            "Collaborated directly with clients to gather requirements and deliver solutions that met their business needs"

          ],
        technologies: ["Wordpress", "JavaScript", "Ionic", "Capacitor"]
      },
    {
        role: "Mentee",
        company: "KamiLimu",
        duration: "April 2024 - Nov 2024",
        description: [
            "Selected to be 1 of 38 students from universities in Kenya to be part of the 8-month structured mentorship program.", 
            "KamiLimu is an 8-month multi-award-winning structured mentorship program that aims to upskill ICT students in Kenya to foster their global competitiveness. The program ensures that the mentees acquire professional skills, ICT skills, innovation, scholarship awareness and writing, and community engagement skills.",

            "Through the mentorship I have been equipped with:",
            "ICT skills- Fullstack software development using React, Node and Firebase.",
            "Public Speaking skills- Participated in the public speaking competition.",
            "Professional skills- Effective Communication, Performance Management acquired from being the Team Lead of our Web Development Innovation Project.",
            "Innovation Skills- I designed a hackathon project idea to encourage students to get help from industry experts to complete their projects after the hackathon. The project was selected as one of the finalists in the innovation and ICT track.",
            "During this period I acquired Design thinking, Pitching and Project Management skills."
          ],
        technologies: ["React", "Node", "Firebase", "Public Speaking", "Effective Communication", "Performance Management", "Design thinking", "Pitching", "Project Management"]
      },
    {
        role: "Software Developer",
        company: "Furaha Ventures",
        duration: "May 2023 - Oct 2024",
        description: [
            "Developed an IoT-connected application using Angular and Ionic framework for cross-platform deployment",
            "Built responsive UI components and implemented real-time data visualization for IoT sensor readings",
            "Integrated the application with backend APIs to handle device communication and data management"
          ],
        technologies: ["Angular", "Ionic", "Capacitor"]
      },

    {
        role: "IoT Intern",
        company: "The Nakuja Project by JICA & JKUAT",
        duration: "Sep 2023 - Jan 2024",
        description: [
            "Worked as a member of the Recovery team for the Nakuja project N-3 rocket",
            "Our goal was to build a liquid propellant rocket that can bring nanosatellites into the low earth orbit",
            "Involved in PCB fabrication",
            "Collaborated on the implementation of the parachute ejection system",
            "Worked to ensure the transmission of data from the onboard rocket to the ground station",
            "Implementing and testing the avionics system of N-3 rockets"

          ],
        technologies: ["PCB Fabrication", "Embedded Systems", "Rocketry"]
      },
    {
        role: "Freelance Web Developer",
        company: "Infiscope Enterprise",
        duration: "Oct 2023 - Nov 2023",
        description: [
            "Development and maintenance of the company website"
          ],
        technologies: ["Wordpress", "Elementor", "Woocommerce", "PHP", "HTML", "CSS", "JavaScript"]
      },
  {
    role: "ICT Attache",
    company: "Nyandarua County Assembly",
    duration: "May 2023 - Aug 2023",
    description: [
        "Collaborated in the development of the HR Management System",
        "Developed a Library Management system for the organization using Java",
        "Developed a web-based Library Management system for the organization using PHP",
        "Troubleshooting and performing electronic device repairs and maintenance",
        "Maintenance and weekly updating of information on the Assembly website",
        "Setting up wireless network connections in the different departments in the assembly and wards in the County and router configurations",
        "Cable crimping",
        "Live streaming of Assembly proceedings on the Assembly's Facebook and Youtube pages using vMix software",
        "Network and Biometric system maintenance. We configured the biometric devices and the door access cards",
        "Set up, configured to the PBX, and management of VoIP systems",
        "Set up, testing, and configuration of CCTV cameras"
      ],
    technologies: ["PHP", "Networking", "Java", "MySQL", "vMix", "VoIP", "CCTV"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          WORK EXPERIENCE
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-pink-500 to-purple-500" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[0.3125rem] top-2 h-2.5 w-2.5 rounded-full bg-pink-500" />

                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-pink-500 text-sm">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">
                      {exp.company}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-pink-500 mt-1.5">•</span>
                          <span className="text-gray-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-slate-900/50 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 