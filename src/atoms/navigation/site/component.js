import React from 'react';
import {string} from 'prop-types';
import layoutStyles from '../../../layoutStyles.json';
import InternalLink from '../../links/internal';

const listItemStyles = {padding: '0.5em', paddingLeft: 0};

export default function SiteNavigation({variant}) {
  return (
    <ol css={{listStyle: 'none', display: 'flex', margin: 0, paddingLeft: layoutStyles.innerGutterWidth}}>
      <li css={listItemStyles}><InternalLink to="/" variant={variant}>Home</InternalLink></li>
      <li css={listItemStyles}><InternalLink to="/archive" variant={variant}>Past Meetings</InternalLink></li>
    </ol>
  );
}

SiteNavigation.propTypes = {variant: string};
