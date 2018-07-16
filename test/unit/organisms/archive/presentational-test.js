import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Archive from '../../../../src/organisms/archive';

suite('archived meetings list organism', () => {
  test('that the meetings are passed to the list component', () => {
    const meetings = any.listOf(() => ({...any.simpleObject(), node: {fields: {slug: any.url()}}}));

    const wrapper = shallow(<Archive meetings={meetings} />);
    const heading = wrapper.find('PageHeading');
    const list = wrapper.find('ArchiveList');

    assert.equal(heading.childAt(0).text(), 'Past Meetings');
    assert.equal(list.prop('meetings'), meetings);
  });
});
