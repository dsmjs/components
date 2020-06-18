import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import InternalLink from '../links/internal';
import {markdown} from '../../formatters';

export default function ArchiveListItem({meeting}) {
  const meetingDetails = meeting.node.frontmatter;

  return (
    <>
      <h4><InternalLink to={meeting.node.fields.slug}>{meetingDetails.date}</InternalLink></h4>
      <ol css={{listStyle: 'none', li: {marginBottom: 15}}}>
        {meetingDetails.talks.map(({talk: {frontmatter: {title}}}) => <li key={title}>{markdown(title)}</li>)}
      </ol>
    </>
  );
}

ArchiveListItem.propTypes = {
  meeting: shape({
    node: shape({
      frontmatter: shape({
        date: string.isRequired,
        talks: arrayOf(shape({
          talk: shape({
            frontmatter: shape({
              title: string.isRequired
            }).isRequired
          }).isRequired
        })).isRequired
      }).isRequired,
      fields: shape({slug: string.isRequired}).isRequired
    }).isRequired
  }).isRequired
};
