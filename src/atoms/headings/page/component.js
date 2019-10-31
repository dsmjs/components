import React from 'react';
import {string} from 'prop-types';

export default function PageHeading({children}) {
  return <h2>{children}</h2>;
}

PageHeading.propTypes = {children: string.isRequired};
