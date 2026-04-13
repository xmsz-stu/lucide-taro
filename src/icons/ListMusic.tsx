import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 5H3"}],["path",{"d":"M11 12H3"}],["path",{"d":"M11 19H3"}],["path",{"d":"M21 16V5"}],["circle",{"cx":"18","cy":"16","r":"3"}]];

const ListMusic = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ListMusic.displayName = 'ListMusic';

export default ListMusic;
