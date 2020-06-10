import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import any from '@travi/any';
import Meeting from '.';

suite('meeting', () => {
  test('that the meeting is composed of meeting, speaker, and talk details', () => {
    const meeting = any.simpleObject();
    const host = any.simpleObject();
    const talks = any.listOf(() => ({talk: ({frontmatter: {...any.simpleObject(), title: any.sentence()}})}));
    const talkContent = any.string();

    const wrapper = shallow(<Meeting meeting={meeting} host={host} talks={talks} content={talkContent} />);
    const meetingDetails = wrapper.find('MeetingDetails');
    const talkComponents = wrapper.find('Talk');

    assert.equal(meetingDetails.prop('meeting'), meeting);
    assert.equal(meetingDetails.prop('host'), host);

    talks.forEach((talk, index) => {
      const talkComponent = talkComponents.at(index);
      assert.equal(talkComponent.prop('talk'), talk.talk.frontmatter);
      assert.equal(talkComponent.prop('content'), talkContent);
    });
  });
});
