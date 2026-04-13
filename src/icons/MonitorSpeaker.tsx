import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5.5 20H8"}],["path",{"d":"M17 9h.01"}],["rect",{"x":"12","y":"4","rx":"2"}],["path",{"d":"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{"cx":"17","cy":"15","r":"1"}]];

const MonitorSpeaker = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MonitorSpeaker.displayName = 'MonitorSpeaker';

export default MonitorSpeaker;
