import React from 'react';
import {string, shape} from 'prop-types';

export default function Talk({talk, content}) {
  return (
    <>
      <h1 style={{color: '#AD5472'}}>{talk.title}</h1>
      <h3>{talk.speaker.frontmatter.name}</h3>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </>
  );
}

Talk.propTypes = {
  talk: shape({
    title: string,
    speaker: shape({
      frontmatter: shape({
        name: string
      })
    })
  }),
  content: string
};
