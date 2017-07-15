import React from 'react';
import Logo from '../../atoms/logo';
import DsmJsBar from '../../atoms/header-bars/dsmJS';
import RecurrenceBar from '../../atoms/header-bars/recurrence';

export default function Header() {
  return (
    <div>
      <a href="/">
        <Logo />
      </a>
      <DsmJsBar />
      <RecurrenceBar />
    </div>
  );
}
