import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 8h20"}],["rect",{"x":"2","y":"4","rx":"2"}],["path",{"d":"M6 16h12"}]];

const Dock = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Dock.displayName = 'Dock';

export default Dock;
