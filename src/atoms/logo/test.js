import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Logo from './index';

suite('logo test', () => {
  test('that the png is loaded remotely', () => {
    const wrapper = shallow(<Logo />);
    const image = wrapper.find('img');

    assert.equal(image.prop('src'), 'https://dsmjs.com/img/dsmjs-logo.png');
  });
});
