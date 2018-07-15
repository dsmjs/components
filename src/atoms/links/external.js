import React from 'react';
import {string} from 'prop-types';

export default function ExternalLink({to, text}) {
  return <a href={to}>{text}</a>;
}

ExternalLink.propTypes = {
  to: string.isRequired,
  text: string.isRequired
};
