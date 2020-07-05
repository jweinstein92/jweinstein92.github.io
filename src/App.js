import React from 'react';

import styles from './app.module.scss';
import SectionHeader from './components/SectionHeader';
import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.background}>
          <img src={`${process.env.PUBLIC_URL}/images/norway.jpg`} />
          <div className={styles.profile}>
            <div className={styles.card}>
              <img src={`${process.env.PUBLIC_URL}/images/profile.png`} />
              <h1>Josh Weinstein</h1>
              <span>Software | Web | Travel</span>
            </div>
          </div>
        </div>
        <div className={styles.sections}>
          <div className={styles['section-container']}>
            <div className={styles.section}>
              <SectionHeader title="I am a software engineer with a passion for UI/UX" />
              <Welcome />
            </div>
          </div>
          <div className={styles['section-container']}>
            <div className={styles.section}>
              <SectionHeader title="I have worked with large and small" />
              <Experience />
            </div>
          </div>
          <div className={styles['section-container']}>
            <div className={styles.section}>
              <SectionHeader title="I have played with many technologies and love to learn more" />
              <Projects />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
