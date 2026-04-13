import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"6","y":"2","rx":"2"}],["rect",{"x":"2","y":"6","rx":"2"}]];

const Ratio = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Ratio.displayName = 'Ratio';

export default Ratio;
