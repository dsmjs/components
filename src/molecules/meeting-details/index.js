import React from 'react';
import {shape, string} from 'prop-types';

export default function MeetingDetails({meeting, host}) {
  return (
    <div>
      <h2>{meeting.date}</h2>
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
