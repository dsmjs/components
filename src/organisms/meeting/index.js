import React, {Fragment} from 'react';
import {shape} from 'prop-types';
import MeetingDetails from '../../molecules/meeting-details';
import Talk from '../../molecules/talk';

export default function Meeting({meeting, host, talk}) {
  return (
    <Fragment>
      <MeetingDetails meeting={meeting} host={host} />
      <Talk talk={talk} />
    </Fragment>
  );
}

Meeting.propTypes = {
  meeting: shape(),
  host: shape(),
  talk: shape()
};
