import React from 'react';
import styles from '../styles.json';

const style = {
  ...styles,
  background: '#6C9380'
};

export default function SponsorBar({sponsor}) {
  return <div style={style}>{sponsor}</div>;
}
