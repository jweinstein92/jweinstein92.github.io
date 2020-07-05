import React from 'react';

import styles from './projects.module.scss';
import projects from '../constants/projects';

function Projects() {
  return (
    <div className={styles.projects}>
      {projects.map(v => (
        <div key={v.title} className={styles['image-container']}>
          <img src={`${process.env.PUBLIC_URL}${v.image}`} />
          <div className={styles.overlay}>
            <span className={styles.title}>{v.title}</span>
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
  );
}

export default Projects;