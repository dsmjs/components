import React from 'react';
import SiteNavigation from '../../atoms/navigation/site';
import SocialIcons from '../../atoms/social';

const navigationTextColor = '#fff';

export default function NavigationBar() {
  return (
    <div style={{background: '#666', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <SiteNavigation linkStyles={{color: navigationTextColor}} />
      <SocialIcons color={navigationTextColor} />
    </div>
  );
}
