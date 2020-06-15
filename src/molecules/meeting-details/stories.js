/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import MeetingDetails from './index';

export default {
  title: 'Molecules/Meeting Details'
};

export const Default = () => (
  <MeetingDetails
    meeting={{date: '2018-03-13', time: {start: '6:00pm', end: '7:00pm'}}}
    host={{location: any.string()}}
  />
);

Default.story = {
  name: 'default'
};
