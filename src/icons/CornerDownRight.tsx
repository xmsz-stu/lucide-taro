import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m15 10 5 5-5 5"}],["path",{"d":"M4 4v7a4 4 0 0 0 4 4h12"}]];

const CornerDownRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CornerDownRight.displayName = 'CornerDownRight';

export default CornerDownRight;
