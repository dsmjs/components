import React from 'react';
import {shallow} from 'enzyme';
import any from '@travi/any';
import {assert} from 'chai';
import Pagination from '.';

suite('archive pagination', () => {
  test('that links are rendered for each page', () => {
    const totalPages = any.integer({min: 2, max: 10});
    const currentPage = any.integer({max: totalPages}) + 1;

    const wrapper = shallow(<Pagination totalPages={totalPages} currentPage={currentPage} />);
    const pages = wrapper.find('ol > li');

    assert.equal(pages.length, totalPages);
    pages.forEach((page, index) => {
      const link = page.find('InternalLink');
      const pageNumber = index + 1;

      assert.equal(link.prop('to'), 0 === index ? '/archive' : `/archive/page-${pageNumber}`);
      assert.equal(link.children().text(), `${pageNumber}`);
    });
  });
});
