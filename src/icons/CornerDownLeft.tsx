import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{"d":"m9 10-5 5 5 5"}]];

const CornerDownLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CornerDownLeft.displayName = 'CornerDownLeft';

export default CornerDownLeft;
