import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 13V7"}],["path",{"d":"m15 10-3 3-3-3"}],["rect",{"x":"2","y":"3","rx":"2"}],["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}]];

const MonitorDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MonitorDown.displayName = 'MonitorDown';

export default MonitorDown;
