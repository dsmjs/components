import React from 'react';
import {shape, string} from 'prop-types';
import PageHeading from '../../atoms/headings/page';

export default function MeetingDetails({meeting, host}) {
  return (
    <div>
      <PageHeading>{meeting.date}</PageHeading>
      <p>{meeting.time.start} - {meeting.time.end} @ {host.location}</p>
    </div>
  );
}

MeetingDetails.propTypes = {
  meeting: shape({
    date: string,
    time: shape({
      start: string,
      end: string
    })
  }),
  host: shape({
    location: string
  })
};
