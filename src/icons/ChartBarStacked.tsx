import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11 13v4"}],["path",{"d":"M15 5v4"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{"x":"7","y":"13","rx":"1"}],["rect",{"x":"7","y":"5","rx":"1"}]];

const ChartBarStacked = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChartBarStacked.displayName = 'ChartBarStacked';

export default ChartBarStacked;
