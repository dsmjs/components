import React from 'react';
import {arrayOf, number, shape} from 'prop-types';
import PageHeading from '../../atoms/headings/page';
import ArchiveList from '../../molecules/archive/list';
import Pagination from '../../molecules/archive/pagination';

export default function Archive({meetings, totalPages, currentPage}) {
  return (
    <>
      <PageHeading>Past Meetings</PageHeading>
      <ArchiveList meetings={meetings} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}

Archive.propTypes = {
  meetings: arrayOf(shape()).isRequired,
  totalPages: number,
  currentPage: number
};
