import React from 'react';
import {arrayOf, shape} from 'prop-types';
import PageHeading from '../../atoms/headings/page';
import ArchiveList from '../../molecules/archive/list';

export default function Archive({meetings}) {
  return (
    <>
      <PageHeading>Past Meetings</PageHeading>
      <ArchiveList meetings={meetings} />
    </>
  );
}

Archive.propTypes = {meetings: arrayOf(shape()).isRequired};
