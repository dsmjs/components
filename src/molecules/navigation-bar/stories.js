/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links/src/index';
import NavigationBar from './index';

storiesOf('Molecules/Navigation Bar', module)
  .addDecorator(storyRouter({
    '/': linkTo('Molecules/Header', 'default'),
    '/archive': linkTo('Organisms/Archive', 'default')
  }))
  .add('default', () => <NavigationBar />);
