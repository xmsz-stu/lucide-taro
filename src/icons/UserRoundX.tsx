import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 21a8 8 0 0 1 11.873-7"}],["circle",{"cx":"10","cy":"8","r":"5"}],["path",{"d":"m17 17 5 5"}],["path",{"d":"m22 17-5 5"}]];

const UserRoundX = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

UserRoundX.displayName = 'UserRoundX';

export default UserRoundX;
