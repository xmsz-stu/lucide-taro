import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M21 7.5H3"}],["path",{"d":"M21 12H3"}],["path",{"d":"M21 16.5H3"}]];

const Rows4 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Rows4.displayName = 'Rows4';

export default Rows4;
