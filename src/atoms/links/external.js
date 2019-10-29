import React from 'react';
import {node, string} from 'prop-types';
import {link} from '../../styles';

export default function ExternalLink({to, variant, children}) {
  const styles = {...link, ...'inlineIconWithText' === variant && {display: 'flex', alignItems: 'center'}};

  return <a href={to} css={styles}>{children}</a>;
}

ExternalLink.propTypes = {
  to: string.isRequired,
  variant: string,
  children: node.isRequired
};
