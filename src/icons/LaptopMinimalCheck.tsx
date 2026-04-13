import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 20h20"}],["path",{"d":"m9 10 2 2 4-4"}],["rect",{"x":"3","y":"4","rx":"2"}]];

const LaptopMinimalCheck = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LaptopMinimalCheck.displayName = 'LaptopMinimalCheck';

export default LaptopMinimalCheck;
