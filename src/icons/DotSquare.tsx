import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["circle",{"cx":"12","cy":"12","r":"1"}]];

const DotSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

DotSquare.displayName = 'DotSquare';

export default DotSquare;
