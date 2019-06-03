import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import CopyrightBar from '.';

suite('copyright bar', () => {
  test('that the year-span ends with the current year', () => {
    const wrapper = shallow(<CopyrightBar />);

    assert.equal(wrapper.text(), `Copyright © dsmJS 2013 - ${new Date().getFullYear()}`);
  });
});
