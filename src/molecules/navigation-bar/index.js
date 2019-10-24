import React from 'react';
import SiteNavigation from '../../atoms/navigation/site';
import FooterSocialIcons from '../../atoms/social/footer';

const navigationTextColor = '#fff';

export default function NavigationBar() {
  return (
    <div style={{background: '#666', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <SiteNavigation linkStyles={{color: navigationTextColor}} />
      <FooterSocialIcons color={navigationTextColor} />
    </div>
  );
}
