import React from 'react';
import styles from "./welcome.module.scss";

function Welcome() {
  const birthday = Date.parse("1992-12-07");
  const ageDifMs = Date.now() - birthday;
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <div className={styles.welcome}>
      <div className={styles.intro}>
        <h2>Hey There!</h2>
        <div>
          I am a software engineer based out of Philadelphia. Professionally, I have worked on some different
          web applications as well as built a revenue generating company with two friends. <br/><br/>
          I am passionate about user interfaces, learning new technologies, travel, photography, food, and beer.
        </div>
      </div>
      <div className={styles.about}>
        <h2>Details</h2>
        <div className={styles.table}>
          <span>Name:</span>
          <span>Josh Weinstein</span>
        </div>
        <div className={styles.table}>
          <span>Age:</span>
          <span>{age}</span>
        </div>
        <div className={styles.table}>
          <span>Location:</span>
          <span>Philadelphia, PA</span>
        </div>
        <div className={styles.table}>
          <span>Profiles:</span>
          <span><a href="https://github.com/jweinstein92" target="_blank" title="Github"><i className="fa fa-github-square" /></a> <a href="https://www.linkedin.com/in/joshweinstein92/" target="_blank" title="LinkedIn"><i className="fa fa-linkedin-square" /></a></span>
        </div>
        <div className={styles.table}>
          <span>Resume:</span>
          <span className={styles.resume}><a href="/Joshua_Weinstein.pdf" target="_blank" title="Resume"><i className="fa fa-file-text" /></a></span>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
