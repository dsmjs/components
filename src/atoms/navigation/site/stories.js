/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import SiteNavigation from './component';

export default {
  title: 'Atoms/Navigation/Site Navigation',

  decorators: [
    storyRouter({
      '/': linkTo('Atoms/Logo', 'default'),
      '/archive': linkTo('Organisms/Archive', 'default')
    })
  ]
};

export const Default = () => <SiteNavigation />;

Default.story = {
  name: 'default'
};
