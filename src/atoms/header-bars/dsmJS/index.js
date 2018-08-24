import React from 'react';
import glamorous from 'glamorous';
import styles from '../styles';

const DsmJsBarDiv = glamorous.div({
  ...styles,
  background: '#56626B'
});

export default function DsmJsBar() {
  return <DsmJsBarDiv>dsmJS</DsmJsBarDiv>;
}
