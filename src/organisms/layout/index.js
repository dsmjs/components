import React from 'react';
import {string, node} from 'prop-types';
import {Div} from 'glamorous';
import Header from '../../molecules/header';
import Footer from '../footer';
import {fontFamily, fontSize} from '../../styles';
import layoutStyles from '../../layoutStyles.json';

export default function Layout({sponsor, location, children}) {
  return (
    <Div css={{fontFamily, fontSize, maxWidth: 1000, margin: '1em auto', backgroundColor: '#fff'}}>
      <Header sponsor={sponsor} location={location} />
      <div css={{padding: `0 ${layoutStyles.innerGutterWidth}px`}}>
        {children}
      </div>
      <Footer />
    </Div>
  );
}

Layout.propTypes = {
  sponsor: string.isRequired,
  location: string.isRequired,
  children: node
};
