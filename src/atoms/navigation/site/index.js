import React from 'react';
import {shape} from 'prop-types';

const listItemStyles = {padding: '0.5em'};

export default function SiteNavigation({linkStyles}) {
  return (
    <ol style={{listStyle: 'none', display: 'flex', margin: 0}}>
      <li style={listItemStyles}><a style={linkStyles} href="/">Home</a></li>
      <li style={listItemStyles}><a style={linkStyles} href="/archive">Past Meetings</a></li>
    </ol>
  );
}

SiteNavigation.propTypes = {linkStyles: shape()};
SiteNavigation.defaultProps = {linkStyles: {}};

