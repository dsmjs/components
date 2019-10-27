import React from 'react';
import {node, string} from 'prop-types';
import {link} from '../../styles';

export default function ExternalLink({to, children}) {
  return <a href={to} css={link}>{children}</a>;
}

ExternalLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired
};
