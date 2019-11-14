import React from 'react';
import {string} from 'prop-types';
import styles from '../styles';

const sponsorBarStyles = {
  ...styles,
  background: '#6C9380'
};

export default function SponsorBar({sponsor}) {
  return <div css={sponsorBarStyles}>{sponsor}</div>;
}

SponsorBar.propTypes = {sponsor: string.isRequired};
