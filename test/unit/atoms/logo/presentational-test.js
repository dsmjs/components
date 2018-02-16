import React from 'react';
import {Img} from 'glamorous';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Logo from '../../../../src/atoms/logo/index';

suite('logo test', () => {
  test('that the png is loaded remotely', () => {
    const wrapper = shallow(<Logo />);
    const image = wrapper.find(Img);

    assert.equal(image.prop('src'), 'https://dsmjs.com/img/dsmjs-logo.png');
    assert.deepEqual(image.prop('css'), {});
  });

  test('that styles can be overridden', () => {
    const overrides = any.simpleObject();

    const wrapper = shallow(<Logo styleOverrides={overrides} />);
    const image = wrapper.find(Img);

    assert.equal(image.prop('css'), overrides);
  });
});
