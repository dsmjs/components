import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Header from './index';

suite('header', () => {
  test('that the header renders', () => {
    const wrapper = shallow(<Header />);
    const logo = wrapper.find('Logo');

    assert.isTrue(logo.exists());
  });
});
