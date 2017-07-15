import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Header from './index';

suite('header', () => {
  test('that the header renders', () => {
    const wrapper = shallow(<Header />);
    const link = wrapper.find('a');

    assert.equal(link.prop('href'), '/');
    assert.isTrue(link.find('Logo').exists());
    assert.isTrue(wrapper.find('DsmJsBar').exists());
    assert.isTrue(wrapper.find('RecurrenceBar').exists());
  });
});
