/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import SponsorDetails from './index';

export default {
  title: 'Molecules/Sponsor Details'
};

export const Default = () => <SponsorDetails sponsor={{name: any.string(), site: any.url()}} />;

Default.story = {
  name: 'default'
};
