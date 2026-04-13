import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M9 8h7"}],["path",{"d":"M8 12h6"}],["path",{"d":"M11 16h5"}]];

const GanttChartSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GanttChartSquare.displayName = 'GanttChartSquare';

export default GanttChartSquare;
