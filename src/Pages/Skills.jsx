import React from 'react'
import { skillsData } from '@/components/skills/SkillsData'

function Skills() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map(skill => (
          <li key={skill.id} className="rounded-md border border-slate-800 p-4">
            <div className="font-medium">{skill.name}</div>
            <div className="text-sm text-slate-400">{skill.description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills


