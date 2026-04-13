import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]];

const X = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

X.displayName = 'X';

export default X;
