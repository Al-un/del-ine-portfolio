import React from 'react';

/**
 * Skills are actually a generic container for a title + list of items
 * @param {*} props
 */
const SkillComponent = props => {
  return (
    <div>
      <h3>{props.skill.title}</h3>

      <ul>
        {props.skill.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillComponent;
