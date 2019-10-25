import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Talk from '.';

suite('talk', () => {
  test('that the title and speaker details are displayed', () => {
    const speakerName = any.string();
    const github = any.word();
    const twitter = any.word();
    const talk = {title: any.sentence(), speaker: {frontmatter: {name: speakerName, github, twitter}}};

    const htmlContent = any.string();

    const wrapper = shallow(<Talk talk={talk} content={htmlContent} />);
    const speaker = wrapper.find('h3');
    const speakerSocialIcons = speaker.find('SpeakerSocialIcons');

    assert.equal(wrapper.find('h1').text(), talk.title);
    assert.equal(speaker.find('span').text(), speakerName);
    assert.equal(speakerSocialIcons.prop('twitter'), twitter);
    assert.equal(speakerSocialIcons.prop('github'), github);
    assert.deepEqual(wrapper.find('div').prop('dangerouslySetInnerHTML'), {__html: htmlContent});
  });
});
