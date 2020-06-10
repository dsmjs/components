import React from 'react';
import {configure, addDecorator, getStorybook, setAddon} from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';
import {fontFamily, fontSize} from '../src/styles';

global.__PATH_PREFIX__ = '';                                            // eslint-disable-line no-underscore-dangle
global.__BASE_PATH__ = '';                                              // eslint-disable-line no-underscore-dangle

const {percyAddon, serializeStories} = createPercyAddon();
setAddon(percyAddon);

addDecorator(story => (
  <div css={{fontFamily, fontSize}}>
    {story()}
  </div>
));

function loadStories() {
  const req = require.context('../src', true, /stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

serializeStories(getStorybook);
