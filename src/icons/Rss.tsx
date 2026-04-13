import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 11a9 9 0 0 1 9 9"}],["path",{"d":"M4 4a16 16 0 0 1 16 16"}],["circle",{"cx":"5","cy":"19","r":"1"}]];

const Rss = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Rss.displayName = 'Rss';

export default Rss;
