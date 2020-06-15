/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {linkTo} from '@storybook/addon-links';
import storyRouter from 'storybook-router';
import any from '@travi/any';
import Layout from './index';

export default {
  title: 'Organisms/Layout',

  decorators: [
    storyRouter({
      '/': linkTo('Organisms/Layout', 'default'),
      '/archive': linkTo('Organisms/Archive', 'with children')
    })
  ]
};

export const Default = () => (
  <Layout sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`} />
);

Default.story = {
  name: 'default'
};

export const WithChildren = () => (
  <Layout sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`}>
    Hello World
  </Layout>
);

WithChildren.story = {
  name: 'with children'
};
