import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import SponsorDetails from '.';

suite('sponsor details', () => {
  test('that the sponsor name is displayed', () => {
    const sponsor = {name: any.string(), site: any.url()};

    const wrapper = shallow(<SponsorDetails sponsor={sponsor} />);

    assert.equal(wrapper.find('p span').text(), 'Pizza and drinks proudly sponsored by ');
    assert.equal(wrapper.find('p ExternalLink').prop('to'), sponsor.site);
    assert.equal(wrapper.find('p ExternalLink').children().text(), sponsor.name);
  });
});
