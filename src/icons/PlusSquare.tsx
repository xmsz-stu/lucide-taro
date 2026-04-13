import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M8 12h8"}],["path",{"d":"M12 8v8"}]];

const PlusSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PlusSquare.displayName = 'PlusSquare';

export default PlusSquare;
