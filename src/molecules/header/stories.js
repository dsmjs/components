import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import Header from './index';

storiesOf('Header', module).add('default', () => (
  <Header sponsor={`${any.word()} ${any.word()}`} location={`${any.word()} ${any.word()}`} />
));
