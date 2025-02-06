"use client"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
          MY STORY
        </h2>

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <motion.div 
              className="absolute left-1/2 h-[300px] w-1 bg-gradient-to-b from-pink-500 to-purple-500"
              initial={{ height: 0 }}
              animate={{ height: 300 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 -translate-x-1/2 flex items-center"
                style={{ top: `${25 + index * 35}%` }}
                initial={{ scale: 0, x: "-50%" }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
              >
                <div className="w-4 h-4 rounded-full bg-pink-500" />
                <motion.div
                  className="ml-6 bg-slate-800 p-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.5 + index * 0.2 }}
                >
                  <p className="text-sm text-gray-300">
                    {index === 0 && "BSc. Mathematics and Computer Science"}
                    {index === 1 && "Projects, Contributions and Mentorship"}
                    {index === 2 && "Fullstack Developer"}
                  </p>
                </motion.div>
              </motion.div>

            ))}

            <motion.div
              className="absolute w-20 h-20 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ left: "20%", top: "20%" }}
            />
            <motion.div
              className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -45, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ right: "20%", bottom: "20%" }}
            />
          </motion.div>

          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a Fullstack Developer specializing in building robust web applications that solve real-world challenges. My journey into software development began during my industrial attachment while pursuing my BSc. in Mathematics and Computer Science at JKUAT. During my attachment at Nyandarua County Assembly, I discovered my passion for creating impactful solutions. There, I successfully implemented a library management system that streamlined operations and improved resource accessibility for the organization. This experience opened my eyes to the transformative power of technology and set me on a path of continuous learning and growth.
            </p>
            <p className="text-gray-300">
            Today, I channel this passion into developing innovative solutions at <a href="https://www.safaricom.co.ke/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-purple-500 transition-colors">Safaricom PLC</a>, where I collaborate with cross-functional teams to build scalable products that enhance user experiences. I take pride in approaching each project with a user-centered mindset. Beyond my professional work, I regularly share my knowledge and experiences through technical articles on <a href="https://muiga-steve.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-purple-500 transition-colors">my blog</a>, contributing to the developer community and staying current with industry trends.            </p>
            <p className="text-gray-300">

            Looking ahead, I am excited to take on more challenging projects that push the boundaries of what&apos;s possible in web development. I aim to continue growing as a developer while creating meaningful applications that make a difference in people&apos;s lives.            </p>

          </div>
        </div>
      </div>
    </section>
  )
} 