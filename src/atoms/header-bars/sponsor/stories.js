/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import SponsorBar from './component';

export default {
  title: 'Atoms/Header Bars/Sponsor Bar'
};

export const Default = () => <SponsorBar sponsor={`${any.word()} ${any.word()}`} />;

Default.story = {
  name: 'default'
};
