import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Archive from '.';

suite('archived meetings list organism', () => {
  test('that the meetings are passed to the list component', () => {
    const meetings = any.listOf(() => ({...any.simpleObject(), node: {fields: {slug: any.url()}}}));
    const totalPages = any.integer();
    const currentPage = any.integer();

    const wrapper = shallow(<Archive meetings={meetings} currentPage={currentPage} totalPages={totalPages} />);
    const heading = wrapper.find('PageHeading');
    const list = wrapper.find('ArchiveList');
    const pagination = wrapper.find('Pagination');

    assert.equal(heading.childAt(0).text(), 'Past Meetings');
    assert.equal(list.prop('meetings'), meetings);
    assert.equal(pagination.prop('totalPages'), totalPages);
    assert.equal(pagination.prop('currentPage'), currentPage);
  });
});
