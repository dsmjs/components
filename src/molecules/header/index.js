import React from 'react';
import Logo from '../../atoms/logo';
import DsmJsBar from '../../atoms/header-bars/dsmJS';
import RecurrenceBar from '../../atoms/header-bars/recurrence';
import SponsorBar from '../../atoms/header-bars/sponsor';

export default function Header({sponsor}) {
  return (
    <div>
      <a href="/"><Logo /></a>
      <DsmJsBar />
      <SponsorBar sponsor={sponsor} />
      <RecurrenceBar />
    </div>
  );
}
