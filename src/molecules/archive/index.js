import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import ArchiveListItem from '../../atoms/archive-list-item';

export default function Archive({meetings}) {
  return (
    <ol style={{listStyleType: 'none'}}>
      {meetings.map(meeting => <li key={meeting.node.fields.slug}><ArchiveListItem meeting={meeting} /></li>)}
    </ol>
  );
}

Archive.propTypes = {
  meetings: arrayOf(shape({
    node: shape({
      fields: shape({
        slug: string.isRequired
      }).isRequired
    }).isRequired
  })).isRequired
};
