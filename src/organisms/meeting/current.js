import React from 'react';
import {string, shape} from 'prop-types';
import SponsorDetails from '../../molecules/sponsor-details';
import Meeting from '.';

export default function CurrentMeeting({meeting, sponsor, host, talk, content}) {
  return (
    <section>
      <Meeting meeting={meeting} host={host} talk={talk} content={content} />
      <SponsorDetails sponsor={sponsor} />
    </section>
  );
}

CurrentMeeting.propTypes = {
  meeting: shape(),
  sponsor: shape(),
  talk: shape(),
  host: shape(),
  content: string
};
