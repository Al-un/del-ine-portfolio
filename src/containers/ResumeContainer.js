import React from 'react';
import WorkExpComponent from '../components/portfolio/WorkExpComponent';
import SkillComponent from '../components/portfolio/SkillComponent';
import { works, skills } from '../data/resume';

export default class ResumeContainer extends React.Component {
  render() {
    return (
      <div>
        {/* Specific format here */}
        <div>
          <h3>present</h3>
          <h2>Currently based in Paris and opened to new opportunities.</h2>
        </div>

        {/* Works experience format is different from skills */}
        <h3>work experience</h3>
        {works.map(work => (
          <WorkExpComponent work={work} key={work.title} />
        ))}

        {skills.map(skill => (
          <SkillComponent skill={skill} key={skill.title} />
        ))}
      </div>
    );
  }
}
