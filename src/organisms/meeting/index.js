import React, {Fragment} from 'react';
import {string, shape} from 'prop-types';
import MeetingDetails from '../../molecules/meeting-details';
import Talk from '../../molecules/talk';

export default function Meeting({meeting, host, talk, content}) {
  return (
    <Fragment>
      <MeetingDetails meeting={meeting} host={host} />
      <Talk talk={talk} content={content} />
    </Fragment>
  );
}

Meeting.propTypes = {
  meeting: shape(),
  host: shape(),
  talk: shape(),
  content: string
};
