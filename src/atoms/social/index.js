import React from 'react';
import {string} from 'prop-types';
import Icon from 'react-simple-icons';
import layoutStyles from '../../layoutStyles.json';

const listItemStyles = {padding: '0 0 0 0.5em', height: 32};

export default function SocialIcons({color}) {
  const iconColor = color || '#000';

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        paddingRight: layoutStyles.innerGutterWidth,
        margin: 0
      }}
    >
      <li style={listItemStyles}>
        <a href="https://twitter.com/dsmjs"><Icon fill={iconColor} size={32} name="twitter" /></a>
      </li>
      <li style={listItemStyles}>
        <a href="https://github.com/dsmjs"><Icon fill={iconColor} size={32} name="github" /></a>
      </li>
    </ul>
  );
}

SocialIcons.propTypes = {color: string};
