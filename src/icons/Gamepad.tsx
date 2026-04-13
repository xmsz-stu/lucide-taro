import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["line",{}],["line",{}],["rect",{"x":"2","y":"6","rx":"2"}]];

const Gamepad = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Gamepad.displayName = 'Gamepad';

export default Gamepad;
