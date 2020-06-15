/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import Footer from './index';

export default {
  title: 'Organisms/Footer',

  decorators: [
    storyRouter({
      '/': linkTo('Organisms/Layout', 'default'),
      '/archive': linkTo('Organisms/Layout', 'with children')
    })
  ]
};

export const Default = () => <Footer />;

Default.story = {
  name: 'default'
};
