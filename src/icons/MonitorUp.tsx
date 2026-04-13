import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m9 10 3-3 3 3"}],["path",{"d":"M12 13V7"}],["rect",{"x":"2","y":"3","rx":"2"}],["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}]];

const MonitorUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MonitorUp.displayName = 'MonitorUp';

export default MonitorUp;
