/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import Header from './index';

export default {
  title: 'Molecules/Header',

  decorators: [
    storyRouter({
      '/': linkTo('Molecules/Header', 'default')
    })
  ]
};

export const Default = () => (
  <Header sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`} />
);

Default.story = {
  name: 'default'
};
