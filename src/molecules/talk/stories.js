/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import {talkContent} from '../../../.storybook/data/html-content';
import Talk from './index';

const talk = {
  title: any.sentence(),
  speaker: {frontmatter: {name: `${any.word()} ${any.word()}`, twitter: any.word(), github: any.word()}},
  slides: any.url()
};
const talkNoGithub = {
  title: any.sentence(),
  speaker: {frontmatter: {name: `${any.word()} ${any.word()}`, twitter: any.word()}},
  slides: any.url()
};
const talkNoTwitter = {
  title: any.sentence(),
  speaker: {frontmatter: {name: `${any.word()} ${any.word()}`, github: any.word()}},
  slides: any.url()
};
const talkNoSocial = {
  title: any.sentence(),
  speaker: {frontmatter: {name: `${any.word()} ${any.word()}`}},
  slides: any.url()
};

storiesOf('Molecules/Talk', module)
  .add('default', () => <Talk talk={talk} content={talkContent} />)
  .add('no twitter', () => <Talk talk={talkNoTwitter} content={talkContent} />)
  .add('no github', () => <Talk talk={talkNoGithub} content={talkContent} />)
  .add('no social', () => <Talk talk={talkNoSocial} content={talkContent} />);
