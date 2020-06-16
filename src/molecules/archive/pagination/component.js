import React from 'react';
import {number} from 'prop-types';
import InternalLink from '../../../atoms/links/internal';

const listStyles = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-evenly',
  li: {display: 'inline-block'}
};

export default function Pagination({totalPages}) {
  return (
    <ol css={listStyles}>
      {
        Array
          .from({length: totalPages}, (_, index) => ({pageNumber: index + 1}))
          .map(({pageNumber}) => (
            <li key={`page-${pageNumber}`}>
              <InternalLink to={1 === pageNumber ? '/archive' : `/archive/page-${pageNumber}`}>
                {`${pageNumber}`}
              </InternalLink>
            </li>
          ))
      }
    </ol>
  );
}

Pagination.propTypes = {
  totalPages: number.isRequired
};
