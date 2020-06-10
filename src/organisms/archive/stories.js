/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import Archive from './index';

const meetings = [
  {
    node: {
      fields: {slug: '/meeting-1'},
      frontmatter: {date: any.date(), talks: [{talk: {frontmatter: {title: any.sentence()}}}]}
    }
  },
  {
    node: {
      fields: {slug: '/meeting-2'},
      frontmatter: {
        date: any.date(),
        talks: [{talk: {frontmatter: {title: any.sentence()}}}, {talk: {frontmatter: {title: any.sentence()}}}]
      }
    }
  }
];

storiesOf('Organisms/Archive', module)
  .addDecorator(storyRouter({
    '/meeting-1': linkTo('Organisms/Meeting', 'current'),
    '/meeting-2': linkTo('Organisms/Meeting', 'default')
  }))
  .add('default', () => <Archive meetings={meetings} />);
