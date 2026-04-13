import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"6","rx":"2"}],["circle",{"cx":"12","cy":"12","r":"2"}],["path",{"d":"M6 12h.01M18 12h.01"}]];

const Banknote = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Banknote.displayName = 'Banknote';

export default Banknote;
