import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["circle",{"cx":"12","cy":"12","r":"5"}],["path",{"d":"M12 12h.01"}]];

const DiscAlbum = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

DiscAlbum.displayName = 'DiscAlbum';

export default DiscAlbum;
