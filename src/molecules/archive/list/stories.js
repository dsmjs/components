/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import ArchiveList from '.';

const meetings = [
  {
    node: {
      fields: {slug: '/meeting-1'},
      frontmatter: {
        date: any.date(),
        talks: [{talk: {frontmatter: {title: 'This is a `title` with _markdown_'}}}]
      }
    }
  },
  {
    node: {
      fields: {slug: '/meeting-2'},
      frontmatter: {
        date: any.date(),
        talks: [{talk: {frontmatter: {title: any.sentence()}}}]
      }
    }
  }
];

export default {
  title: 'Molecules/Archive/List',

  decorators: [
    storyRouter({
      '/meeting-1': linkTo('Molecules/Meeting Details', 'default'),
      '/meeting-2': linkTo('Molecules/Meeting Details', 'default')
    })
  ]
};

export const Default = () => <ArchiveList meetings={meetings} />;

Default.story = {
  name: 'default'
};
