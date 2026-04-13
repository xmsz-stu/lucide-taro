import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M7 21h10"}],["rect",{"x":"2","y":"3","rx":"2"}]];

const Tv2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tv2.displayName = 'Tv2';

export default Tv2;
