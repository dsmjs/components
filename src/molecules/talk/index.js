import React, {Fragment} from 'react';
import {string, shape} from 'prop-types';

export default function Talk({talk}) {
  return (
    <Fragment>
      <h1 style={{color: '#AD5472'}}>{talk.title}</h1>
      <h3>{talk.speaker}</h3>
    </Fragment>
  );
}

Talk.propTypes = {
  talk: shape({
    title: string,
    speaker: string
  })
};
