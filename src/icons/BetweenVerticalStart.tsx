import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"8","rx":"1"}],["path",{"d":"m15 2-3 3-3-3"}],["rect",{"x":"14","y":"8","rx":"1"}]];

const BetweenVerticalStart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BetweenVerticalStart.displayName = 'BetweenVerticalStart';

export default BetweenVerticalStart;
