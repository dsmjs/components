import React from 'react';
import {bool, func, string} from 'prop-types';
import Icon from 'react-simple-icons';
import ExternalLink from '../../links/external';

const iconSize = 20;
const listItemStyles = {
  padding: '0 0 0 .5em',
  height: iconSize,
  span: {
    paddingLeft: '.25em'
  }
};
export const nonHoveredIconColor = '#888';

export default function SocialLink({hovered, service, account, brandColor, onMouseEnter, onMouseLeave}) {
  return (
    <li css={listItemStyles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ExternalLink to={`https://${service}.com/${account}`} variant="inlineIconWithText">
        <Icon fill={hovered ? brandColor : nonHoveredIconColor} size={iconSize} name={service} />
        <span>{account}</span>
      </ExternalLink>
    </li>
  );
}

SocialLink.propTypes = {
  hovered: bool.isRequired,
  service: string.isRequired,
  account: string,
  brandColor: string.isRequired,
  onMouseEnter: func,
  onMouseLeave: func
};
