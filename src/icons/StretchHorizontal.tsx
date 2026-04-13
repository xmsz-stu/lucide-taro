import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"4","rx":"2"}],["rect",{"x":"2","y":"14","rx":"2"}]];

const StretchHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

StretchHorizontal.displayName = 'StretchHorizontal';

export default StretchHorizontal;
