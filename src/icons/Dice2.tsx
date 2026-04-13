import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"M15 9h.01"}],["path",{"d":"M9 15h.01"}]];

const Dice2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Dice2.displayName = 'Dice2';

export default Dice2;
