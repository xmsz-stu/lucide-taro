import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M18 21a6 6 0 0 0-12 0"}],["circle",{"cx":"12","cy":"11","r":"4"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const UserSquare2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

UserSquare2.displayName = 'UserSquare2';

export default UserSquare2;
