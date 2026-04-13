import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 21V3"}],["path",{"d":"M12 21V9"}],["path",{"d":"M19 21v-6"}]];

const ChartNoAxesColumnDecreasing = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChartNoAxesColumnDecreasing.displayName = 'ChartNoAxesColumnDecreasing';

export default ChartNoAxesColumnDecreasing;
