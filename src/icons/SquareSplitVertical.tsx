import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{"d":"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{}]];

const SquareSplitVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareSplitVertical.displayName = 'SquareSplitVertical';

export default SquareSplitVertical;
