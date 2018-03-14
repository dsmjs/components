/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import SponsorDetails from './index';

storiesOf('Molecules/Sponsor Details', module).add('default', () => (
  <SponsorDetails sponsor={{name: any.string(), site: any.url()}} />
));
