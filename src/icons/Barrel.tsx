import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 3a41 41 0 0 0 0 18"}],["path",{"d":"M14 3a41 41 0 0 1 0 18"}],["path",{"d":"M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z"}],["path",{"d":"M3.84 17h16.32"}],["path",{"d":"M3.84 7h16.32"}]];

const Barrel = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Barrel.displayName = 'Barrel';

export default Barrel;
