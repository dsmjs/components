import React from 'react';
import {shape, string} from 'prop-types';

export default function SponsorDetails({sponsor}) {
  return <p>Pizza and drinks proudly sponsored by <a href={sponsor.site}>{sponsor.name}</a></p>;
}

SponsorDetails.propTypes = {
  sponsor: shape({
    name: string
  })
};
