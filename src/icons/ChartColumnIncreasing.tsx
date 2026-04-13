import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M13 17V9"}],["path",{"d":"M18 17V5"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M8 17v-3"}]];

const ChartColumnIncreasing = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChartColumnIncreasing.displayName = 'ChartColumnIncreasing';

export default ChartColumnIncreasing;
