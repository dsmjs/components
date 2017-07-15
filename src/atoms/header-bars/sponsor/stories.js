import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import SponsorBar from './index';

storiesOf('Sponsor Bar', module).add('default', () => <SponsorBar sponsor={`${any.word()} ${any.word()}`} />);
