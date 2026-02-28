const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Smart India Hackathon 2025",
      period: "2025",
      location: "India",
      description: "Built an AI-based FRA system for transformer health monitoring. Developed a Random Forest model trained on synthetic ideal-condition data for fault diagnostics, advancing grid reliability.",
      technologies: ["Python", "Flask", "React", "Scikit-learn", "AI/ML"],
      achievements: [
        "Finalist in Smart India Hackathon 2025 — Power Grid track",
        "Designed AI-driven transformer fault-diagnostics system",
        "Implemented multi-source data ingestion and baseline comparison algorithms"
      ]
    },
    {
      title: "Frontend / Web3 Developer",
      company: "Hack4Bengal 2024",
      period: "2024",
      location: "Remote",
      description: "Developed frontend and wallet integration for CrowdFundX, a decentralized crowdfunding platform. Implemented MetaMask connectivity and blockchain transaction handling.",
      technologies: ["React", "Ethers.js", "MetaMask", "Web3.js", "Solidity"],
      achievements: [
        "Built responsive UI for decentralized crowdfunding platform",
        "Integrated wallet connectivity and transaction management",
        "Deployed on Avalanche Fuji Testnet with full Web3 functionality"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "FrostHack 2024",
      period: "2024",
      location: "Remote",
      description: "Built UI and search workflows for a location-based healthcare discovery platform. Created responsive interface for finding doctors and medicines with real-time availability.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Flask"],
      achievements: [
        "Developed location-based search functionality with real-time updates",
        "Integrated healthcare provider discovery and booking systems",
        "Built responsive UI handling complex healthcare workflows"
      ]
    },
    {
      title: "Open Source Contributor",
      company: "SkillzzyFi (StatusCode 2)",
      period: "2024",
      location: "Remote",
      description: "Contributed to frontend and backend modules of a decentralized skill exchange DApp. Implemented core features via GitHub pull requests and maintained code quality.",
      technologies: ["React", "Node.js", "Flask", "Solidity", "Web3.js"],
      achievements: [
        "Contributed to decentralized skill exchange platform",
        "Implemented frontend-backend integration and wallet connectivity",
        "Delivered content discovery UI and smart contract interactions"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 sm:px-6 lg:px-8 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            Project Engagements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            My hands-on contributions to hackathons, competitions, and collaborative projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600 dark:bg-blue-400"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
              
              {/* Content card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-surface border border-border-color rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-text-primary">{exp.title}</h3>
                      <span className="text-primary font-medium">{exp.period}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-text-secondary">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden md:inline mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start">
                          <span className="text-secondary mr-2 mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Experience