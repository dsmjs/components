import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import SpeakerSocialIcons from '.';

suite('speaker social icons', () => {
  test('that the twitter icon links to the speakers\'s twitter profile', () => {
    const twitterHandle = any.word();

    const wrapper = shallow(<SpeakerSocialIcons twitter={twitterHandle} />);
    const link = wrapper.find('SocialLink');

    assert.equal(link.prop('service'), 'twitter');
    assert.equal(link.prop('account'), twitterHandle);
    // from the twitter brand guidelines: https://about.twitter.com/en_us/company/brand-resources.html
    assert.equal(link.prop('brandColor'), '#1DA1F2');
  });

  test('that the github icon links to the speakers\'s github profile', () => {
    const githubAccount = any.word();

    const wrapper = shallow(<SpeakerSocialIcons github={githubAccount} />);
    const link = wrapper.find('SocialLink');

    assert.equal(link.prop('service'), 'github');
    assert.equal(link.prop('account'), githubAccount);
    assert.equal(link.prop('brandColor'), '#000');
  });
});
