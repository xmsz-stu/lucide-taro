import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 5H3"}],["path",{"d":"M11 12H3"}],["path",{"d":"M16 19H3"}],["path",{"d":"m15.5 9.5 5 5"}],["path",{"d":"m20.5 9.5-5 5"}]];

const ListX = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ListX.displayName = 'ListX';

export default ListX;
