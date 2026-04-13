import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["rect",{"x":"9","y":"9","rx":"1"}]];

const SquareStop = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareStop.displayName = 'SquareStop';

export default SquareStop;
