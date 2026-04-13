import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m15 14 5-5-5-5"}],["path",{"d":"M4 20v-7a4 4 0 0 1 4-4h12"}]];

const CornerUpRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CornerUpRight.displayName = 'CornerUpRight';

export default CornerUpRight;
