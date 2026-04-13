import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M6 8L2 12L6 16"}],["path",{"d":"M2 12H22"}]];

const MoveLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveLeft.displayName = 'MoveLeft';

export default MoveLeft;
