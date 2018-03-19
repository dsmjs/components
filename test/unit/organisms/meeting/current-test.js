import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import CurrentMeeting from '../../../../src/organisms/meeting/current';

suite('current meeting', () => {
  test('that pizza sign-up is added to the meeting details', () => {
    const meeting = any.simpleObject();
    const sponsor = any.simpleObject();
    const host = any.simpleObject();

    const wrapper = shallow(<CurrentMeeting meeting={meeting} sponsor={sponsor} host={host} />);
    const meetingComponent = wrapper.find('Meeting');
    const sponsorDetails = wrapper.find('SponsorDetails');

    assert.equal(meetingComponent.prop('meeting'), meeting);
    assert.equal(meetingComponent.prop('host'), host);
    assert.equal(sponsorDetails.prop('sponsor'), sponsor);
  });
});
