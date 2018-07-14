/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import storyRouter from 'storybook-router';
import any from '@travi/any';
import Layout from './index';

storiesOf('Organisms/Layout', module)
  .addDecorator(storyRouter({
    '/': linkTo('Organisms/Layout', 'default'),
    '/archive': linkTo('Organisms/Layout', 'with children')
  }))
  .add('default', () => <Layout sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`} />)
  .add('with children', () => (
    <Layout sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`}>
      Hello World
    </Layout>
  ));
