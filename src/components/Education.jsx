const Education = () => {
    const education = [
        {
            degree: "Bachelor of Technology (B.Tech) in Information Technology",
            institution: "Kalyani Government Engineering College",
            period: "2023 - 2027",
            location: "West Bengal, India",
            description: "Comprehensive IT program with focus on software development, machine learning, and system design. Currently in 3rd year with strong academic performance.",
            coursework: [
                "Data Structures & Algorithms",
                "Machine Learning",
                "Web Technologies",
                "Database Management Systems",
                "Computer Networks",
                "Software Engineering"
            ],
            gpa: "Currently pursuing",
            achievements: [
                "Smart India Hackathon 2025 Finalist (Power Grid Track)",
                "Active participant in competitive programming",
                "Multiple hackathon participations (Hack4Bengal 2024, FrostHack 2024, StatusCode 2)",
                "Built real-world projects with modern tech stack"
            ]
        },
        {
            degree: "Higher Secondary (Class XII)",
            institution: "Barrackpore Government High School",
            period: "2021 - 2022",
            location: "West Bengal, India",
            description: "Secondary education with strong foundational knowledge in science and mathematics.",
            coursework: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "Biology"
            ],
            gpa: "Completed",
            achievements: [
                "WBJEE AIR 7431 (West Bengal Joint Entrance Examination)",
                "Strong foundation in science and quantitative reasoning"
            ]
        }
    ]

    return (
        <section id="education" className="py-20 px-6 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
                    <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
                        My academic background and educational achievements
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {education.map((edu, index) => (
                        <div key={index}>
                            <div className="bg-surface border border-border-color rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30 h-full">
                                {/* Header */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">{edu.degree}</h3>
                                        <span className="text-primary font-medium text-base sm:text-lg mt-1 lg:mt-0">{edu.period}</span>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center text-text-secondary mb-2">
                                        <span className="font-medium text-base sm:text-lg">{edu.institution}</span>
                                        <span className="hidden md:inline mx-2">•</span>
                                        <span className="text-sm sm:text-base">{edu.location}</span>
                                    </div>
                                    {edu.gpa && (
                                        <div className="mt-2">
                                            <span className="text-text-secondary text-sm sm:text-base">GPA: </span>
                                            <span className="text-primary font-semibold text-sm sm:text-base">{edu.gpa}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-text-secondary mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{edu.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    {/* Relevant Coursework */}
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-3">Relevant Coursework</h4>
                                        <div className="space-y-2">
                                            {edu.coursework.map((course, i) => (
                                                <div key={i} className="flex items-center text-text-secondary">
                                                    <span className="text-secondary mr-2 flex-shrink-0">▸</span>
                                                    <span className="text-xs sm:text-sm">{course}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-3">Achievements</h4>
                                        <div className="space-y-2">
                                            {edu.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start text-text-secondary">
                                                    <span className="text-secondary mr-2 mt-1 flex-shrink-0">★</span>
                                                    <span className="text-xs sm:text-sm">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
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

export default Education