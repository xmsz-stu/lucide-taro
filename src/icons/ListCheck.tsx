import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 5H3"}],["path",{"d":"M16 12H3"}],["path",{"d":"M11 19H3"}],["path",{"d":"m15 18 2 2 4-4"}]];

const ListCheck = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ListCheck.displayName = 'ListCheck';

export default ListCheck;
