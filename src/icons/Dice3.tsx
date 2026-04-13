import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2","ry":"2"}],["path",{"d":"M16 8h.01"}],["path",{"d":"M12 12h.01"}],["path",{"d":"M8 16h.01"}]];

const Dice3 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Dice3.displayName = 'Dice3';

export default Dice3;
