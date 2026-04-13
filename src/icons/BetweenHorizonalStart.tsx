import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"8","y":"3","rx":"1"}],["path",{"d":"m2 9 3 3-3 3"}],["rect",{"x":"8","y":"14","rx":"1"}]];

const BetweenHorizonalStart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BetweenHorizonalStart.displayName = 'BetweenHorizonalStart';

export default BetweenHorizonalStart;
