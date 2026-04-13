import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 2v2"}],["path",{"d":"M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2"}],["path",{"d":"M18 2v2"}],["path",{"d":"M2 13h2"}],["path",{"d":"M8 8h14"}],["rect",{"x":"8","y":"3","rx":"2"}]];

const Calendars = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Calendars.displayName = 'Calendars';

export default Calendars;
