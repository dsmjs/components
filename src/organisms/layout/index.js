import React from 'react';
import Header from '../../molecules/header';
import Footer from '../footer';

export default function Layout({sponsor, location}) {
  return (
    <div>
      <Header sponsor={sponsor} location={location} />
      <Footer />
    </div>
  );
}
