import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M14.83 14.83a4 4 0 1 1 0-5.66"}]];

const Copyright = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Copyright.displayName = 'Copyright';

export default Copyright;
