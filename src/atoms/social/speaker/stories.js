import React from 'react';
import {storiesOf} from '@storybook/react';
import any from '@travi/any';
import SpeakerSocialIcons from '.';

storiesOf('Atoms/Social Icons/Speaker', module)
  .add('no accounts', () => <SpeakerSocialIcons />)
  .add('github', () => <SpeakerSocialIcons github={any.word()} />)
  .add('twitter', () => <SpeakerSocialIcons twitter={any.word()} />)
  .add('twitter & github', () => <SpeakerSocialIcons twitter={any.word()} github={any.word()} />);
