/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {Div} from 'glamorous';
import globalStyles from '../src/styles.json';

addDecorator(story => (
  <Div css={globalStyles}>
    {story()}
  </Div>
));

function loadStories() {
  const req = require.context('../src', true, /stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
