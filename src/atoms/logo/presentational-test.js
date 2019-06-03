import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Logo from '.';

suite('logo test', () => {
  test('that the png is loaded remotely', () => {
    const wrapper = shallow(<Logo />);
    const image = wrapper.find('LogoSvg');

    assert.deepEqual(image.prop('style'), {});
  });

  test('that styles can be overridden', () => {
    const overrides = any.simpleObject();

    const wrapper = shallow(<Logo styleOverrides={overrides} />);
    const image = wrapper.find('LogoSvg');

    assert.equal(image.prop('style'), overrides);
  });
});
