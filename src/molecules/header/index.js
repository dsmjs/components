import React from 'react';
import Logo from '../../atoms/logo';
import DsmJsBar from '../../atoms/header-bars/dsmJS';
import RecurrenceBar from '../../atoms/header-bars/recurrence';
import SponsorBar from '../../atoms/header-bars/sponsor';
import LocationBar from '../../atoms/header-bars/location';

export default function Header({sponsor, location}) {
  return (
    <header>
      <a href="/"><Logo styleOverrides={{float: 'left', height: 160}} /></a>
      <DsmJsBar />
      <SponsorBar sponsor={sponsor} />
      <LocationBar location={location} />
      <RecurrenceBar />
    </header>
  );
}
