/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import NavigationBar from './index';

storiesOf('Navigation Bar', module).add('default', () => <NavigationBar />);
