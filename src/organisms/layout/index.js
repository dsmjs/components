import React from 'react';
import {Div} from 'glamorous';
import Header from '../../molecules/header';
import Footer from '../footer';
import globalStyles from '../../styles.json';

export default function Layout({sponsor, location, children}) {
  return (
    <Div css={{...globalStyles, marginTop: '1em', maxWidth: 1000, margin: '0 auto'}}>
      <Header sponsor={sponsor} location={location} />
      {children}
      <Footer />
    </Div>
  );
}
