import React from 'react';
import {string} from 'prop-types';
import Icon from 'react-simple-icons';
import layoutStyles from '../../layoutStyles.json';

const listStyles = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  paddingRight: layoutStyles.innerGutterWidth,
  margin: 0
};
const listItemStyles = {padding: '0 0 0 0.5em', height: 32};
const labelStyles = {display: 'none'};

export default function SocialIcons({color}) {
  const iconColor = color || '#000';

  return (
    <ul style={listStyles}>
      <li style={listItemStyles}>
        <a href="https://twitter.com/dsmjs">
          <Icon fill={iconColor} size={32} name="twitter" />
          <span style={labelStyles}>Twitter</span>
        </a>
      </li>
      <li style={listItemStyles}>
        <a href="https://github.com/dsmjs">
          <Icon fill={iconColor} size={32} name="github" />
          <span style={labelStyles}>GitHub</span>
        </a>
      </li>
    </ul>
  );
}

SocialIcons.propTypes = {color: string};
