import React from 'react';
import * as PropTypes from "prop-types";
import {Component} from "react";

import styles from './sectionHeader.module.scss';

class SectionHeader extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
