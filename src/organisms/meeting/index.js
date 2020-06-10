import React from 'react';
import {arrayOf, string, shape} from 'prop-types';
import MeetingDetails from '../../molecules/meeting-details';
import Talk from '../../molecules/talk';

export default function Meeting({meeting, host, talks}) {
  return (
    <>
      <MeetingDetails meeting={meeting} host={host} />
      {talks.map(({talk}) => <Talk talk={talk.frontmatter} content={talk.html} key={talk.frontmatter.title} />)}
    </>
  );
}

Meeting.propTypes = {
  meeting: shape(),
  host: shape(),
  talks: arrayOf(shape({talk: shape({frontmatter: shape().isRequired, html: string.isRequired}).isRequired}))
};
