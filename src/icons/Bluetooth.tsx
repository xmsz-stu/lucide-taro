import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 7 10 10-5 5V2l5 5L7 17"}]];

const Bluetooth = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Bluetooth.displayName = 'Bluetooth';

export default Bluetooth;
