import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import DsmJsBar from './index';

suite('dsmJS bar', () => {
  test('that dsmJS is shown', () => {
    const wrapper = shallow(<DsmJsBar />);

    assert.equal(wrapper.dive().text(), 'dsmJS');
  });
});
