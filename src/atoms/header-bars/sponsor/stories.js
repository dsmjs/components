/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import SponsorBar from './component';

storiesOf('Atoms/Header Bars/Sponsor Bar', module)
  .add('default', () => <SponsorBar sponsor={`${any.word()} ${any.word()}`} />);
