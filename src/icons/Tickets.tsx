import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8"}],["path",{"d":"M6 10V8"}],["path",{"d":"M6 14v1"}],["path",{"d":"M6 19v2"}],["rect",{"x":"2","y":"8","rx":"2"}]];

const Tickets = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tickets.displayName = 'Tickets';

export default Tickets;
