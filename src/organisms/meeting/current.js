import React from 'react';
import {arrayOf, string, shape} from 'prop-types';
import SponsorDetails from '../../molecules/sponsor-details';
import Meeting from '.';

export default function CurrentMeeting({meeting, sponsor, host, talks, content}) {
  return (
    <section>
      <Meeting meeting={meeting} host={host} talks={talks} content={content} />
      <SponsorDetails sponsor={sponsor} />
    </section>
  );
}

CurrentMeeting.propTypes = {
  meeting: shape(),
  sponsor: shape(),
  talks: arrayOf(shape()),
  host: shape(),
  content: string
};
