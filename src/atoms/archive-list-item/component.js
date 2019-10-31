import React from 'react';
import {shape, string} from 'prop-types';
import InternalLink from '../links/internal';

export default function ArchiveListItem({meeting}) {
  const meetingDetails = meeting.node.frontmatter;

  return (
    <>
      <h4><InternalLink to={meeting.node.fields.slug}>{meetingDetails.date}</InternalLink></h4>
      <p css={{marginLeft: '1em'}}>{meetingDetails.talk.frontmatter.title}</p>
    </>
  );
}

ArchiveListItem.propTypes = {
  meeting: shape({
    node: shape({
      frontmatter: shape({
        date: string.isRequired,
        talk: shape({
          frontmatter: shape({
            title: string.isRequired
          }).isRequired
        })
      }).isRequired,
      fields: shape({slug: string.isRequired}).isRequired
    }).isRequired
  }).isRequired
};
