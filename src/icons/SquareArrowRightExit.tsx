import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 12h11"}],["path",{"d":"m17 16 4-4-4-4"}],["path",{"d":"M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344"}]];

const SquareArrowRightExit = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareArrowRightExit.displayName = 'SquareArrowRightExit';

export default SquareArrowRightExit;
