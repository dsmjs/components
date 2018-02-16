import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import SiteNavigation from '../../../../../src/atoms/navigation/site/index';

suite('site navigation', () => {
  test('that the links are listed', () => {
    const wrapper = shallow(<SiteNavigation />);
    const links = wrapper.find('ol li a');

    const homeLink = links.at(0);
    assert.equal(homeLink.prop('href'), '/');
    assert.equal(homeLink.text(), 'Home');

    const meetingsLink = links.at(1);
    assert.equal(meetingsLink.prop('href'), '/archive');
    assert.equal(meetingsLink.text(), 'Past Meetings');
  });
});
