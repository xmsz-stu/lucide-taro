import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 5H3"}],["path",{"d":"M11 12H3"}],["path",{"d":"M16 19H3"}],["path",{"d":"M18 9v6"}],["path",{"d":"M21 12h-6"}]];

const ListPlus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ListPlus.displayName = 'ListPlus';

export default ListPlus;
