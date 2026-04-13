import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2","ry":"2"}],["line",{}],["line",{}],["line",{}]];

const DivideSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

DivideSquare.displayName = 'DivideSquare';

export default DivideSquare;
