import { useState, useEffect } from 'react'
import { RocketIcon, StarIcon, BrainIcon, UserIcon } from './Icons'
import avatar from '../assets/avatar.png'
const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: '10+', label: 'Projects Completed', icon: 'rocket', color: 'text-blue-600 dark:text-blue-400' },
    { number: '3+', label: 'Years Learning', icon: 'star', color: 'text-green-600 dark:text-green-400' },
    { number: '24/7', label: 'Learning Mode', icon: 'brain', color: 'text-purple-600 dark:text-purple-400' }
  ]

  // const skills = ['Python', 'JavaScript', 'React', 'Flask', 'TensorFlow', 'MongoDB', 'Web3.js', 'Machine Learning']

  return (
    <section id="about" className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 relative">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 font-mono text-xs sm:text-sm mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-px bg-gray-400"></span>
            <span>GET TO KNOW ME</span>
            <span className="w-6 sm:w-8 h-px bg-gray-400"></span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Enhanced profile section */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full h-full" style={{ minHeight: 'clamp(320px, 80vw, 500px)' }}>
              {/* Skill badges in orbit */}

              {/* Avatar image with orbital skills */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-blue-200 dark:border-blue-500 shadow-lg sm:shadow-2xl transform transition-transform duration-500 hover:scale-105">
                  <img 
                    src={avatar} 
                    alt="Jyotiska Biswas" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Radial gradient overlay - inner black 50% to outer transparent */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{
                    background: 'radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)'
                  }}></div>
                  
                  {/* Gradient overlay on avatar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Enhanced content section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-5">
                I'm a driven <span className="font-bold text-blue-600 dark:text-blue-400">3rd-year IT student</span> at Kalyani Government Engineering College, 
                focused on building real-world solutions through hackathons and competitive programming. My journey combines academic excellence with 
                practical experience in full-stack development and AI/ML technologies.
              </p>
              
              {/* <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                I specialize in <span className="font-bold text-purple-600 dark:text-purple-400">full-stack development</span>, <span className="font-bold text-green-600 dark:text-green-400">machine learning</span>, and <span className="font-bold text-blue-600 dark:text-blue-400">blockchain</span>, 
                with expertise in Python, JavaScript/React, Flask, TensorFlow, and Web3 technologies. I'm passionate about creating innovative solutions that solve real problems and make an impact.
              </p> */}
            </div>

            {/* Enhanced stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative p-3 sm:p-4 lg:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-md hover:shadow-lg sm:hover:shadow-xl group ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}

                >
                  <div className="text-center">
                    <div className="mb-1 sm:mb-2 group-hover:animate-bounce flex justify-center">
                      {stat.icon === 'rocket' && <RocketIcon className={`w-6 sm:w-8 h-6 sm:h-8 ${stat.color}`} />}
                      {stat.icon === 'star' && <StarIcon className={`w-6 sm:w-8 h-6 sm:h-8 ${stat.color}`} />}
                      {stat.icon === 'brain' && <BrainIcon className={`w-6 sm:w-8 h-6 sm:h-8 ${stat.color}`} />}
                    </div>
                    <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1 sm:mb-2 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Enhanced code snippet */}
            <div className={`bg-gray-900 dark:bg-gray-950 border border-gray-700 rounded-xl sm:rounded-2xl p-3 sm:p-6 font-mono text-xs sm:text-sm shadow-lg sm:shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ animationDelay: '1200ms' }}>
              <div className="flex items-center mb-3 sm:mb-4 flex-wrap gap-2">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <span className="ml-2 sm:ml-4 text-gray-400 text-xs truncate">~/developer/jyotiska-biswas/about.json</span>
              </div>
              <div className="text-gray-300 space-y-1 sm:space-y-2 leading-relaxed overflow-x-auto">
                <div className="flex"><span className="text-blue-400 mr-1 sm:mr-2">{`{`}</span></div>
                <div className="ml-2 sm:ml-4 flex flex-wrap">
                  <span className="text-green-400">"location":</span> 
                  <span className="text-yellow-300 ml-1 sm:ml-2">"Barrackpore, Kolkata, India"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-2 sm:ml-4 flex flex-wrap">
                  <span className="text-green-400">"education":</span> 
                  <span className="text-yellow-300 ml-1 sm:ml-2 break-words">"B.Tech IT, KGEC (2023-2027)"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-2 sm:ml-4 flex flex-wrap">
                  <span className="text-green-400">"interests":</span> 
                  <span className="text-purple-300 ml-1 sm:ml-2">"AI/ML", "Full-Stack", "Blockchain", "DSA"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-2 sm:ml-4 flex flex-wrap">
                  <span className="text-green-400">"skills":</span> 
                  <span className="text-purple-300 ml-1 sm:ml-2">"Python", "React", "Flask", "TensorFlow", "Web3"</span><span className="text-gray-500">,</span>
                </div>
                <div className="ml-2 sm:ml-4 flex flex-wrap">
                  <span className="text-green-400">"status":</span> 
                  <span className="text-green-300 ml-1 sm:ml-2 animate-pulse">"Available for opportunities"</span>
                </div>
                <div className="flex"><span className="text-blue-400">{`}`}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default About