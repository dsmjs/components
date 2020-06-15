import React from 'react';
import any from '@travi/any';
import SpeakerSocialIcons from '.';

export default {
  title: 'Atoms/Social Icons/Speaker'
};

export const NoAccounts = () => <SpeakerSocialIcons />;

NoAccounts.story = {
  name: 'no accounts'
};

export const Github = () => <SpeakerSocialIcons github={any.word()} />;

Github.story = {
  name: 'github'
};

export const Twitter = () => <SpeakerSocialIcons twitter={any.word()} />;

Twitter.story = {
  name: 'twitter'
};

export const TwitterGithub = () => <SpeakerSocialIcons twitter={any.word()} github={any.word()} />;

TwitterGithub.story = {
  name: 'twitter & github'
};
