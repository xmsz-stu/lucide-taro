import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"16","r":"1"}],["rect",{"x":"3","y":"10","rx":"2"}],["path",{"d":"M7 10V7a5 5 0 0 1 10 0v3"}]];

const LockKeyhole = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LockKeyhole.displayName = 'LockKeyhole';

export default LockKeyhole;
