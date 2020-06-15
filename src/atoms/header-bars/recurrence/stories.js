/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import RecurrenceBar from './component';

export default {
  title: 'Atoms/Header Bars/Meeting Recurrence Bar'
};

export const Default = () => <RecurrenceBar />;

Default.story = {
  name: 'default'
};
