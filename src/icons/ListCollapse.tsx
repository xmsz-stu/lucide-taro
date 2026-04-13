import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 5h11"}],["path",{"d":"M10 12h11"}],["path",{"d":"M10 19h11"}],["path",{"d":"m3 10 3-3-3-3"}],["path",{"d":"m3 20 3-3-3-3"}]];

const ListCollapse = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ListCollapse.displayName = 'ListCollapse';

export default ListCollapse;
