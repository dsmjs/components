/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Meeting from './index';

storiesOf('Organisms/Meeting', module)
  .add('default', () => <Meeting meeting={{date: '2018-03-13', time: {start: '6:00pm', end: '7:00pm'}}} />);
