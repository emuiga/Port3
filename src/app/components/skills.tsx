import Image from 'next/image'

const technologies = [
  {
    name: 'Frontend',
    skills: [
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
      }
    ]
  },
  {
    name: 'Backend',
    skills: [
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
      }
    ]
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      }
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
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
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          SKILLS
        </h2>
        
        <div className="space-y-20">
          {technologies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-200">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex flex-col items-center gap-3 p-4 hover:scale-110 transition-transform duration-200"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className="object-contain"
                      unoptimized // Added because we're using external URLs
                    />
                    <span className="text-sm text-gray-400">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}