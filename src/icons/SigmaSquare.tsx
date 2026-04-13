import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M16 8.9V7H8l4 5-4 5h8v-1.9"}]];

const SigmaSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SigmaSquare.displayName = 'SigmaSquare';

export default SigmaSquare;
