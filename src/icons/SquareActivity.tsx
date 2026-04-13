import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M17 12h-2l-2 5-2-10-2 5H7"}]];

const SquareActivity = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareActivity.displayName = 'SquareActivity';

export default SquareActivity;
