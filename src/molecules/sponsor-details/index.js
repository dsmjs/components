import React from 'react';
import {shape, string} from 'prop-types';
import ExternalLink from '../../atoms/links/external';

export default function SponsorDetails({sponsor}) {
  return (
    <p>
      <span>
        Pizza and drinks proudly sponsored by
        {' '}
      </span>
      <ExternalLink to={sponsor.site}>{sponsor.name}</ExternalLink>
    </p>
  );
}

SponsorDetails.propTypes = {
  sponsor: shape({
    name: string
  })
};
