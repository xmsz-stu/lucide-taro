import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 2v4"}],["path",{"d":"M16 2v4"}],["rect",{"x":"3","y":"4","rx":"2"}],["path",{"d":"M3 10h18"}],["path",{"d":"m14 14-4 4"}],["path",{"d":"m10 14 4 4"}]];

const CalendarX = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CalendarX.displayName = 'CalendarX';

export default CalendarX;
