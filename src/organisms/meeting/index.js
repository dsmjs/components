import React from 'react';
import {shape} from 'prop-types';
import MeetingDetails from '../../molecules/meeting-details';

export default function Meeting({meeting, host}) {
  return <MeetingDetails meeting={meeting} host={host} />;
}

Meeting.propTypes = {
  meeting: shape(),
  host: shape()
};
