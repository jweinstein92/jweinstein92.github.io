import React from 'react';

import styles from './experience.module.scss';
import experience from "../constants/experience";
import education from '../constants/education';

function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Professional</h2>
      <div className={styles.professional}>
        {experience.map(v => (
          <div key={v.company} className={styles.piece}>
            <div>
              <div className={styles.company}>{v.company}</div>
              <div className={styles.date}>{v.date}</div>
            </div>
            <div>
              <div className={styles.position}>{v.title}</div>
              <div className={styles.description} dangerouslySetInnerHTML={{__html: v.description }} />
              {v.links.map(l => (
                <div key={l.href}>
                  <a href={l.href} target="_blank" title={l.label} className={styles.link}><i className="fa fa-link" />{l.label}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h2>Education</h2>
      <div className={styles.education}>
        {education.map(v => (
          <div key={v.university} className={styles.piece}>
            <div>
              <div className={styles.university}>{v.university}</div>
              <div className={styles.date}>{v.date}</div>
            </div>
            <div>
              <div className={styles.degree}>{v.degree}</div>
              <div className={styles.description} dangerouslySetInnerHTML={{__html: v.description }} />
              {v.links.map(l => (
                <div key={l.href}>
                  <a href={l.href} target="_blank" title={l.label} className={styles.link}><i className="fa fa-link" />{l.label}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;