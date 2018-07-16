import React, {Fragment} from 'react';
import {shape, string} from 'prop-types';
import InternalLink from '../links/internal';

export default function ArchiveListItem({meeting}) {
  const meetingDetails = meeting.node.frontmatter;

  return (
    <Fragment>
      <h4><InternalLink to={meeting.node.fields.slug} text={meetingDetails.date} /></h4>
      <p style={{marginLeft: '1em'}}>{meetingDetails.talk.title}</p>
    </Fragment>
  );
}

ArchiveListItem.propTypes = {
  meeting: shape({
    node: shape({
      frontmatter: shape({
        date: string.isRequired,
        talk: shape({
          title: string.isRequired
        })
      }).isRequired,
      fields: shape({slug: string.isRequired}).isRequired
    }).isRequired
  }).isRequired
};
