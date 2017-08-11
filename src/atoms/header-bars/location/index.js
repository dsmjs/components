import React from 'react';
import glamorous from 'glamorous';
import styles from '../styles.json';

const LocationBarDiv = glamorous.div({
  ...styles,
  background: '#F07C6C'
});

export default function LocationBar({location}) {
  return <LocationBarDiv>{location}</LocationBarDiv>;
}
