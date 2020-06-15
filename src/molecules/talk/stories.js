/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import {talkContent} from '../../../.storybook/data/html-content';
import Talk from '.';

const talk = {
  title: any.sentence(),
  speaker: {
    frontmatter: {name: `${any.word()} ${any.word()}`, twitter: any.word(), github: any.word()}
  },
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

export default {
  title: 'Molecules/Talk'
};

export const Default = () => <Talk talk={talk} content={talkContent} />;

Default.story = {
  name: 'default'
};

export const NoTwitter = () => <Talk talk={talkNoTwitter} content={talkContent} />;

NoTwitter.story = {
  name: 'no twitter'
};

export const NoGithub = () => <Talk talk={talkNoGithub} content={talkContent} />;

NoGithub.story = {
  name: 'no github'
};

export const NoSocial = () => <Talk talk={talkNoSocial} content={talkContent} />;

NoSocial.story = {
  name: 'no social'
};
