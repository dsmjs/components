import React from 'react';
import {assert} from 'chai';
import {shallow} from 'enzyme';
import any from '@travi/any';
import Meeting from '../../../../src/organisms/meeting';

suite('meeting', () => {
  test('that the meeting is composed of meeting, speaker, and talk details', () => {
    const meeting = any.simpleObject();

    const wrapper = shallow(<Meeting meeting={meeting} />);
    const meetingDetails = wrapper.find('MeetingDetails');

    assert.equal(meetingDetails.prop('meeting'), meeting);
  });
});
