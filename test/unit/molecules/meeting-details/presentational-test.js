import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import MeetingDetails from '../../../../src/molecules/meeting-details';

suite('meeting details', () => {
  test('that the details are populated from the provided props', () => {
    const meeting = {date: '2018-03-13', time: {start: '6:00pm', end: '7:00pm'}};
    const host = {location: any.sentence()};

    const wrapper = shallow(<MeetingDetails meeting={meeting} host={host} />);

    assert.equal(wrapper.find('h2').text(), meeting.date);
    assert.equal(wrapper.find('p').text(), `${meeting.time.start} - ${meeting.time.end} @ ${host.location}`);
  });
});
