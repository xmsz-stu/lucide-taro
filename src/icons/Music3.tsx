import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"18","r":"4"}],["path",{"d":"M16 18V2"}]];

const Music3 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Music3.displayName = 'Music3';

export default Music3;
