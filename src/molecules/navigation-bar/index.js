import React from 'react';
import {link as linkColors} from '../../colors.json';
import SiteNavigation from '../../atoms/navigation/site';
import FooterSocialIcons from '../../atoms/social/footer';

export default function NavigationBar() {
  return (
    <div css={{background: '#666', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <SiteNavigation variant="inverted" />
      <FooterSocialIcons variant="inverted" color={linkColors.inverted} />
    </div>
  );
}
