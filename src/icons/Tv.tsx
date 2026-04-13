import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m17 2-5 5-5-5"}],["rect",{"x":"2","y":"7","rx":"2"}]];

const Tv = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tv.displayName = 'Tv';

export default Tv;
