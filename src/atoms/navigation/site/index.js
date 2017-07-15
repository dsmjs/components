import React from 'react';

const listItemStyles = {padding: '0.5em'};

export default function SiteNavigation({linkStyles = {}}) {
  return (
    <ol style={{listStyle: 'none', display: 'flex'}}>
      <li style={listItemStyles}><a style={linkStyles} href="/">Home</a></li>
      <li style={listItemStyles}><a style={linkStyles} href="/archive">Past Meetings</a></li>
    </ol>
  );
}
