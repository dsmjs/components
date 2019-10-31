import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import SocialIcons from '.';

suite('user group social icons', () => {
  test('that the icons link to the user group\'s social profiles', () => {
    const wrapper = shallow(<SocialIcons />);
    const items = wrapper.find('li');
    const twitter = items.at(0);
    const github = items.at(1);

    const twitterLink = twitter.find('ExternalLink');
    const twitterIcon = twitterLink.find('Icon');
    assert.equal(twitterLink.prop('to'), 'https://twitter.com/desmoinesjs');
    assert.equal(twitterIcon.prop('name'), 'twitter');

    const githubLink = github.find('ExternalLink');
    const githubIcon = githubLink.find('Icon');
    assert.equal(githubLink.prop('to'), 'https://github.com/dsmjs');
    assert.equal(githubIcon.prop('name'), 'github');
  });
});
