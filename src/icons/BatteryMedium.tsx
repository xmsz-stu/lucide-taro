import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 14v-4"}],["path",{"d":"M22 14v-4"}],["path",{"d":"M6 14v-4"}],["rect",{"x":"2","y":"6","rx":"2"}]];

const BatteryMedium = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BatteryMedium.displayName = 'BatteryMedium';

export default BatteryMedium;
