import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"4","rx":"2"}],["path",{"d":"M2 14h20"}],["path",{"d":"M12 20v-6"}]];

const Touchpad = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Touchpad.displayName = 'Touchpad';

export default Touchpad;
