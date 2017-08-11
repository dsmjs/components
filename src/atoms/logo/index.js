import React from 'react';
import {Img} from 'glamorous';

export default function Logo({styleOverrides}) {
  return <Img src="https://dsmjs.com/img/dsmjs-logo.png" css={styleOverrides} />;
}

Logo.defaultProps = {
  styleOverrides: {}
};
