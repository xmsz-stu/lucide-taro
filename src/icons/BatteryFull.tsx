import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 10v4"}],["path",{"d":"M14 10v4"}],["path",{"d":"M22 14v-4"}],["path",{"d":"M6 10v4"}],["rect",{"x":"2","y":"6","rx":"2"}]];

const BatteryFull = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BatteryFull.displayName = 'BatteryFull';

export default BatteryFull;
