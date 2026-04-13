import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 11V5H11"}],["path",{"d":"M5 5L19 19"}]];

const MoveUpLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveUpLeft.displayName = 'MoveUpLeft';

export default MoveUpLeft;
