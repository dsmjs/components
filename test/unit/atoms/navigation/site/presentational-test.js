import React from 'react';
import Link from 'gatsby-link';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import SiteNavigation from '../../../../../src/atoms/navigation/site/index';

suite('site navigation', () => {
  test('that the links are listed', () => {
    const wrapper = shallow(<SiteNavigation />);
    const links = wrapper.find('ol li').find(Link);

    const homeLink = links.at(0);
    assert.equal(homeLink.prop('to'), '/');
    assert.equal(homeLink.childAt(0).text(), 'Home');

    const meetingsLink = links.at(1);
    assert.equal(meetingsLink.prop('to'), '/archive');
    assert.equal(meetingsLink.childAt(0).text(), 'Past Meetings');
  });
});
