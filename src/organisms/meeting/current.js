import React from 'react';
import {shape} from 'prop-types';
import SponsorDetails from '../../molecules/sponsor-details';
import Meeting from '.';

export default function CurrentMeeting({meeting, sponsor, host}) {
  return (
    <section>
      <Meeting meeting={meeting} host={host} />
      <SponsorDetails sponsor={sponsor} />
    </section>
  );
}

CurrentMeeting.propTypes = {
  meeting: shape(),
  sponsor: shape(),
  host: shape()
};
