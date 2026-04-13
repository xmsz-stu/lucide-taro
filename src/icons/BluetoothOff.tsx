import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m17 17-5 5V12l-5 5"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M14.5 9.5 17 7l-5-5v4.5"}]];

const BluetoothOff = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BluetoothOff.displayName = 'BluetoothOff';

export default BluetoothOff;
