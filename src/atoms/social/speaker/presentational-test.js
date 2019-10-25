import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import SpeakerSocialIcons from '.';

suite('speaker social icons', () => {
  test('that the twitter icon links to the speakers\'s twitter profile', () => {
    const twitterHandle = any.word();

    const wrapper = shallow(<SpeakerSocialIcons twitter={twitterHandle} />);
    const items = wrapper.find('li');
    const twitter = items.at(0);

    const twitterLink = twitter.find('ExternalLink');
    const twitterIcon = twitterLink.find('Icon');
    assert.equal(twitterLink.find('span').text(), twitterHandle);
    assert.equal(twitterLink.prop('to'), `https://twitter.com/${twitterHandle}`);
    assert.equal(twitterIcon.prop('name'), 'twitter');
  });

  test('that the github icon links to the speakers\'s github profile', () => {
    const githubAccount = any.word();

    const wrapper = shallow(<SpeakerSocialIcons github={githubAccount} />);
    const items = wrapper.find('li');
    const github = items.at(0);

    const githubLink = github.find('ExternalLink');
    const githubIcon = githubLink.find('Icon');
    assert.equal(githubLink.find('span').text(), githubAccount);
    assert.equal(githubLink.prop('to'), `https://github.com/${githubAccount}`);
    assert.equal(githubIcon.prop('name'), 'github');
  });
});
