import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-pulse-glow animate-float">
              <span className="text-white text-4xl font-bold">MK</span>
            </div>
            
            {/* Name and Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
              Meena Kannan
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-6 animate-fade-in-up animation-delay-300">
              Lead Software Engineer
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
              Passionate about building scalable applications with 9+ years of experience in Java, Spring Boot, Angular, AWS, and cloud technologies. Based in Singapore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
              <Link
                to="/skills"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View My Skills
              </Link>
              <Link
                to="/experience"
                className="px-8 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                See My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 mb-2">9+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-green-400 mb-2">2M+</div>
              <div className="text-slate-300">Users Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Java', 'Spring Boot', 'Angular', 'React', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'TypeScript'].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-blue-500/50 hover:text-white transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio


