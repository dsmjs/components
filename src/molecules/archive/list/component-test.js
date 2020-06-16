import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import ArchiveList from './component';

suite('archived meetings list molecule', () => {
  test('that the meetings are listed', () => {
    const meetings = any.listOf(() => ({
      ...any.simpleObject(),
      node: {fields: {slug: any.url()}, frontmatter: {date: any.date(), talks: []}}
    }));

    const wrapper = shallow(<ArchiveList meetings={meetings} />);
    const list = wrapper.find('ol');
    const listItems = list.find('li');

    assert.equal(listItems.length, meetings.length);
    listItems.forEach((item, index) => {
      const archiveItem = item.find('ArchiveListItem');

      assert.equal(archiveItem.prop('meeting'), meetings[index]);
    });
  });
});
