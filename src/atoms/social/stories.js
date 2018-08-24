/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import SiteNavigation from './index';

storiesOf('Atoms/Social Icons', module)
  .add('default', () => <SiteNavigation />);
