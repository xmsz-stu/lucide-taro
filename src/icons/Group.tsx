import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{"d":"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{"d":"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{"d":"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{"x":"7","y":"7","rx":"1"}],["rect",{"x":"10","y":"12","rx":"1"}]];

const Group = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Group.displayName = 'Group';

export default Group;
