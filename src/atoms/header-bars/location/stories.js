/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import LocationBar from './index';

storiesOf('Atoms/Header Bars/Location Bar', module)
  .add('default', () => <LocationBar location={`${any.word()} ${any.word()}`} />);
