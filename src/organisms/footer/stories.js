/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import Footer from './index';

storiesOf('Organisms/Footer', module)
  .addDecorator(storyRouter({
    '/': linkTo('Organisms/Layout', 'default'),
    '/archive': linkTo('Organisms/Layout', 'with children')
  }))
  .add('default', () => <Footer />);
