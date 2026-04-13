import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{"d":"m3 21 9-9"}],["path",{"d":"M9 21H3v-6"}]];

const SquareArrowOutDownLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowOutDownLeft.displayName = 'SquareArrowOutDownLeft';

export default SquareArrowOutDownLeft;
