/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import ArchiveListItem from './component';

const meeting = {
  node: {
    fields: {slug: '/meeting-1'},
    frontmatter: {
      date: any.date(),
      talks: [
        {talk: {frontmatter: {title: any.sentence()}}},
        {talk: {frontmatter: {title: 'This is a `title` with _markdown_'}}}
      ]
    }
  }
};

export default {
  title: 'Atoms/Archive List-Item',
  decorators: [storyRouter({'/meeting-1': linkTo('Organisms/Meeting', 'current')})]
};

export const Default = () => <ArchiveListItem meeting={meeting} />;

Default.story = {
  name: 'default'
};
