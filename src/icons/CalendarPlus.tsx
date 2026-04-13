import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 19h6"}],["path",{"d":"M16 2v4"}],["path",{"d":"M19 16v6"}],["path",{"d":"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}]];

const CalendarPlus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CalendarPlus.displayName = 'CalendarPlus';

export default CalendarPlus;
