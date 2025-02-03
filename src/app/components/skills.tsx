import Image from 'next/image'

const technologies = [
  {
    name: 'HTML5',
    icon: '/icons/html5.svg'
  },
  {
    name: 'CSS3',
    icon: '/icons/css3.svg'
  },
  {
    name: 'JavaScript',
    icon: '/icons/javascript.svg'
  },
  {
    name: 'Tailwind',
    icon: '/icons/tailwind.svg'
  },
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg'
  },
  {
    name: 'Figma',
    icon: '/icons/figma.svg'
  },
  {
    name: 'React',
    icon: '/icons/react.svg'
  },
  {
    name: 'Webpack',
    icon: '/icons/webpack.svg'
  },
  {
    name: 'Git',
    icon: '/icons/git.svg'
  },
  {
    name: 'WordPress',
    icon: '/icons/wordpress.svg'
  },
  {
    name: 'Sass',
    icon: '/icons/sass.svg'
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          SKILLS
        </h2>
        
        <p className="text-2xl text-slate-200 mb-16">
          The skills, tools and technologies I use:
        </p>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}