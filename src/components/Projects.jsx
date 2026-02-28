import { useState } from 'react'
import {
  ShoppingCartIcon,
  ClipboardIcon,
  CloudIcon,
  PlugIcon,
  RobotIcon,
  CreditCardIcon,
  TargetIcon,
  GlobeIcon,
  PaletteIcon,
  CogIcon,
  SmartphoneIcon,
  BrainIcon,
  SearchIcon,
  FolderIcon,
  ExternalLinkIcon,
  RocketIcon,
  LockIcon,
  StarIcon,
  GitHubIcon
} from './Icons'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "HTML Hosting Service",
      description: "Secure, user-friendly web application for hosting and sharing HTML pages with built-in authentication. Features personalized dashboard, instant sharing, and modern responsive UI.",
      icon: "globe",
      technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "JSON"],
      category: "fullstack",
      github: "https://github.com/jyotiska222/HTML-Hostng",
      live: "https://htmlhosting.pythonanywhere.com/",
      featured: true,
      difficulty: "Intermediate",
      duration: "1 month"
    },
    {
      id: 2,
      title: "Emotion Detection with Camera",
      description: "Real-time facial emotion recognition system using OpenCV and TensorFlow. Trained CNN model on FER-2013 dataset to classify seven basic emotions with live webcam integration.",
      icon: "robot",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "FER-2013"],
      category: "ml",
      github: "https://github.com/jyotiska222",
      live: null,
      featured: true,
      difficulty: "Advanced",
      duration: "2 months"
    },
    {
      id: 3,
      title: "Unknown Chat Bot",
      description: "Anonymous Telegram-based chatbot with live messaging, admin dashboard for monitoring, banning users, and flagging content using Flask and Socket.IO.",
      icon: "robot",
      technologies: ["Flask", "Socket.IO", "Telegram Bot API", "Python"],
      category: "backend",
      github: "https://github.com/jyotiska222",
      live: "https://t.me/unknwn_chat_bot",
      featured: true,
      difficulty: "Intermediate",
      duration: "1 month"
    },
    {
      id: 4,
      title: "Medchain-AI",
      description: "Healthcare platform with React + Vite frontend for symptom input, wallet login, and diagnosis reporting. Backend Flask microservice uses symptom datasets for disease inference.",
      icon: "clipboard",
      technologies: ["React", "Vite", "Flask", "MetaMask", "Blockchain"],
      category: "ml",
      github: "https://github.com/jyotiska222",
      live: null,
      featured: true,
      difficulty: "Advanced",
      duration: "2 months"
    },
    {
      id: 5,
      title: "CrowdFundX - Hack4Bengal 2024",
      description: "Decentralized crowdfunding platform on Avalanche Fuji Testnet. Built frontend with Ethers.js and MetaMask integration for wallet-based campaign creation and donations.",
      icon: "credit-card",
      technologies: ["React", "Ethers.js", "MetaMask", "Avalanche", "Blockchain"],
      category: "frontend",
      github: "https://github.com/jyotiska222",
      live: "https://crowdfundx.vercel.app/",
      featured: true,
      difficulty: "Advanced",
      duration: "48 hours"
    },
    {
      id: 6,
      title: "Location-Based Healthcare Platform",
      description: "Centralized medical platform for locating medicines and booking doctors. Built user interface with search functionality for doctor availability and pharmacy inventory by location and time.",
      icon: "clipboard",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Flask", "Python"],
      category: "fullstack",
      github: "https://github.com/jyotiska222",
      live: null,
      featured: false,
      difficulty: "Intermediate",
      duration: "48 hours"
    },
    {
      id: 9,
      title: "Custom Cipher Encryption-Decryption",
      description: "Python program implementing a custom cipher encryption and decryption algorithm based on a dynamically generated 62-column matrix with keyword-based shifted sequences.",
      icon: "plug",
      technologies: ["Python", "Cryptography", "Algorithm" , "Matrix Operations"],
      category: "backend",
      github: "https://github.com/jyotiska222/Custom-Cipher-Encryption-Decryption",
      live: null,
      featured: false,
      difficulty: "Advanced",
      duration: "2 weeks"
    },
    {
      id: 10,
      title: "Retro Scientific Calculator",
      description: "A retro-style scientific calculator with advanced mathematical functions, including trigonometry, logarithms, permutations, and combinations. Features vintage UI and history tracking.",
      icon: "cog",
      technologies: ["Flutter", "Dart", "Algorithms", "UI/UX"],
      category: "mobile",
      github: "https://github.com/jyotiska222/Retro-Scientific-Calculator",
      live: null,
      featured: false,
      difficulty: "Intermediate",
      duration: "3 weeks"
    },
    {
      id: 13,
      title: "Handwritten Digit Recognition",
      description: "AI system that identifies handwritten digits through image upload or interactive writing pad. Uses trained CNN model on MNIST dataset for accurate digit classification.",
      icon: "robot",
      technologies: ["Python", "CNN", "MNIST", "Image Processing", "AI"],
      category: "ml",
      github: "https://github.com/jyotiska222/DigitRecognitionModel",
      live: null,
      featured: false,
      difficulty: "Advanced",
      duration: "1 month"
    },
    {
      id: 7,
      title: "UrjaLytics",
      description: "AI-driven FRA transformer fault-diagnostics system using multi-source data ingestion, Random Forest models trained on synthetic data, and baseline/sister-transformer comparison delivered via Flask APIs and React dashboard.",
      icon: "robot",
      technologies: ["Python", "Flask", "React", "Scikit-learn", "Pandas", "NumPy"],
      category: "ml",
      github: "https://github.com/jyotiska222/UrjaLytics_SIH25190",
      live: null,
      featured: true,
      difficulty: "Advanced",
      duration: "2 months"
    },
    {
      id: 8,
      title: "SkillzzyFi",
      description: "Decentralized skill exchange DApp with frontend-backend integration, wallet connectivity, content discovery UI, and smart contract interaction flows for StatusCode 2 Hackathon.",
      icon: "globe",
      technologies: ["React", "Node.js", "Flask", "Solidity", "Web3.js", "IPFS"],
      category: "fullstack",
      github: "https://github.com/jyotiska222/SkillzzyFi",
      live: null,
      featured: true,
      difficulty: "Advanced",
      duration: "48 hours"
    },
    {
      id: 11,
      title: "Goal Tracker",
      description: "Full-stack productivity platform with OAuth authentication, REST APIs, timezone handling, and production deployment for goal and habit tracking.",
      icon: "target",
      technologies: ["React", "Flask", "MongoDB", "Google OAuth"],
      category: "fullstack",
      github: "https://github.com/jyotiska222/Goal-Tracker",
      live: null,
      featured: true,
      difficulty: "Intermediate",
      duration: "1 month"
    }
    // ,
    // {
    //   id: 14,
    //   title: "Weather Predictor AI Model",
    //   description: "AI model specifically designed to predict weather conditions for Kolkata using machine learning algorithms and historical weather data analysis.",
    //   icon: "cloud",
    //   technologies: ["Python", "Machine Learning", "Weather API", "Data Analysis"],
    //   category: "ml",
    //   github: "https://github.com/jyotiska222/Weather-Predictor-AI-model",
    //   live: null,
    //   featured: false,
    //   difficulty: "Intermediate",
    //   duration: "3 weeks"
    // }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: 'target' },
    { id: 'fullstack', label: 'Full Stack', icon: 'globe' },
    { id: 'frontend', label: 'Frontend', icon: 'palette' },
    { id: 'backend', label: 'Backend', icon: 'cog' },
    { id: 'mobile', label: 'Mobile', icon: 'smartphone' },
    { id: 'ml', label: 'ML/AI', icon: 'brain' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)



  const ProjectCard = ({ project }) => (
    <div className="group relative">
      {/* Card Background with Border */}
      <div className="absolute -inset-0.5 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500 blur-sm group-hover:blur"></div>

      <div className="relative bg-surface border border-border-color rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30">
        {/* Project Header */}
        <div className="h-56 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-surface dark:via-surface-elevated dark:to-accent/10 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-8 w-4 h-4 bg-accent rounded-full animate-bounce delay-150"></div>
            <div className="absolute bottom-8 left-12 w-6 h-6 bg-secondary rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Project Icon */}
          <div className="group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-lg flex justify-center">
            {project.icon === 'shopping-cart' && <ShoppingCartIcon className="w-16 h-16 text-primary" />}
            {project.icon === 'clipboard' && <ClipboardIcon className="w-16 h-16 text-secondary" />}
            {project.icon === 'cloud' && <CloudIcon className="w-16 h-16 text-accent" />}
            {project.icon === 'plug' && <PlugIcon className="w-16 h-16 text-primary" />}
            {project.icon === 'robot' && <RobotIcon className="w-16 h-16 text-accent" />}
            {project.icon === 'credit-card' && <CreditCardIcon className="w-16 h-16 text-primary" />}
            {project.icon === 'globe' && <GlobeIcon className="w-16 h-16 text-secondary" />}
            {project.icon === 'target' && <TargetIcon className="w-16 h-16 text-primary" />}
            {project.icon === 'cog' && <CogIcon className="w-16 h-16 text-secondary" />}
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-yellow-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse flex items-center gap-1">
              <StarIcon className="w-3 h-3" />
              Featured
            </div>
          )}

          {/* Difficulty Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1.5 text-white rounded-full text-xs font-semibold shadow-lg ${project.difficulty === 'Beginner' ? 'bg-green-500' :
            project.difficulty === 'Intermediate' ? 'bg-yellow-500' :
              project.difficulty === 'Advanced' ? 'bg-red-500' : 'bg-gray-500'
            }`}>
            {project.difficulty}
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs font-medium flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {project.duration}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6">
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2 transition-all duration-300">
              {project.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-surface-elevated text-text-secondary rounded-full text-xs font-medium border border-border-color hover:bg-surface transition-colors cursor-pointer" title={project.technologies.slice(3).join(', ')}>
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-border-color text-text-secondary rounded-lg sm:rounded-xl hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 text-center text-sm font-semibold flex items-center justify-center gap-2 group/btn"
            >
              <FolderIcon className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
              View Code
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-white rounded-lg sm:rounded-xl transition-all duration-300 text-center text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn"
              >
                <RocketIcon className="w-4 h-4 group-hover/btn:scale-125 transition-transform duration-200" />
                Live Demo
              </a>
            ) : (
              <div className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-elevated text-text-muted rounded-lg sm:rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2 border border-border-color">
                <LockIcon className="w-4 h-4" />
                Private
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 px-6 sm:px-6 lg:px-8 relative min-h-screen">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-5">
            <FolderIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text-primary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-3"></div>
          <p className="text-text-secondary text-base max-w-2xl mx-auto leading-relaxed">
            A curated collection of my recent work showcasing diverse technologies and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg ${activeFilter === filter.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-surface text-text-secondary hover:text-primary border border-border-color hover:border-primary/30'
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="flex">
                {filter.icon === 'target' && <TargetIcon className="w-5 h-5" />}
                {filter.icon === 'globe' && <GlobeIcon className="w-5 h-5" />}
                {filter.icon === 'palette' && <PaletteIcon className="w-5 h-5" />}
                {filter.icon === 'cog' && <CogIcon className="w-5 h-5" />}
                {filter.icon === 'smartphone' && <SmartphoneIcon className="w-5 h-5" />}
                {filter.icon === 'brain' && <BrainIcon className="w-5 h-5" />}
              </span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="mb-6 animate-bounce flex justify-center">
              <SearchIcon className="w-20 h-20 text-text-muted" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">No projects found</h3>
            <p className="text-text-secondary text-lg">Try selecting a different category to explore more projects</p>
          </div>
        )}


      </div>


    </section>
  )
}

export default Projects