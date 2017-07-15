import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Layout from './index';

suite('layout', () => {
  test('that the header and footer are included while wrapping the body', () => {
    const sponsor = any.string();
    const location = any.string();

    const wrapper = shallow(<Layout sponsor={sponsor} location={location} />);

    const header = wrapper.find('Header');
    assert.equal(header.prop('sponsor'), sponsor);
    assert.equal(header.prop('location'), location);
    assert.isTrue(wrapper.find('Footer').exists());
  });
});
