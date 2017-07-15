import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import SponsorBar from './index';

suite('sponsor bar', () => {
  test('that the sponsor is shown', () => {
    const sponsor = any.string();

    const wrapper = shallow(<SponsorBar sponsor={sponsor} />);

    assert.equal(wrapper.text(), sponsor);
  });
});
