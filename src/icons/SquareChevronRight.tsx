import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m10 8 4 4-4 4"}]];

const SquareChevronRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareChevronRight.displayName = 'SquareChevronRight';

export default SquareChevronRight;
