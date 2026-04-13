import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M20 20v-7a4 4 0 0 0-4-4H4"}],["path",{"d":"M9 14 4 9l5-5"}]];

const CornerUpLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CornerUpLeft.displayName = 'CornerUpLeft';

export default CornerUpLeft;
