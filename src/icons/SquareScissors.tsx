import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["circle",{"cx":"8.5","cy":"8.5","r":"1.5"}],["line",{}],["line",{}],["circle",{"cx":"8.5","cy":"15.5","r":"1.5"}],["line",{}]];

const SquareScissors = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareScissors.displayName = 'SquareScissors';

export default SquareScissors;
