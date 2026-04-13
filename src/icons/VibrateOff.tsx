import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m2 8 2 2-2 2 2 2-2 2"}],["path",{"d":"m22 8-2 2 2 2-2 2 2 2"}],["path",{"d":"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{"d":"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{}]];

const VibrateOff = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

VibrateOff.displayName = 'VibrateOff';

export default VibrateOff;
