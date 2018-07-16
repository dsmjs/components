import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import ArchiveListItem from '../../../../src/atoms/archive-list-item';

suite('archive list-item', () => {
  test('that the meeting details are linked from the list item', () => {
    const slug = any.url();
    const meetingDetails = {date: any.date(), talk: {title: any.sentence()}};
    const meeting = {node: {frontmatter: meetingDetails, fields: {slug}}};

    const wrapper = shallow(<ArchiveListItem meeting={meeting} />);
    const heading = wrapper.find('h4');
    const description = wrapper.find('p');

    assert.equal(heading.find('InternalLink').prop('text'), meetingDetails.date);
    assert.equal(heading.find('InternalLink').prop('to'), slug);
    assert.equal(description.text(), meetingDetails.talk.title);
  });
});
