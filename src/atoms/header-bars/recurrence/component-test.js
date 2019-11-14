import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import RecurrenceBar from '.';

suite('Meeting Recurrence bar', () => {
  test('that the recurrence schedule is shown', () => {
    const wrapper = shallow(<RecurrenceBar />);

    assert.equal(wrapper.shallow().text(), 'Second Tuesday every month');
  });
});
