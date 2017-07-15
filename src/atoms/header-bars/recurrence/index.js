import React from 'react';
import styles from '../styles.json';

const style = {
  ...styles,
  background: '#AD5472'
};

export default function RecurrenceBar() {
  return <div style={style}>Second Tuesday every month</div>;
}
