/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import any from '@travi/any';
import LocationBar from './component';

export default {
  title: 'Atoms/Header Bars/Location Bar'
};

export const Default = () => <LocationBar location={`${any.word()} ${any.word()}`} />;

Default.story = {
  name: 'default'
};
