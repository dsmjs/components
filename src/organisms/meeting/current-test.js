import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import CurrentMeeting from './current';

suite('current meeting', () => {
  test('that pizza sign-up is added to the meeting details', () => {
    const meeting = any.simpleObject();
    const sponsor = any.simpleObject();
    const host = any.simpleObject();
    const talks = any.listOf(() => ({...any.simpleObject(), talk: {frontmatter: any.simpleObject()}}));
    const content = any.string();

    const wrapper = shallow((
      <CurrentMeeting meeting={meeting} sponsor={sponsor} host={host} talks={talks} content={content} />
    ));
    const meetingComponent = wrapper.find('Meeting');
    const sponsorDetails = wrapper.find('SponsorDetails');

    assert.equal(meetingComponent.prop('meeting'), meeting);
    assert.equal(meetingComponent.prop('host'), host);
    assert.equal(meetingComponent.prop('talks'), talks);
    assert.equal(meetingComponent.prop('content'), content);
    assert.equal(sponsorDetails.prop('sponsor'), sponsor);
  });
});
