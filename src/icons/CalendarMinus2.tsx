import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 2v4"}],["path",{"d":"M16 2v4"}],["rect",{"x":"3","y":"4","rx":"2"}],["path",{"d":"M3 10h18"}],["path",{"d":"M10 16h4"}]];

const CalendarMinus2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CalendarMinus2.displayName = 'CalendarMinus2';

export default CalendarMinus2;
