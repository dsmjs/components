import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import NavigationBar from '../../../../src/molecules/navigation-bar/index';

suite('navigation bar', () => {
  test('that the site navigation and social links are included', () => {
    const wrapper = shallow(<NavigationBar />);

    assert.isTrue(wrapper.find('SiteNavigation').exists());
  });
});
