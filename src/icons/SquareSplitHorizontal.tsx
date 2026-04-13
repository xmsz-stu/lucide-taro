import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{"d":"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{}]];

const SquareSplitHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareSplitHorizontal.displayName = 'SquareSplitHorizontal';

export default SquareSplitHorizontal;
