import React from 'react';
import {string} from 'prop-types';
import styles from '../styles';

const locationBarStyles = {
  ...styles,
  background: '#F07C6C'
};

export default function LocationBar({location}) {
  return <div css={locationBarStyles}>{location}</div>;
}

LocationBar.propTypes = {location: string.isRequired};
