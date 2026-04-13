import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 21v-6"}],["path",{"d":"M12 21V3"}],["path",{"d":"M19 21V9"}]];

const BarChart2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BarChart2.displayName = 'BarChart2';

export default BarChart2;
