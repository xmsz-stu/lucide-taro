import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"1"}],["path",{"d":"m9 22 3-3 3 3"}],["rect",{"x":"14","y":"3","rx":"1"}]];

const BetweenVerticalEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BetweenVerticalEnd.displayName = 'BetweenVerticalEnd';

export default BetweenVerticalEnd;
