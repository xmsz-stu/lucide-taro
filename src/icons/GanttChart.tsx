import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M6 5h12"}],["path",{"d":"M4 12h10"}],["path",{"d":"M12 19h8"}]];

const GanttChart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GanttChart.displayName = 'GanttChart';

export default GanttChart;
