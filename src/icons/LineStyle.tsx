import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11 5h2"}],["path",{"d":"M15 12h6"}],["path",{"d":"M19 5h2"}],["path",{"d":"M3 12h6"}],["path",{"d":"M3 19h18"}],["path",{"d":"M3 5h2"}]];

const LineStyle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LineStyle.displayName = 'LineStyle';

export default LineStyle;
