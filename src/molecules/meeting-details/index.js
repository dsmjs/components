import React from 'react';
import {shape, string} from 'prop-types';

export default function MeetingDetails({meeting}) {
  return (
    <div>
      <h1>{meeting.date}</h1>
      <p>{meeting.time.start} - {meeting.time.end}</p>
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
  })
};
