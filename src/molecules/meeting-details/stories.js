/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import MeetingDetails from './index';

storiesOf('Molecules/Meeting Details', module).add('default', () => (
  <MeetingDetails meeting={{date: '2018-03-13', time: {start: '6:00pm', end: '7:00pm'}}} />
));
