import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as formatters from '../../formatters';
import Talk from '.';

suite('talk', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(formatters, 'markdown');
  });

  teardown(() => sandbox.restore());

  test('that the title and speaker details are displayed', () => {
    const speakerName = any.string();
    const github = any.word();
    const twitter = any.word();
    const talkTitle = any.sentence();
    const formattedTitle = any.sentence();
    const talk = {title: talkTitle, speaker: {frontmatter: {name: speakerName, github, twitter}}};
    formatters.markdown.withArgs(talkTitle).returns(formattedTitle);

    const htmlContent = any.string();

    const wrapper = shallow(<Talk talk={talk} content={htmlContent} />);
    const speaker = wrapper.find('h3');
    const speakerSocialIcons = speaker.find('SpeakerSocialIcons');

    assert.equal(wrapper.find('h1').text(), formattedTitle);
    assert.equal(speaker.find('span').text(), speakerName);
    assert.equal(speakerSocialIcons.prop('twitter'), twitter);
    assert.equal(speakerSocialIcons.prop('github'), github);
    assert.deepEqual(wrapper.find('div').prop('dangerouslySetInnerHTML'), {__html: htmlContent});
  });
});
