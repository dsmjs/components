import React from 'react';
import SiteNavigation from '../../atoms/navigation/site';

export default function NavigationBar() {
  return (
    <div style={{background: '#666'}}>
      <SiteNavigation linkStyles={{color: '#fff'}} />
    </div>
  );
}
