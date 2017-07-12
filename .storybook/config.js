/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src', true, /stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
