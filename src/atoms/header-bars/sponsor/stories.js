import React from 'react';
import any from '@travi/any';

import {storiesOf} from '@storybook/react';

import SponsorBar from './index';

storiesOf('Sponsor Bar', module).add('default', () => <SponsorBar sponsor={`${any.word()} ${any.word()}`} />);
