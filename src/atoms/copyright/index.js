import React from 'react';

const styles = {backgroundColor: '#333', color: '#f0da4f', padding: '1em', textAlign: 'center'};

export default function CopyrightBar() {
  return <div style={styles}>Copyright © dsmJS 2013 - {new Date().getFullYear()}</div>;
}
