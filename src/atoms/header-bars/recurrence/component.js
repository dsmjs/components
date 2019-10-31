import React from 'react';
import glamorous from 'glamorous';
import styles from '../styles';

const RecurrenceBarDiv = glamorous.div({
  ...styles,
  background: '#AD5472'
});

export default function RecurrenceBar() {
  return <RecurrenceBarDiv>Second Tuesday every month</RecurrenceBarDiv>;
}
