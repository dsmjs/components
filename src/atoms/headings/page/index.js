import React from 'react';
import {string} from 'prop-types';

export default function PageHeading({text}) {
  return <h2>{text}</h2>;
}

PageHeading.propTypes = {text: string.isRequired};
