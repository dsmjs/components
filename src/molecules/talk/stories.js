/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import {talkContent} from '../../../.storybook/data/html-content';
import Talk from './index';

storiesOf('Molecules/Talk', module).add('default', () => (
  <Talk
    talk={{
      title: any.sentence(),
      speaker: `${any.word()} ${any.word()}`,
      twitter: any.word(),
      slides: any.url()
    }}
    content={talkContent}
  />
));
