import { CodeIcon, CogIcon, CloudIcon, TrophyIcon, CertificateIcon, StarIcon } from './Icons'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "code",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "Shell", level: 75 }
      ]
    },
    {
      title: "Frontend",
      icon: "cog",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Vite", level: 85 },
        { name: "Tailwind CSS", level: 87 },
        { name: "HTML/CSS", level: 90 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: "cog",
      skills: [
        { name: "Flask", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 78 },
        { name: "WebSockets", level: 80 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: "star",
      skills: [
        { name: "TensorFlow", level: 82 },
        { name: "ScikitLearn", level: 82 },
        { name: "OpenCV", level: 80 },
        { name: "NumPy", level: 88 },
        { name: "Pandas", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: "cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 78 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "cloud",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 85 },
        { name: "Jupyter", level: 85 },
        { name: "Figma", level: 78 }
      ]
    }
  ]

  const SkillBar = ({ skill }) => (
    <div className="mb-2 sm:mb-3">
      <div className="flex justify-between items-center mb-1 sm:mb-1.5 gap-2">
        <span className="text-text-primary font-medium text-xs sm:text-sm truncate flex-1">{skill.name}</span>
        <span className="text-text-secondary text-xs font-semibold flex-shrink-0 bg-primary/10 px-2 py-0.5 rounded-full">{skill.level}%</span>
      </div>
      <div className="w-full bg-surface-elevated rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-text-primary">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-text-secondary text-sm sm:text-base mt-4 sm:mt-5 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-background border border-border-color rounded-lg p-6 sm:p-4 lg:p-5 hover:shadow-lg sm:hover:shadow-xl hover:border-primary/60 hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:bg-surface transition-all duration-300 group cursor-pointer overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
              <div className="text-center mb-4 sm:mb-5">
                <div className="mb-2 sm:mb-3 flex justify-center">
                  {category.icon === 'code' && <CodeIcon className="w-6 sm:w-8 h-6 sm:h-8 text-primary group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />}
                  {category.icon === 'cog' && <CogIcon className="w-6 sm:w-8 h-6 sm:h-8 text-secondary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />}
                  {category.icon === 'cloud' && <CloudIcon className="w-6 sm:w-8 h-6 sm:h-8 text-accent group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300" />}
                  {category.icon === 'star' && <StarIcon className="w-6 sm:w-8 h-6 sm:h-8 text-primary group-hover:scale-125 group-hover:animate-spin transition-all duration-300" style={{animationDuration: '2s'}} />}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-6 sm:mb-8">Certifications & Achievements</h3>
          
          {/* Featured Achievement - SIH 2025 */}
          <div className="mb-8 sm:mb-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <a
              href="https://drive.google.com/file/d/1sqLNROo3RXfyjY43bjPZx1NnjABzWlck/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className="relative bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-red-400/10 dark:from-yellow-500/20 dark:via-orange-500/20 dark:to-red-500/20 border-2 border-yellow-500/50 dark:border-yellow-400/50 rounded-lg p-6 sm:p-8 hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
                {/* Star Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <svg className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4a2 2 0 012-2h4a1 1 0 010 2H8v10h8V4h-2a1 1 0 110-2h2a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-text-primary mb-2 sm:mb-3 text-base sm:text-lg">Smart India Hackathon 2025 Finalist</h4>
                  <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">National Level Competition - Power Grid Track</p>
                  <p className="text-yellow-600 dark:text-yellow-400 text-xs font-semibold">🏆 Featured Achievement</p>
                </div>
              </div>
            </a>
          </div>

          {/* Other Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            <a
              href="https://drive.google.com/file/d/1K6T8vxFwEN3lStiwFM9Jeap4mjcPqeTC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border-color rounded-lg p-5 sm:p-6 hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">
                <TrophyIcon className="w-7 h-7 text-yellow-500" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2 sm:mb-3 text-sm">WBJEE AIR 7431</h4>
              <p className="text-text-secondary text-xs mb-3 sm:mb-4">West Bengal Joint Entrance Examination</p>
              <p className="text-yellow-500 text-xs mt-2 font-medium">View Certificate →</p>
            </a>
            <a
              href="https://www.udemy.com/certificate/UC-d6f72e20-3baf-44ff-8244-2c1fff0cabb8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border-color rounded-lg p-5 sm:p-6 hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">
                <CertificateIcon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2 sm:mb-3 text-sm">Machine Learning with R Studio</h4>
              <p className="text-text-secondary text-xs mb-3 sm:mb-4">Complete ML Course - Udemy</p>
              <p className="text-primary text-xs mt-2 font-medium">View Certificate →</p>
            </a>
            <a
              href="https://www.udemy.com/certificate/UC-73e05f8c-78bf-4bbc-b3b4-c26d2b3c59f0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border-color rounded-lg p-5 sm:p-6 hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">
                <TrophyIcon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2 sm:mb-3 text-sm">Python Bootcamp</h4>
              <p className="text-text-secondary text-xs mb-3 sm:mb-4">Master Python Visually - Udemy</p>
              <p className="text-accent text-xs mt-2 font-medium">View Certificate →</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills