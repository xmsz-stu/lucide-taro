import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 2v4"}],["path",{"d":"M16 2v4"}],["rect",{"x":"3","y":"4","rx":"2"}],["path",{"d":"M3 10h18"}]];

const Calendar = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Calendar.displayName = 'Calendar';

export default Calendar;
