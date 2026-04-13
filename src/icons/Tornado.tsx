import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 4H3"}],["path",{"d":"M18 8H6"}],["path",{"d":"M19 12H9"}],["path",{"d":"M16 16h-6"}],["path",{"d":"M11 20H9"}]];

const Tornado = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tornado.displayName = 'Tornado';

export default Tornado;
