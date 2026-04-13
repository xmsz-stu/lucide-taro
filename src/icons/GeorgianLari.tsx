import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11.5 21a7.5 7.5 0 1 1 7.35-9"}],["path",{"d":"M13 12V3"}],["path",{"d":"M4 21h16"}],["path",{"d":"M9 12V3"}]];

const GeorgianLari = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GeorgianLari.displayName = 'GeorgianLari';

export default GeorgianLari;
