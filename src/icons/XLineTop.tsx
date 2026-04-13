import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M18 4H6"}],["path",{"d":"M18 8 6 20"}],["path",{"d":"m6 8 12 12"}]];

const XLineTop = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

XLineTop.displayName = 'XLineTop';

export default XLineTop;
