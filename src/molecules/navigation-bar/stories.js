/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import NavigationBar from './index';

export default {
  title: 'Molecules/Navigation Bar',

  decorators: [
    storyRouter({
      '/': linkTo('Molecules/Header', 'default'),
      '/archive': linkTo('Organisms/Archive', 'default')
    })
  ]
};

export const Default = () => <NavigationBar />;

Default.story = {
  name: 'default'
};
