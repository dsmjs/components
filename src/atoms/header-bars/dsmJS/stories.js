/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import DsmJsBar from './component';

export default {
  title: 'Atoms/Header Bars/dsmJS Bar'
};

export const Default = () => <DsmJsBar />;

Default.story = {
  name: 'default'
};
