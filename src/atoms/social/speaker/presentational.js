import React from 'react';
import {string} from 'prop-types';
import {useHover} from 'react-use';
import SocialLink from './social-link';

const listStyles = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  fontSize: 20
};

function useTwitterIcon(twitter) {
  const [hoverableTwitterIcon] = useHover(hovered => (
    <SocialLink hovered={hovered} service="twitter" account={twitter} brandColor="#1DA1F2" />
  ));

  return hoverableTwitterIcon;
}

function useGithubIcon(github) {
  const [hoverableGithubIcon] = useHover(hovered => (
    <SocialLink hovered={hovered} service="github" account={github} brandColor="#000" />
  ));

  return hoverableGithubIcon;
}

export default function SpeakerSocialIcons({twitter, github}) {
  const hoverableTwitterIcon = useTwitterIcon(twitter);
  const hoverableGithubIcon = useGithubIcon(github);

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
