import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M7 7h10"}],["path",{"d":"M10 7v10"}],["path",{"d":"M16 17a2 2 0 0 1-2-2V7"}]];

const PiSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PiSquare.displayName = 'PiSquare';

export default PiSquare;
