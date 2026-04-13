import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{"d":"M6 15v-2"}],["path",{"d":"M12 15V9"}],["circle",{"cx":"12","cy":"6","r":"3"}]];

const Joystick = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Joystick.displayName = 'Joystick';

export default Joystick;
