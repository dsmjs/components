import React from 'react';
import {string} from 'prop-types';
import Link from 'gatsby-link';
import {invertedLink, link} from '../../styles';

export default function InternalLink({to, variant, children}) {
  return <Link to={to} css={'inverted' === variant ? invertedLink : link}>{children}</Link>;
}

InternalLink.propTypes = {
  to: string.isRequired,
  children: string.isRequired,
  variant: string
};
