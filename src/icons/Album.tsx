import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2","ry":"2"}],["polyline",{"points":"11 3 11 11 14 8 17 11 17 3"}]];

const Album = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Album.displayName = 'Album';

export default Album;
