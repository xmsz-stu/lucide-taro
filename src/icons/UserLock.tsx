import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M19 16v-2a2 2 0 0 0-4 0v2"}],["path",{"d":"M9.5 15H7a4 4 0 0 0-4 4v2"}],["circle",{"cx":"10","cy":"7","r":"4"}],["rect",{"x":"13","y":"16","rx":".899"}]];

const UserLock = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

UserLock.displayName = 'UserLock';

export default UserLock;
