import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{"d":"M14 6a6 6 0 0 1 6 6v3"}],["path",{"d":"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{"x":"2","y":"15","rx":"1"}]];

const HardHat = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

HardHat.displayName = 'HardHat';

export default HardHat;
