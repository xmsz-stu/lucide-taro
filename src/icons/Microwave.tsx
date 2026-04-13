import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"4","rx":"2"}],["rect",{"x":"6","y":"8","rx":"1"}],["path",{"d":"M18 8v7"}],["path",{"d":"M6 19v2"}],["path",{"d":"M18 19v2"}]];

const Microwave = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Microwave.displayName = 'Microwave';

export default Microwave;
