import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import HoverableLink, {nonHoveredIconColor} from './social-link';

suite('hoverable link', () => {
  test('that the social link renders', () => {
    const account = any.word();
    const service = any.word();
    const mouseEnterHandler = () => undefined;
    const mouseLeaveHandler = () => undefined;

    const wrapper = shallow(
      <HoverableLink
        hovered={false}
        account={account}
        brandColor={any.word()}
        service={service}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
    );
    const listItem = wrapper.find('li');
    const externalLink = listItem.find('ExternalLink');
    const textContainer = externalLink.find('span');
    const icon = externalLink.find('Icon');

    assert.equal(listItem.prop('onMouseEnter'), mouseEnterHandler);
    assert.equal(listItem.prop('onMouseLeave'), mouseLeaveHandler);

    assert.equal(externalLink.prop('to'), `https://${service}.com/${account}`);
    assert.equal(textContainer.text(), account);

    assert.equal(icon.prop('fill'), nonHoveredIconColor);
    assert.equal(icon.prop('name'), service);
  });

  test('that the social icon renders with the brand color when the link is hovered', () => {
    const brandColor = any.word();

    const wrapper = shallow(
      <HoverableLink hovered={true} account={any.word()} brandColor={brandColor} service={any.word()} />
    );
    const icon = wrapper.find('Icon');

    assert.equal(icon.prop('fill'), brandColor);
  });
});
