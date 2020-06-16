import React from 'react';
import {number} from 'prop-types';

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
          .map(({pageNumber}) => <li key={`page-${pageNumber}`}>{pageNumber}</li>)
      }
    </ol>
  );
}

Pagination.propTypes = {
  totalPages: number.isRequired
};
