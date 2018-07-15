import React from 'react';
import {string} from 'prop-types';
import Link from 'gatsby-link';

export default function InternalLink({to, text}) {
  return <Link to={to}>{text}</Link>;
}

InternalLink.propTypes = {
  to: string.isRequired,
  text: string.isRequired
};
