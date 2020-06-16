/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import {Archive} from '../..';

const meetings = [
  {
    node: {
      fields: {slug: '/meeting-1'},
      frontmatter: {
        date: any.date(),
        talks: [{talk: {frontmatter: {title: any.sentence()}}}]
      }
    }
  },
  {
    node: {
      fields: {slug: '/meeting-2'},
      frontmatter: {
        date: any.date(),
        talks: [
          {talk: {frontmatter: {title: any.sentence()}}},
          {talk: {frontmatter: {title: any.sentence()}}}
        ]
      }
    }
  }
];

export default {
  title: 'Organisms/Archive',

  decorators: [
    storyRouter({
      '/meeting-1': linkTo('Organisms/Meeting', 'current'),
      '/meeting-2': linkTo('Organisms/Meeting', 'default')
    })
  ]
};

export const Default = () => {
  const totalPages = any.integer({max: 20});

  return <Archive meetings={meetings} totalPages={totalPages} currentPage={any.integer({max: totalPages})} />;
};

Default.story = {
  name: 'default'
};
