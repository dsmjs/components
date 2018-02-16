import React from 'react';
import {shape} from 'prop-types';
import {Img} from 'glamorous';

export default function Logo({styleOverrides}) {
  return <Img src="https://dsmjs.com/img/dsmjs-logo.png" css={styleOverrides} />;
}

Logo.propTypes = {styleOverrides: shape};
Logo.defaultProps = {styleOverrides: {}};
