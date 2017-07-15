import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Header from './index';

suite('header', () => {
  test('that the header renders', () => {
    const wrapper = shallow(<Header />);
    const link = wrapper.find('a');
    const logo = link.find('Logo');

    assert.equal(link.prop('href'), '/');
    assert.isTrue(logo.exists());
  });
});
