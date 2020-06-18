import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as formatters from '../../formatters';
import ArchiveListItem from '.';

suite('archive list-item', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(formatters, 'markdown');
  });

  teardown(() => sandbox.restore());

  test('that the meeting details are linked from the list item', () => {
    const slug = any.url();
    const title = any.sentence();
    const formattedTitle = any.sentence();
    const meetingDetails = {date: any.date(), talks: [{talk: {frontmatter: {title}}}]};
    const meeting = {node: {frontmatter: meetingDetails, fields: {slug}}};
    formatters.markdown.withArgs(title).returns(formattedTitle);

    const wrapper = shallow(<ArchiveListItem meeting={meeting} />);
    const heading = wrapper.find('h4');
    const description = wrapper.find('li');

    assert.equal(heading.find('InternalLink').children().text(), meetingDetails.date);
    assert.equal(heading.find('InternalLink').prop('to'), slug);
    assert.equal(description.text(), formattedTitle);
  });
});
