import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"1"}],["path",{"d":"m22 15-3-3 3-3"}],["rect",{"x":"3","y":"14","rx":"1"}]];

const BetweenHorizontalEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BetweenHorizontalEnd.displayName = 'BetweenHorizontalEnd';

export default BetweenHorizontalEnd;
