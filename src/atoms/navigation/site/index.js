import React from 'react';
import {shape} from 'prop-types';
import {css} from 'glamor';

const listItemStyles = {padding: '0.5em'};

export default function SiteNavigation({linkStyles}) {
  const enhancedLinkStyles = {
    fontWeight: 700,
    textDecoration: 'none',
    ':hover': {textDecoration: 'underline'},
    ...linkStyles
  };

  return (
    <ol style={{listStyle: 'none', display: 'flex', margin: 0}}>
      <li className={css(listItemStyles)}><a className={css(enhancedLinkStyles)} href="/">Home</a></li>
      <li className={css(listItemStyles)}><a className={css(enhancedLinkStyles)} href="/archive">Past Meetings</a></li>
    </ol>
  );
}

SiteNavigation.propTypes = {linkStyles: shape()};
SiteNavigation.defaultProps = {linkStyles: {}};

