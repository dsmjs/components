import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import ArchiveListItem from '.';

suite('archive list-item', () => {
  test('that the meeting details are linked from the list item', () => {
    const slug = any.url();
    const title = any.sentence();
    const meetingDetails = {date: any.date(), talks: [{talk: {frontmatter: {title}}}]};
    const meeting = {node: {frontmatter: meetingDetails, fields: {slug}}};

    const wrapper = shallow(<ArchiveListItem meeting={meeting} />);
    const heading = wrapper.find('h4');
    const description = wrapper.find('li');

    assert.equal(heading.find('InternalLink').children().text(), meetingDetails.date);
    assert.equal(heading.find('InternalLink').prop('to'), slug);
    assert.equal(description.text(), title);
  });
});
