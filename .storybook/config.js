import React from 'react';
import {configure, addDecorator, getStorybook, setAddon} from '@storybook/react';
import {Div} from 'glamorous';
import createPercyAddon from '@percy-io/percy-storybook';
import {fontFamily, fontSize} from '../src/styles';

global.__PATH_PREFIX__ = '';                                            // eslint-disable-line no-underscore-dangle

const {percyAddon, serializeStories} = createPercyAddon();
setAddon(percyAddon);

addDecorator(story => (
  <Div css={{fontFamily, fontSize}}>
    {story()}
  </Div>
));

function loadStories() {
  const req = require.context('../src', true, /stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

serializeStories(getStorybook);
