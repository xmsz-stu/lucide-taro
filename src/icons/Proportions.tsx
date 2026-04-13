import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"4","rx":"2"}],["path",{"d":"M12 9v11"}],["path",{"d":"M2 9h13a2 2 0 0 1 2 2v9"}]];

const Proportions = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Proportions.displayName = 'Proportions';

export default Proportions;
