import React from 'react';
import PropTypes from 'prop-types';

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

/**
 * Type check
 */
SkillComponent.propsType = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

export default SkillComponent;
