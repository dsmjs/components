import React from 'react';
import {addDecorator} from '@storybook/react';
import {fontFamily, fontSize} from '../src/styles';

global.__PATH_PREFIX__ = '';                                            // eslint-disable-line no-underscore-dangle
global.__BASE_PATH__ = '';                                              // eslint-disable-line no-underscore-dangle

addDecorator(story => (
  <div css={{fontFamily, fontSize}}>
    {story()}
  </div>
));
