import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import LocationBar from './index';

suite('location bar', () => {
  test('that the location is shown', () => {
    const location = any.string();

    const wrapper = shallow(<LocationBar location={location} />);

    assert.equal(wrapper.dive().text(), location);
  });
});
