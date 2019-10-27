import React from 'react';
import {shape} from 'prop-types';
import Link from 'gatsby-link';
import layoutStyles from '../../../layoutStyles.json';

const listItemStyles = {padding: '0.5em', paddingLeft: 0};

export default function SiteNavigation({linkStyles}) {
  const enhancedLinkStyles = {
    fontWeight: 700,
    textDecoration: 'none',
    ':hover': {textDecoration: 'underline'},
    ...linkStyles
  };

  return (
    <ol css={{listStyle: 'none', display: 'flex', margin: 0, paddingLeft: layoutStyles.innerGutterWidth}}>
      <li css={listItemStyles}><Link css={enhancedLinkStyles} to="/">Home</Link></li>
      <li css={listItemStyles}>
        <Link css={enhancedLinkStyles} to="/archive">Past Meetings</Link>
      </li>
    </ol>
  );
}

SiteNavigation.propTypes = {linkStyles: shape()};
SiteNavigation.defaultProps = {linkStyles: {}};
