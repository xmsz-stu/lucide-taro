import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M7 12h2l2 5 2-10h4"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const SquareRadical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquareRadical.displayName = 'SquareRadical';

export default SquareRadical;
