import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import Talk from '../../../../src/molecules/talk';

suite('talk', () => {
  test('that the title and speaker details are displayed', () => {
    const speakerName = any.string();
    const talk = {title: any.sentence(), speaker: {frontmatter: {name: speakerName}}};
    const htmlContent = any.string();

    const wrapper = shallow(<Talk talk={talk} content={htmlContent} />);

    assert.equal(wrapper.find('h1').text(), talk.title);
    assert.equal(wrapper.find('h3').text(), speakerName);
    assert.deepEqual(wrapper.find('div').prop('dangerouslySetInnerHTML'), {__html: htmlContent});
  });
});
