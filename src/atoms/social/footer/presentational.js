import React from 'react';
import {string} from 'prop-types';
import Icon from 'react-simple-icons';
import {useHover} from 'react-use';
import layoutStyles from '../../../layoutStyles.json';
import ExternalLink from '../../links/external';
import {link as linkColors} from '../../../colors';

const iconSize = 32;
const listStyles = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  paddingRight: layoutStyles.innerGutterWidth,
  margin: 0
};
const listItemStyles = {padding: '0 0 0 0.5em', height: iconSize};
const labelStyles = {display: 'none'};

export default function FooterSocialIcons({variant}) {
  const iconColor = 'inverted' === variant ? linkColors.inverted : linkColors.default;
  const TwitterIcon = hovered => <Icon fill={hovered ? '#ccc' : iconColor} size={iconSize} name="twitter" />;
  const GithubIcon = hovered => <Icon fill={hovered ? '#ccc' : iconColor} size={iconSize} name="github" />;
  const [hoverableTwitterIcon] = useHover(TwitterIcon);
  const [hoverableGithubIcon] = useHover(GithubIcon);

  return (
    <ul css={listStyles}>
      <li css={listItemStyles}>
        <ExternalLink to="https://twitter.com/desmoinesjs">
          {hoverableTwitterIcon}
          <span css={labelStyles}>Twitter</span>
        </ExternalLink>
      </li>
      <li css={listItemStyles}>
        <ExternalLink to="https://github.com/dsmjs">
          {hoverableGithubIcon}
          <span css={labelStyles}>GitHub</span>
        </ExternalLink>
      </li>
    </ul>
  );
}

FooterSocialIcons.propTypes = {variant: string};
