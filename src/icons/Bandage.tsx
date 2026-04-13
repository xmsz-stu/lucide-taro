import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 10.01h.01"}],["path",{"d":"M10 14.01h.01"}],["path",{"d":"M14 10.01h.01"}],["path",{"d":"M14 14.01h.01"}],["path",{"d":"M18 6v12"}],["path",{"d":"M6 6v12"}],["rect",{"x":"2","y":"6","rx":"2"}]];

const Bandage = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Bandage.displayName = 'Bandage';

export default Bandage;
