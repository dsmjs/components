import React, {Fragment} from 'react';
import {arrayOf, shape} from 'prop-types';
import PageHeading from '../../atoms/headings/page';
import ArchiveList from '../../molecules/archive';

export default function Archive({meetings}) {
  return (
    <Fragment>
      <PageHeading>Past Meetings</PageHeading>
      <ArchiveList meetings={meetings} />
    </Fragment>
  );
}

Archive.propTypes = {meetings: arrayOf(shape()).isRequired};
