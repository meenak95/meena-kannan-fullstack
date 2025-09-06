import React, { useState, useEffect } from 'react'
import { skillsData } from '@/components/skills/SkillsData'

function Skills() {
  const [visibleSkills, setVisibleSkills] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'programming', 'frontend', 'backend', 'cloud', 'database', 'devops', 'testing']
  const categoryLabels = {
    all: 'All Skills',
    programming: 'Programming Languages',
    frontend: 'Frontend Technologies',
    backend: 'Backend Technologies',
    cloud: 'Cloud Technologies',
    database: 'Database Technologies',
    devops: 'DevOps Tools',
    testing: 'Testing Technologies'
  }

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(filteredSkills.map(skill => skill.id))
    }, 100)
    return () => clearTimeout(timer)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            My Skills
          </h1>
          <p className="text-xl text-slate-300 animate-fade-in-up animation-delay-300">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 ${
                visibleSkills.includes(skill.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="text-sm text-blue-400 font-medium">{skill.proficiency}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              
              <p className="text-slate-300 text-sm mb-3">{skill.description}</p>
              
              <div className="flex justify-between text-xs text-slate-400">
                <span>{skill.years_experience} years experience</span>
                <span className="capitalize">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">{skillsData.length}</div>
            <div className="text-slate-300">Total Skills</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {Math.round(skillsData.reduce((acc, skill) => acc + skill.proficiency, 0) / skillsData.length)}%
            </div>
            <div className="text-slate-300">Average Proficiency</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {Math.max(...skillsData.map(skill => skill.years_experience))}
            </div>
            <div className="text-slate-300">Years of Experience</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills


