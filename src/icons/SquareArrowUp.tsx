import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"m16 12-4-4-4 4"}],["path",{"d":"M12 16V8"}]];

const SquareArrowUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowUp.displayName = 'SquareArrowUp';

export default SquareArrowUp;
