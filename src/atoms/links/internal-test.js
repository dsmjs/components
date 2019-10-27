import React from 'react';
import Link from 'gatsby-link';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import InternalLink from './internal';

suite('internal link', () => {
  test('that gatsby-link is leveraged', () => {
    const url = any.url();
    const text = any.sentence();

    const wrapper = shallow(<InternalLink to={url}>{text}</InternalLink>);
    const link = wrapper.find(Link);

    assert.equal(link.prop('to'), url);
    assert.equal(link.childAt(0).text(), text);
  });
});
