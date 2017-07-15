import React from 'react';
import styles from '../styles.json';

const style = {
  ...styles,
  background: '#F07C6C'
};

export default function LocationBar({location}) {
  return <div style={style}>{location}</div>;
}
