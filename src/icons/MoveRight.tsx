import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M18 8L22 12L18 16"}],["path",{"d":"M2 12H22"}]];

const MoveRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveRight.displayName = 'MoveRight';

export default MoveRight;
