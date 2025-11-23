import React from 'react';
import skills from '../constants/skills';
import styles from "./skills.module.scss";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.frontend}>
        {skills.frontend.map(skill => (
          <div className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
      <div className={styles.backend}>
        {skills.backend.map(skill => (
          <div className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
