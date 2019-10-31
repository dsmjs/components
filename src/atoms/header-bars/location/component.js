import React from 'react';
import {string} from 'prop-types';
import glamorous from 'glamorous';
import styles from '../styles';

const LocationBarDiv = glamorous.div({
  ...styles,
  background: '#F07C6C'
});

export default function LocationBar({location}) {
  return <LocationBarDiv>{location}</LocationBarDiv>;
}

LocationBar.propTypes = {location: string.isRequired};
