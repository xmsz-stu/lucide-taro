import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{}],["line",{}]];

const BluetoothConnected = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BluetoothConnected.displayName = 'BluetoothConnected';

export default BluetoothConnected;
