import React from 'react';
import {node, string} from 'prop-types';

const styles = {textDecoration: 'none', ':hover': {textDecoration: 'underline', color: '#00b3b3'}, color: '#099'};

export default function ExternalLink({to, children}) {
  return <a href={to} css={styles}>{children}</a>;
}

ExternalLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired
};
