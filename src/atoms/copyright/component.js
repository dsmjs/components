import React from 'react';

const styles = {backgroundColor: '#333', color: '#f0da4f', padding: '1em', textAlign: 'center', fontWeight: 700};

export default function CopyrightBar() {
  return (
    <div css={styles}>
      {`Copyright © dsmJS 2013 - ${new Date().getFullYear()}`}
    </div>
  );
}
