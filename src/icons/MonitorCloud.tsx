import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"}],["path",{"d":"M12 17v4"}],["path",{"d":"M8 21h8"}],["rect",{"x":"2","y":"3","rx":"2"}]];

const MonitorCloud = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MonitorCloud.displayName = 'MonitorCloud';

export default MonitorCloud;
