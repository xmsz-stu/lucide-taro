import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 19h8"}],["path",{"d":"m4 17 6-6-6-6"}]];

const Terminal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Terminal.displayName = 'Terminal';

export default Terminal;
