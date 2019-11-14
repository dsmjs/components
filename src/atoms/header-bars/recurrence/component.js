import React from 'react';
import styles from '../styles';

const recurrenceBarStyles = {
  ...styles,
  background: '#AD5472'
};

export default function RecurrenceBar() {
  return <div css={recurrenceBarStyles}>Second Tuesday every month</div>;
}
