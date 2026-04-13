import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"m15 9-6 6"}],["path",{"d":"m9 9 6 6"}]];

const SquareX = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareX.displayName = 'SquareX';

export default SquareX;
