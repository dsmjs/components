import React from 'react';
import {string} from 'prop-types';
import Icon from 'react-simple-icons';
import {useHover} from 'react-use';

const iconSize = 16;
const listStyles = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  fontSize: 20
};
const listItemStyles = {
  padding: '0 0 0 .5em',
  height: iconSize,
  span: {
    paddingLeft: '.25em'
  }
};

export default function SpeakerSocialIcons({twitter, github}) {
  const nonHoveredIconColor = '#888';
  const TwitterIcon = hovered => (
    <Icon fill={hovered ? '#1DA1F2' : nonHoveredIconColor} size={iconSize} name="twitter" />
  );
  const GithubIcon = hovered => <Icon fill={hovered ? '#000' : nonHoveredIconColor} size={iconSize} name="github" />;
  const [hoverableTwitterIcon] = useHover(TwitterIcon);
  const [hoverableGithubIcon] = useHover(GithubIcon);

  return (
    <ul css={listStyles}>
      {twitter && (
        <li css={listItemStyles}>
          <a href={`https://twitter.com/${twitter}`}>
            {hoverableTwitterIcon}
            <span>{twitter}</span>
          </a>
        </li>
      )}
      {github && (
        <li css={listItemStyles}>
          <a href={`https://github.com/${github}`}>
            {hoverableGithubIcon}
            <span>{github}</span>
          </a>
        </li>
      )}
    </ul>
  );
}

SpeakerSocialIcons.propTypes = {
  twitter: string,
  github: string
};
