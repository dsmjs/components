/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import storyRouter from 'storybook-router';
import {linkTo} from '@storybook/addon-links';
import Pagination from '.';

export default {
  title: 'Molecules/Archive/Pagination',

  decorators: [
    storyRouter({
      '/archive': linkTo('Molecules/Archive/Pagination', 'default'),
      '/archive/page-2': linkTo('Molecules/Archive/Pagination', 'page-2')
    })
  ]
};

export const Default = () => <Pagination totalPages={20} currentPage={1} />;

Default.story = {
  name: 'default'
};

export const Page2 = () => <Pagination totalPages={20} currentPage={2} />;

Page2.story = {
  name: 'page-2'
};
