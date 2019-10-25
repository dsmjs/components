import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import ExternalLink from './external';

suite('external link', () => {
  test('that default browser behavior is leveraged', () => {
    const url = any.url();
    const text = any.sentence();

    const wrapper = shallow(<ExternalLink to={url}>{text}</ExternalLink>);
    const link = wrapper.find('a');

    assert.equal(link.prop('href'), url);
    assert.equal(link.text(), text);
  });
});
