import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M13 5H19V11"}],["path",{"d":"M19 5L5 19"}]];

const MoveUpRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveUpRight.displayName = 'MoveUpRight';

export default MoveUpRight;
