import React from 'react';
import {string, shape} from 'prop-types';
import SpeakerSocialIcons from '../../atoms/social/speaker';

export default function Talk({talk, content}) {
  const {github, twitter, name: speakerName} = talk.speaker.frontmatter;

  return (
    <>
      <h1 css={{color: '#AD5472'}}>{talk.title}</h1>
      <h3 css={{display: 'flex', alignItems: 'center'}}>
        <span>{speakerName}</span>
        <small><SpeakerSocialIcons github={github} twitter={twitter} /></small>
      </h3>
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
