/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links/src/index';
import ArchiveList from './index';

const meetings = [
  {node: {fields: {slug: '/meeting-1'}, frontmatter: {date: any.date(), talk: {frontmatter: {title: any.sentence()}}}}},
  {node: {fields: {slug: '/meeting-2'}, frontmatter: {date: any.date(), talk: {frontmatter: {title: any.sentence()}}}}}
];

storiesOf('Molecules/Archive', module)
  .addDecorator(storyRouter({
    '/meeting-1': linkTo('Molecules/Meeting Details', 'default'),
    '/meeting-2': linkTo('Molecules/Meeting Details', 'default')
  }))
  .add('default', () => <ArchiveList meetings={meetings} />);
