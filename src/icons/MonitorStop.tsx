import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}],["rect",{"x":"2","y":"3","rx":"2"}],["rect",{"x":"9","y":"7","rx":"1"}]];

const MonitorStop = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MonitorStop.displayName = 'MonitorStop';

export default MonitorStop;
