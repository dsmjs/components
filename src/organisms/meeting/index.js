import React from 'react';
import {shape} from 'prop-types';
import MeetingDetails from '../../molecules/meeting-details';

export default function Meeting({meeting}) {
  return <MeetingDetails meeting={meeting} />;
}

Meeting.propTypes = {
  meeting: shape()
};
