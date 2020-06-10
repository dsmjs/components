/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import {talkContent} from '../../../.storybook/data/html-content';
import {CurrentMeeting, Meeting} from '../../index';

const meeting = {date: '2018-03-13', time: {start: '6:00pm', end: '7:00pm'}};
const host = {location: any.string()};
const firstTalkDetails = {
  title: any.sentence(),
  speaker: {frontmatter: {name: `${any.word()} ${any.word()}`, twitter: any.word(), github: any.word()}}
};
const secondTalkDetails = {
  title: any.sentence(),
  speaker: {frontmatter: {name: `${any.word()} ${any.word()}`, twitter: any.word(), github: any.word()}}
};
const firstTalk = {talk: {frontmatter: firstTalkDetails, html: talkContent}};
const secondTalk = {
  talk: {
    frontmatter: secondTalkDetails,
    html: 'Are you producing write-once / read-never javascript? Do you want to develop something you can reason'
      + ' about but just don’t know where to start? Join us for a 30 minute beginner friendly discussion about how I'
      + ' was writing javascript a year ago and what I did to improve the quality of my client side code!'
  }
};

storiesOf('Organisms/Meeting', module)
  .add('default', () => <Meeting meeting={meeting} host={host} talks={[firstTalk]} />)
  .add('multiple talks', () => <Meeting meeting={meeting} host={host} talks={[firstTalk, secondTalk]} />)
  .add('current', () => (
    <CurrentMeeting meeting={meeting} sponsor={{name: any.string(), site: any.url()}} host={host} talks={[firstTalk]} />
  ));
