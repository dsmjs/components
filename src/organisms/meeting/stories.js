/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import {Meeting, CurrentMeeting} from '../../index';

const meeting = {date: '2018-03-13', time: {start: '6:00pm', end: '7:00pm'}};
const host = {location: any.string()};
const talk = {title: any.sentence(), speaker: `${any.word()} ${any.word()}`};

storiesOf('Organisms/Meeting', module)
  .add('default', () => <Meeting meeting={meeting} host={host} talk={talk} />)
  .add('current', () => (
    <CurrentMeeting meeting={meeting} sponsor={{name: any.string(), site: any.url()}} host={host} talk={talk} />
  ));
