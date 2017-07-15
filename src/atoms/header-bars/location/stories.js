import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import LocationBar from './index';

storiesOf('Location Bar', module).add('default', () => <LocationBar location={`${any.word()} ${any.word()}`} />);
