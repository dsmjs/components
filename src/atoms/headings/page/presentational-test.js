import React from 'react';
import {shallow} from 'enzyme';
import any from '@travi/any';
import {assert} from 'chai';
import PageHeading from '.';

suite('page heading', () => {
  test('that the provided text is used for the heading', () => {
    const text = any.sentence();

    const wrapper = shallow(<PageHeading>{text}</PageHeading>);
    const heading = wrapper.find('h2');

    assert.equal(heading.text(), text);
  });
});
