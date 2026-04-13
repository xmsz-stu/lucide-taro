import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11 13H7"}],["path",{"d":"M19 9h-4"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{"x":"15","y":"5","rx":"1"}],["rect",{"x":"7","y":"8","rx":"1"}]];

const ChartColumnStacked = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChartColumnStacked.displayName = 'ChartColumnStacked';

export default ChartColumnStacked;
