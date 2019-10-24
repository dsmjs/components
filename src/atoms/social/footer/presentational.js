import React from 'react';
import {string} from 'prop-types';
import Icon from 'react-simple-icons';
import {useHover} from 'react-use';
import layoutStyles from '../../../layoutStyles.json';

const listStyles = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  paddingRight: layoutStyles.innerGutterWidth,
  margin: 0
};
const listItemStyles = {padding: '0 0 0 0.5em', height: 32};
const labelStyles = {display: 'none'};
const iconSize = 32;

export default function SocialIcons({color}) {
  const iconColor = color || '#000';
  const TwitterIcon = hovered => <Icon fill={hovered ? '#ccc' : iconColor} size={iconSize} name="twitter" />;
  const GithubIcon = hovered => <Icon fill={hovered ? '#ccc' : iconColor} size={iconSize} name="github" />;
  const [hoverableTwitterIcon] = useHover(TwitterIcon);
  const [hoverableGithubIcon] = useHover(GithubIcon);

  return (
    <ul css={listStyles}>
      <li css={listItemStyles}>
        <a href="https://twitter.com/dsmjs">
          {hoverableTwitterIcon}
          <span css={labelStyles}>Twitter</span>
        </a>
      </li>
      <li css={listItemStyles}>
        <a href="https://github.com/dsmjs">
          {hoverableGithubIcon}
          <span css={labelStyles}>GitHub</span>
        </a>
      </li>
    </ul>
  );
}

SocialIcons.propTypes = {color: string};
