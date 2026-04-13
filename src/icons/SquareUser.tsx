import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["circle",{"cx":"12","cy":"10","r":"3"}],["path",{"d":"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]];

const SquareUser = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareUser.displayName = 'SquareUser';

export default SquareUser;
