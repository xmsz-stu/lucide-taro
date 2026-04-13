import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M9 17H7A5 5 0 0 1 7 7"}],["path",{"d":"M15 7h2a5 5 0 0 1 4 8"}],["line",{}],["line",{}]];

const Link2Off = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Link2Off.displayName = 'Link2Off';

export default Link2Off;
