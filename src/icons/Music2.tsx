import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"8","cy":"18","r":"4"}],["path",{"d":"M12 18V2l7 4"}]];

const Music2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Music2.displayName = 'Music2';

export default Music2;
