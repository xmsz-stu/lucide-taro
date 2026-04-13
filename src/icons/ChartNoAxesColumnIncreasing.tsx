import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 21v-6"}],["path",{"d":"M12 21V9"}],["path",{"d":"M19 21V3"}]];

const ChartNoAxesColumnIncreasing = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChartNoAxesColumnIncreasing.displayName = 'ChartNoAxesColumnIncreasing';

export default ChartNoAxesColumnIncreasing;
