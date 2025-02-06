'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const skills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'WordPress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'Ionic',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg'
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          MY SKILLS
        </h2>
        
        {/* Hexagonal Grid Layout */}
        <div className="relative mb-32">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center"
              >
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-slate-800/50 rounded-xl p-2.5 
                             hover:bg-slate-800 transition-all duration-300 
                             hover:shadow-lg hover:shadow-pink-500/20">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <span className="opacity-0 group-hover:opacity-100 absolute -bottom-6 
                               text-xs text-gray-400 transition-opacity duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Journey Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              At my first internship, I had to work with PHP and WordPress - technologies I had never used before.
              <span className="block mt-2 text-gray-400">Learned on the job, all went well.</span>
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              In my next role, I needed to build with Angular - a framework that was new to me.
              <span className="block mt-2 text-gray-400">Learned on the job, all went well.</span>
            </p>


            <p className="text-lg text-gray-300 leading-relaxed">
              At my current position, I&apos;m working with complex full-stack applications using technologies I&apos;m learning every day.
              <span className="block mt-2 text-gray-400">Learning on the job, all is going well.</span>
            </p>
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl text-gray-200 font-medium">
              My strength isn&apos;t in knowing everything, but in my ability to learn anything.
            </p>
            <p className="text-lg text-pink-500">
              Through each role, I&apos;ve proven that adaptability and eagerness to learn are my greatest assets.
            </p>
            <p className="text-gray-300 italic">
              As a developer, I embrace being a lifelong student. Every new challenge is an opportunity to grow.
            </p>
          </div>
        </motion.div>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Here&apos;s what I&apos;ve been working with recently
        </p>
      </div>
    </section>
  )
}