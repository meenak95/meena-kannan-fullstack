import React, { useState, useEffect } from 'react'

function Experience() {
  const [visibleItems, setVisibleItems] = useState([])

  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Lead Software Engineer",
      duration: "2020 - Present",
      location: "Singapore",
      description: "Leading a team of 8 developers in building scalable microservices architecture using Java, Spring Boot, and AWS. Implemented CI/CD pipelines and improved system performance by 40%.",
      technologies: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
      achievements: [
        "Led migration of monolithic application to microservices",
        "Reduced deployment time from 2 hours to 15 minutes",
        "Mentored 5 junior developers"
      ]
    },
    {
      id: 2,
      company: "Digital Innovations Ltd.",
      position: "Senior Software Engineer",
      duration: "2018 - 2020",
      location: "Singapore",
      description: "Developed and maintained enterprise-level applications using Angular, React, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["Angular", "React", "Node.js", "TypeScript", "MongoDB", "Redis"],
      achievements: [
        "Built responsive web applications serving 100K+ users",
        "Implemented real-time features using WebSockets",
        "Improved code coverage from 60% to 90%"
      ]
    },
    {
      id: 3,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2016 - 2018",
      location: "Singapore",
      description: "Full-stack development using modern web technologies. Built RESTful APIs and responsive frontend applications from scratch.",
      technologies: ["JavaScript", "Python", "Django", "Vue.js", "MySQL", "Git"],
      achievements: [
        "Developed MVP that secured $2M funding",
        "Built automated testing suite",
        "Optimized database queries reducing load time by 50%"
      ]
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(experiences.map(exp => exp.id))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            My Experience
          </h1>
          <p className="text-xl text-slate-300 animate-fade-in-up animation-delay-300">
            Professional journey and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 ${
                visibleItems.includes(exp.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-sm text-slate-400 mt-2 md:mt-0">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs hover:bg-blue-600 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/30 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <p className="text-slate-300 mb-6">Let's discuss how I can help bring your ideas to life.</p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience


