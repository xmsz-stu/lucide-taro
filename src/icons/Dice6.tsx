import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"M16 8h.01"}],["path",{"d":"M16 12h.01"}],["path",{"d":"M16 16h.01"}],["path",{"d":"M8 8h.01"}],["path",{"d":"M8 12h.01"}],["path",{"d":"M8 16h.01"}]];

const Dice6 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Dice6.displayName = 'Dice6';

export default Dice6;
