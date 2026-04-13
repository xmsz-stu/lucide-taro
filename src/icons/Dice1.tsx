import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"M12 12h.01"}]];

const Dice1 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Dice1.displayName = 'Dice1';

export default Dice1;
