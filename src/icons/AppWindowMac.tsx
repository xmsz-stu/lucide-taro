import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"4","rx":"2"}],["path",{"d":"M6 8h.01"}],["path",{"d":"M10 8h.01"}],["path",{"d":"M14 8h.01"}]];

const AppWindowMac = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AppWindowMac.displayName = 'AppWindowMac';

export default AppWindowMac;
