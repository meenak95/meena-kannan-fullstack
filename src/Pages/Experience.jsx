import React from 'react'
import { projectsData } from '@/components/skills/SkillsData'

function Experience() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {projectsData.map(project => (
          <div key={project.id} className="rounded-md border border-slate-800 p-4">
            <div className="text-lg font-medium">{project.title}</div>
            <div className="text-sm text-slate-400">{project.company} • {project.duration}</div>
            <p className="mt-2 text-slate-300">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience


