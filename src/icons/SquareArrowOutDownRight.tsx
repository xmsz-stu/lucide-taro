import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{"d":"m21 21-9-9"}],["path",{"d":"M21 15v6h-6"}]];

const SquareArrowOutDownRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowOutDownRight.displayName = 'SquareArrowOutDownRight';

export default SquareArrowOutDownRight;
