import React from 'react';
import {string} from 'prop-types';
import glamorous from 'glamorous';
import styles from '../styles.json';

const SponsorBarDiv = glamorous.div({
  ...styles,
  background: '#6C9380'
});

export default function SponsorBar({sponsor}) {
  return <SponsorBarDiv>{sponsor}</SponsorBarDiv>;
}

SponsorBar.propTypes = {sponsor: string.isRequired};
