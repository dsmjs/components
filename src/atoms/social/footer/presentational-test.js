import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import SocialIcons from '.';

suite('user group social icons', () => {
  test('that the twitter icon links to the user group\'s twitter profile', () => {
    const wrapper = shallow(<SocialIcons />);
    const items = wrapper.find('li');
    const twitter = items.at(0);
    const github = items.at(1);

    const twitterLink = twitter.find('a');
    const twitterIcon = twitterLink.find('Icon');
    assert.equal(twitterLink.prop('href'), 'https://twitter.com/dsmjs');
    assert.equal(twitterIcon.prop('name'), 'twitter');

    const githubLink = github.find('a');
    const githubIcon = githubLink.find('Icon');
    assert.equal(githubLink.prop('href'), 'https://github.com/dsmjs');
    assert.equal(githubIcon.prop('name'), 'github');
  });
});
