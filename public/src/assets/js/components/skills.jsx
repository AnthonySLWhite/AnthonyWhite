// ----- Package Imports ----- //
import React, { Component, Fragment } from 'react';
// ----- File Imports ----- //
import skills from '../temp/api.sim';
// ----- End Imports ----- //

const SkillsGenerator = skills => {
  const skillSetGenerator = skills => {
    const renderedSkillsSet = [];
    for (const key in skills) {
      if (skills.hasOwnProperty(key)) {
        renderedSkillsSet.push(<button>{key}</button>);
      }
    }
    return renderedSkillsSet;
  };

  const skillListGenerator = skills => {
    const renderedSkills = [];
    for (const key in skills) {
      if (skills.hasOwnProperty(key)) {
        const arr = skills[key];
        const skill_set = [];
        arr.forEach(e => {
          skill_set.push(
            <div>
              <span className="skills-name">{e[0]}</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={e[1]}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${e[1]}%` }}
                >
                  {e[1]}%
                </div>
              </div>
            </div>,
          );
        });
        renderedSkills.push(
          <div className={key}>{skill_set}</div>,
        );
      }
    }
    return renderedSkills;
  };
  const renderedSkills = (
    <div className="skills">
      <div className="skill-set">
        {skillSetGenerator(skills)}
      </div>
      <div className="skill-list">
        {skillListGenerator(skills)}
      </div>
    </div>
  );
  return renderedSkills;
};

export default class Skills extends Component {
  render() {
    return <Fragment>{SkillsGenerator(skills)}</Fragment>;
  }
}
