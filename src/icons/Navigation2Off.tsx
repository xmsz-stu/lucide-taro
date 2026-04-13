import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{"d":"M14.53 8.88 12 2l-1.17 3.17"}],["line",{}]];

const Navigation2Off = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Navigation2Off.displayName = 'Navigation2Off';

export default Navigation2Off;
