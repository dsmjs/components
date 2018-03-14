import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import Footer from '../../../../src/organisms/footer/index';

suite('footer', () => {
  test('that the navigation and copyright are included', () => {
    const wrapper = shallow(<Footer />);

    assert.isTrue(wrapper.find('NavigationBar').exists());
    assert.isTrue(wrapper.find('CopyrightBar').exists());
  });
});
