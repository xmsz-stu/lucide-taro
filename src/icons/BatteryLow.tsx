import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M22 14v-4"}],["path",{"d":"M6 14v-4"}],["rect",{"x":"2","y":"6","rx":"2"}]];

const BatteryLow = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BatteryLow.displayName = 'BatteryLow';

export default BatteryLow;
