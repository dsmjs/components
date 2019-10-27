import React from 'react';
import {string} from 'prop-types';
import styled from '@emotion/styled';
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

const SocialItem = styled.div`
  ${socialItemStyle}
`;

export default function SpeakerSocialIcons({twitter, github}) {
  const nonHoveredIconColor = '#888';
  const TwitterIcon = hovered => (
    <li css={listItemStyles}>
      <ExternalLink to={`https://twitter.com/${twitter}`}>
        <SocialItem>
          <Icon fill={hovered ? '#1DA1F2' : nonHoveredIconColor} size={iconSize} name="twitter" />
          <span>{twitter}</span>
        </SocialItem>
      </ExternalLink>
    </li>
  );
  const GithubIcon = hovered => (
    <li css={listItemStyles}>
      <ExternalLink to={`https://github.com/${github}`}>
        <SocialItem>
          <Icon fill={hovered ? '#000' : nonHoveredIconColor} size={iconSize} name="github" />
          <span>{github}</span>
        </SocialItem>
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
