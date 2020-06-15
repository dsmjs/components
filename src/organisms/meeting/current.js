import React from 'react';
import {arrayOf, shape} from 'prop-types';
import SponsorDetails from '../../molecules/sponsor-details';
import Meeting from '.';

export default function CurrentMeeting({meeting, sponsor, host, talks}) {
  return (
    <section>
      <Meeting meeting={meeting} host={host} talks={talks} />
      <SponsorDetails sponsor={sponsor} />
    </section>
  );
}

CurrentMeeting.propTypes = {
  meeting: shape(),
  sponsor: shape(),
  talks: arrayOf(shape()),
  host: shape()
};
