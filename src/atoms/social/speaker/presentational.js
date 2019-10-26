import React from 'react';
import {string} from 'prop-types';
import Icon from 'react-simple-icons';
import {useHover} from 'react-use';
import ExternalLink from '../../links/external';

const iconSize = 24;
const listStyles = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  fontSize: 20
};

const listItemStyles = {
  padding: '0 0 0 1em',
  height: iconSize,
  span: {
    paddingLeft: '.25em'
  }
};

const socialItemStyle = {
  display: 'flex',
  alignItems: 'center'
};

export default function SpeakerSocialIcons({twitter, github}) {
  const nonHoveredIconColor = '#888';
  const TwitterIcon = hovered => (
    <li css={listItemStyles}>
      <ExternalLink to={`https://twitter.com/${twitter}`}>
        <div css={socialItemStyle}>
          <Icon fill={hovered ? '#1DA1F2' : nonHoveredIconColor} size={iconSize} name="twitter" />
          <span>{twitter}</span>
        </div>
      </ExternalLink>
    </li>
  );
  const GithubIcon = hovered => (
    <li css={listItemStyles}>
      <ExternalLink to={`https://github.com/${github}`}>
        <div css={socialItemStyle}>
          <Icon fill={hovered ? '#000' : nonHoveredIconColor} size={iconSize} name="github" />
          <span>{github}</span>
        </div>
      </ExternalLink>
    </li>
  );
  const [hoverableTwitterIcon] = useHover(TwitterIcon);
  const [hoverableGithubIcon] = useHover(GithubIcon);

  return (
    <ul css={listStyles}>
      {twitter && hoverableTwitterIcon}
      {github && hoverableGithubIcon}
    </ul>
  );
}

SpeakerSocialIcons.propTypes = {
  twitter: string,
  github: string
};
