import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M6 5h12"}],["path",{"d":"M4 12h10"}],["path",{"d":"M12 19h8"}]];

const ChartNoAxesGantt = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChartNoAxesGantt.displayName = 'ChartNoAxesGantt';

export default ChartNoAxesGantt;
